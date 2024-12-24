# plugin-astro-content [![npm link](https://img.shields.io/npm/v/plugin-astro-content)](https://www.npmjs.com/package/plugin-astro-content) [![npm downloads](https://img.shields.io/npm/dt/plugin-astro-content)](https://www.npmjs.com/package/plugin-astro-content)

Glob import in [astrojs](https://astro.build) ! See demo <https://its-just-nans.github.io/plugin-astro-content/>

## Usage

There are two possible usage for this plugin:

- at compile time
- at runtime

### Usage at compile time

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

Then in your astro file:

```astro
---
import { ContentLoader } from "plugin-astro-content";

const ContentLoaderValue = ContentLoader("../*"); // act mostly like import.meta.glob("../*")
---

<div>{ContentLoaderValue}</div>
```

### Usage at runtime

In this case (no need to change the config)

```astro
---
import { ContentLoaderRuntime } from "plugin-astro-content";

const dynamic = "../*";
const ContentLoaderRuntimeValue = await ContentLoaderRuntime(dynamic);


// with dynamic options
const ContentLoaderRuntimeValueWithOptions = await ContentLoaderRuntime(dynamic, { objectMode: true });
---

<div>{ContentLoaderRuntimeValue}</div>
<div>{ContentLoaderRuntimeValueWithOptions}</div>
```

## License

Licensed under the MIT License - [LICENSE](LICENSE)
