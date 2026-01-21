import { d as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BnC5UhzS.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Oh7OFzZQ.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Design Inspiration", "description": "Explore curated interiors featuring our bespoke solid wood furniture pieces. Get inspired by modern organic and industrial designs.", "image": "https://urbisconcepts.com/cdn/shop/files/IMG_8817.heic?v=1755633335&width=1200" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="py-16 md:py-24 text-center bg-secondary text-white mb-12"> <h1 class="text-5xl md:text-6xl font-heading font-bold mb-6 animate-slide-up">
Design Inspiration
</h1> <p class="text-xl text-gray-300 max-w-2xl mx-auto font-light animate-slide-up delay-100">
Explore curated interiors featuring our bespoke solid wood furniture
            pieces.
</p> </div> <div class="container mx-auto px-6"> <div class="grid md:grid-cols-2 gap-8"> <div class="bg-gray-100 rounded-xl overflow-hidden shadow-sm aspect-square md:aspect-[4/5] relative group"> <img src="https://urbisconcepts.com/cdn/shop/files/IMG_1044.heic?v=1755633336&width=1200" alt="Statement Live Edge Table" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"> </div> <div class="bg-gray-100 rounded-xl overflow-hidden shadow-sm aspect-square md:aspect-[4/5] relative group"> <img src="https://urbisconcepts.com/cdn/shop/files/IMG_8817.heic?v=1755633335&width=1200" alt="Modern Solid Wood Living Room" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"> </div> <div class="bg-gray-100 rounded-xl overflow-hidden shadow-sm aspect-square md:aspect-[4/5] relative group"> <img src="https://urbisconcepts.com/cdn/shop/files/IMG_0078.heic?v=1755633335&width=1200" alt="Handcrafted Joinery Detail" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"> </div> <div class="bg-gray-100 rounded-xl overflow-hidden shadow-sm aspect-square md:aspect-[4/5] relative group"> <img src="https://urbisconcepts.com/cdn/shop/files/IMG_9464.heic?v=1755633334&width=1200" alt="Live Edge Coffee Table" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"> </div> </div> </div> ` })}`;
}, "/Users/denismahoney/Desktop/Websites/Urbis-Guide/src/pages/design/index.astro", void 0);

const $$file = "/Users/denismahoney/Desktop/Websites/Urbis-Guide/src/pages/design/index.astro";
const $$url = "/design/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
