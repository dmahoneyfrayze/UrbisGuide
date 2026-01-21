import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_Bpy322_q.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image/index.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/submit-lead.astro.mjs');
const _page3 = () => import('./pages/care/does-solid-wood-furniture-crack.astro.mjs');
const _page4 = () => import('./pages/care/solid-wood-furniture-care.astro.mjs');
const _page5 = () => import('./pages/care.astro.mjs');
const _page6 = () => import('./pages/design.astro.mjs');
const _page7 = () => import('./pages/embed/table-calculator.astro.mjs');
const _page8 = () => import('./pages/guides/bedroom-furniture-collection.astro.mjs');
const _page9 = () => import('./pages/guides/dining-room-furniture.astro.mjs');
const _page10 = () => import('./pages/guides/dining-table-size-guide.astro.mjs');
const _page11 = () => import('./pages/guides/how-to-choose-a-dining-table.astro.mjs');
const _page12 = () => import('./pages/guides/is-solid-wood-furniture-worth-it.astro.mjs');
const _page13 = () => import('./pages/guides/living-room-furniture.astro.mjs');
const _page14 = () => import('./pages/guides/understanding-urbis-collections.astro.mjs');
const _page15 = () => import('./pages/guides.astro.mjs');
const _page16 = () => import('./pages/materials/live-edge-vs-straight-edge.astro.mjs');
const _page17 = () => import('./pages/materials/parota-wood.astro.mjs');
const _page18 = () => import('./pages/materials/solid-wood-vs-veneer.astro.mjs');
const _page19 = () => import('./pages/materials.astro.mjs');
const _page20 = () => import('./pages/resources/sizing-tool.astro.mjs');
const _page21 = () => import('./pages/sitemap.astro.mjs');
const _page22 = () => import('./pages/why-urbis.astro.mjs');
const _page23 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/submit-lead.ts", _page2],
    ["src/pages/care/does-solid-wood-furniture-crack.mdx", _page3],
    ["src/pages/care/solid-wood-furniture-care.mdx", _page4],
    ["src/pages/care/index.astro", _page5],
    ["src/pages/design/index.astro", _page6],
    ["src/pages/embed/table-calculator.astro", _page7],
    ["src/pages/guides/bedroom-furniture-collection.mdx", _page8],
    ["src/pages/guides/dining-room-furniture.mdx", _page9],
    ["src/pages/guides/dining-table-size-guide.mdx", _page10],
    ["src/pages/guides/how-to-choose-a-dining-table.mdx", _page11],
    ["src/pages/guides/is-solid-wood-furniture-worth-it.mdx", _page12],
    ["src/pages/guides/living-room-furniture.mdx", _page13],
    ["src/pages/guides/understanding-urbis-collections.mdx", _page14],
    ["src/pages/guides/index.astro", _page15],
    ["src/pages/materials/live-edge-vs-straight-edge.mdx", _page16],
    ["src/pages/materials/parota-wood.mdx", _page17],
    ["src/pages/materials/solid-wood-vs-veneer.mdx", _page18],
    ["src/pages/materials/index.astro", _page19],
    ["src/pages/resources/sizing-tool.astro", _page20],
    ["src/pages/sitemap.astro", _page21],
    ["src/pages/why-urbis.mdx", _page22],
    ["src/pages/index.astro", _page23]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "d001951d-1eb9-4257-814a-e0f25c183522"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
