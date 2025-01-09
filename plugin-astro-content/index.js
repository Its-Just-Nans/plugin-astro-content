import fg from "fast-glob";
import { resolve } from "path";

let defaultOptions = Object.freeze({
    absolute: true,
    markDirectories: true,
    // objectMode: true,
    dot: true,
    onlyFiles: false,
});

const name = "plugin-astro-content";

const solveGlob = async (glob, options = {}) => {
    const correctPath = resolve(glob);
    const currentOptions = { ...defaultOptions, ...options };
    const res = await fg(correctPath, currentOptions);
    return res;
};

const pluginContent = (pluginOptions = {}) => {
    return {
        name,
        enforce: "pre",
        async transform(code, id) {
            if (!code.includes("ContentLoader")) return;
            const globGroups = code.match(/ContentLoader\((.*)\)/);
            if (!globGroups) return;
            const glob = globGroups[1].slice(1, -1);
            let globsResolved = [];
            try {
                globsResolved = await solveGlob(glob, pluginOptions);
            } catch (e) {
                console.error(e);
            }
            const finalCode = code.replace(/ContentLoader\(.*?\)/, JSON.stringify(globsResolved));
            return {
                code: finalCode,
                map: null,
            };
        },
    };
};

export default pluginContent;

export const ContentLoader = (...args) => {
    throw new Error(
        "ContentLoader should be replaced by vite (did you add plugin-astro-content in the config ?) or use ContentLoaderRuntime"
    );
};

export const ContentLoaderRuntime = (path, options = {}) => {
    return solveGlob(path, options);
};
