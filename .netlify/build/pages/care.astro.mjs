import { d as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BnC5UhzS.mjs';
import 'piccolore';
import { $ as $$CollectionLayout } from '../chunks/CollectionLayout_DmfjrAL5.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "CollectionLayout", $$CollectionLayout, { "title": "Care & Maintenance", "description": "Protocols for protecting solid wood furniture from humidity, heat, and wear.", "urlCategory": "care" }, { "default": ($$result2) => renderTemplate`    ${maybeRenderHead()}<a href="/care/solid-wood-furniture-care" class="group block"> <div class="aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden mb-6 relative"> <img src="https://urbisconcepts.com/cdn/shop/files/IMG_0078.heic?v=1755633335&width=1200" alt="Oiling Wood Table" class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"> </div> <h3 class="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
Solid Wood Care Guide
</h3> <p class="text-gray-600">
Daily cleaning, maintenance oiling, and climate control essentials.
</p> </a> <a href="/care/does-solid-wood-furniture-crack" class="group block"> <div class="aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden mb-6 relative"> <img src="https://urbisconcepts.com/cdn/shop/files/IMG_8835.heic?v=1755633335&width=1200" alt="Wood Texture" class="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"> </div> <h3 class="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
Does Solid Wood Crack?
</h3> <p class="text-gray-600">
The truth about wood movement and how to stop it.
</p> </a> `, "intro": ($$result2) => renderTemplate`<div> <p>
Solid wood furniture is a living legacy. Unlike disposable fast
            furniture, a solid wood table can last for generations—if you treat
            it right. Our care guides are based on decades of woodworking
            experience, helping you understand how your furniture breathes,
            moves, and reacts to its environment.
</p> <p class="mt-4">
Maintenance doesn't have to be a chore. It comes down to three
            simple habits: <strong>Humidity Control</strong> (40-45% is key), <strong>Proper Finishing</strong> with natural oils, and simple <strong>Prevention</strong>. Browse
            our protocols below to keep your investment looking pristine.
</p> </div>` })}`;
}, "/Users/denismahoney/Desktop/Websites/Urbis-Guide/src/pages/care/index.astro", void 0);

const $$file = "/Users/denismahoney/Desktop/Websites/Urbis-Guide/src/pages/care/index.astro";
const $$url = "/care/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
