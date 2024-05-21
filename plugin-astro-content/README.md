# plugin-astro-content

Glob import in [astrojs](https://astro.build) ! See demo <https://its-just-nans.github.io/plugin-astro-content/>

## Usage

Add to your `astro.config.mjs`:

```js
import Content from "plugin-astro-content";

export default defineConfig({
    vite: {
        plugins: [
            Content({ objectMode: true }) // change options here
        ],
    },
});

```

```astro
---
import { ContentLoader, ContentLoaderRuntime } from "plugin-astro-content";

const ContentLoaderValue = ContentLoader("../*");

const dynamic = "../*";

const ContentLoaderRuntimeValue = await ContentLoaderRuntime(dynamic);

const ContentLoaderRuntimeValueWithOptions = await ContentLoaderRuntime(dynamic, { objectMode: true }); // dynamic options at runtime
---

<div>{ContentLoaderValue}</div>
<div>{ContentLoaderRuntimeValue}</div>
<div>{ContentLoaderRuntimeValueWithOptions}</div>

```

## License

Licensed under the MIT License - [LICENSE](LICENSE)
