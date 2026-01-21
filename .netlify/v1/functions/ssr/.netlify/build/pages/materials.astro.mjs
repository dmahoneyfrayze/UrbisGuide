import { d as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BnC5UhzS.mjs';
import 'piccolore';
import { $ as $$CollectionLayout } from '../chunks/CollectionLayout_DmfjrAL5.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "CollectionLayout", $$CollectionLayout, { "title": "Materials & Craftsmanship", "description": "Understand the unique properties of Parota, Acacia, and Walnut to make the right choice for your dining table.", "urlCategory": "materials" }, { "default": ($$result2) => renderTemplate`    ${maybeRenderHead()}<a href="/materials/parota-wood" class="group block"> <div class="aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden mb-6 relative"> <img src="https://urbisconcepts.com/cdn/shop/files/Live_Edge_Parota_Table.png?v=1764875346" alt="Parota Wood Grain" class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"> <div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div> </div> <h3 class="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
Parota Wood Profile
</h3> <p class="text-gray-600">
Why this sustainable giant is our top choice for large live edge
            slabs.
</p> </a> <a href="/materials/solid-wood-vs-veneer" class="group block"> <div class="aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden mb-6 relative"> <img src="https://urbisconcepts.com/cdn/shop/files/IMG_0082.heic?v=1755633335&width=1200" alt="Solid Wood vs Veneer" class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"> <div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div> </div> <h3 class="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
Solid Wood vs. Veneer
</h3> <p class="text-gray-600">
The truth about longevity, repairability, and long-term value.
</p> </a> <a href="/materials/live-edge-vs-straight-edge" class="group block"> <div class="aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden mb-6 relative"> <img src="https://urbisconcepts.com/cdn/shop/files/IMG_2505.heic?v=1755633335&width=1200" alt="Live Edge vs Straight Edge" class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"> <div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div> </div> <h3 class="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
Live Edge vs. Straight Edge
</h3> <p class="text-gray-600">
Comparing organic drama vs. architectural clean lines.
</p> </a> `, "intro": ($$result2) => renderTemplate`<div> <p>
The wood you choose for your dining table isn't just about color—it
            determines how the piece will age, how it handles daily wear, and
            how much maintenance it requires. At Urbis Concepts, we specialize
            in dense, tropical hardwoods that offer superior durability compared
            to common domestic softwoods.
</p> <p class="mt-4">
We source our slabs from sustainable operations in Mexico and
            Central America, focusing on <strong>Parota</strong> (Guanacaste) for
            its incredible stability and <strong>Acacia</strong> for its density.
            Every slab is kiln-dried to 8-10% moisture content—a critical step that
            prevents the warping and cracking common in air-dried imports.
</p> </div>` })}`;
}, "/Users/denismahoney/Desktop/Websites/Urbis-Guide/src/pages/materials/index.astro", void 0);

const $$file = "/Users/denismahoney/Desktop/Websites/Urbis-Guide/src/pages/materials/index.astro";
const $$url = "/materials/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
