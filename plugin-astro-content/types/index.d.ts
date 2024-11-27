export default pluginContent;
export function ContentLoader(...args: any[]): never;
export function ContentLoaderRuntime(path: string, options: any): Promise<any>;
declare function pluginContent(pluginOptions: any): {
    name: string;
    enforce: string;
    transform(
        code: any,
        id: any
    ): Promise<{
        code: any;
        map: any;
    }>;
};
