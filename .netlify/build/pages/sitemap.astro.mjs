import { d as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BnC5UhzS.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Oh7OFzZQ.mjs';
export { renderers } from '../renderers.mjs';

const $$Sitemap = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Sitemap", "description": "Complete overview of all guides and resources on Urbis Concepts Guide." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-3xl mx-auto py-12 px-4"> <h1 class="text-4xl font-bold mb-8 text-secondary">Sitemap</h1> <div class="space-y-8"> <section> <h2 class="text-2xl font-bold mb-4 text-primary border-b border-gray-100 pb-2">Buying Guides</h2> <ul class="space-y-3"> <li><a href="/guides/dining-table-size-guide" class="text-lg hover:text-primary underline decoration-gray-300 underline-offset-4">Dining Table Size Guide</a></li> <li><a href="/guides/how-to-choose-a-dining-table" class="text-lg hover:text-primary underline decoration-gray-300 underline-offset-4">How to Choose a Dining Table</a></li> </ul> </section> <section> <h2 class="text-2xl font-bold mb-4 text-primary border-b border-gray-100 pb-2">Materials & Craft</h2> <ul class="space-y-3"> <li><a href="/materials/solid-wood-vs-veneer" class="text-lg hover:text-primary underline decoration-gray-300 underline-offset-4">Solid Wood vs. Veneer</a></li> <li><a href="/materials/parota-wood" class="text-lg hover:text-primary underline decoration-gray-300 underline-offset-4">Parota Wood Profile</a></li> </ul> </section> <section> <h2 class="text-2xl font-bold mb-4 text-primary border-b border-gray-100 pb-2">Care & Maintenance</h2> <ul class="space-y-3"> <li><a href="/care/solid-wood-furniture-care" class="text-lg hover:text-primary underline decoration-gray-300 underline-offset-4">Solid Wood Furniture Care Guide</a></li> </ul> </section> </div> </div> ` })}`;
}, "/Users/denismahoney/Desktop/Websites/Urbis-Guide/src/pages/sitemap.astro", void 0);

const $$file = "/Users/denismahoney/Desktop/Websites/Urbis-Guide/src/pages/sitemap.astro";
const $$url = "/sitemap/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Sitemap,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
