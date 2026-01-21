import { d as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BnC5UhzS.mjs';
import 'piccolore';
import { $ as $$CollectionLayout } from '../chunks/CollectionLayout_DmfjrAL5.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "CollectionLayout", $$CollectionLayout, { "title": "Buying Guides", "description": "Expert advice on dining table sizing, selection frameworks, and design planning.", "urlCategory": "guides" }, { "default": ($$result2) => renderTemplate`    ${maybeRenderHead()}<a href="/guides/understanding-urbis-collections" class="group block"> <div class="aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden mb-6 relative"> <img src="https://urbisconcepts.com/cdn/shop/files/Live_Edge_Parota_Table.png?v=1764875346" alt="Urbis Collections Overview" class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"> </div> <h3 class="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
Understanding Urbis Collections
</h3> <p class="text-gray-600">
Navigate our design languages to find the perfect solid wood
            furniture for your space.
</p> </a> <a href="/guides/how-to-choose-a-dining-table" class="group block"> <div class="aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden mb-6 relative"> <img src="https://urbisconcepts.com/cdn/shop/files/IMG_1762.jpg?v=1755633334&width=1200" alt="Dining Room Selection" class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"> </div> <h3 class="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
How to Choose a Dining Table
</h3> <p class="text-gray-600">
Our step-by-step framework for matching a table to your lifestyle.
</p> </a> <a href="/guides/dining-table-size-guide" class="group block"> <div class="aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden mb-6 relative"> <img src="https://urbisconcepts.com/cdn/shop/files/IMG_1044.heic?v=1755633336&width=1200" alt="Dining Table Size Diagram concept" class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"> </div> <h3 class="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
Dining Table Size Guide
</h3> <p class="text-gray-600">
Seating capacities, clearance rules, and shape optimization.
</p> </a> <a href="/guides/is-solid-wood-furniture-worth-it" class="group block"> <div class="aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden mb-6 relative"> <img src="https://urbisconcepts.com/cdn/shop/files/IMG_2293.heic?v=1755633335&width=1200" alt="Solid Wood Detail" class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"> </div> <h3 class="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
Is Solid Wood Worth It?
</h3> <p class="text-gray-600">
The financial and practical breakdown of why solid wood wins over
            veneer.
</p> </a> `, "intro": ($$result2) => renderTemplate`<div> <p>
Furniture is a significant investment, and the details matter. At
            Urbis Concepts, we believe an educated buyer is a happy owner. Our
            buying guides are designed to cut through the marketing noise and
            give you the technical specifications, sizing rules, and material
            facts you need to choose with confidence.
</p> <p class="mt-4">
We don't just sell tables; we help you design your dining
            experience. Learn exactly how much clearance you need (<strong>hint: it's more than you think</strong>) and which shapes optimize small layouts vs. open floor plans.
</p> </div>` })}`;
}, "/Users/denismahoney/Desktop/Websites/Urbis-Guide/src/pages/guides/index.astro", void 0);

const $$file = "/Users/denismahoney/Desktop/Websites/Urbis-Guide/src/pages/guides/index.astro";
const $$url = "/guides/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
