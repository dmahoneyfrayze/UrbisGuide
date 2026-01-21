import { d as createComponent, m as maybeRenderHead, r as renderTemplate } from '../chunks/astro/server_BnC5UhzS.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="min-h-[60vh] flex flex-col items-center justify-center text-center px-6"> <h1 class="font-heading text-8xl font-bold text-gray-200 mb-4">404</h1> <h2 class="text-3xl font-heading font-bold text-secondary mb-6">Page Not Found</h2> <p class="text-gray-600 max-w-md mx-auto mb-10 leading-relaxed">
The page you are looking for might have been moved, renamed, or doesn't exist.
</p> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl"> <a href="/guides" class="p-6 rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all group bg-white"> <h3 class="font-bold text-lg mb-2 group-hover:text-primary transition-colors">Buying Guides</h3> <p class="text-sm text-gray-500">Choosing the right table</p> </a> <a href="/materials" class="p-6 rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all group bg-white"> <h3 class="font-bold text-lg mb-2 group-hover:text-primary transition-colors">Materials</h3> <p class="text-sm text-gray-500">Wood types & comparisons</p> </a> <a href="/care" class="p-6 rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all group bg-white"> <h3 class="font-bold text-lg mb-2 group-hover:text-primary transition-colors">Care Guide</h3> <p class="text-sm text-gray-500">Maintenance tips</p> </a> </div> <a href="/" class="mt-12 text-primary font-bold hover:text-secondary transition-colors">
&larr; Return to Home
</a> </div>`;
}, "/Users/denismahoney/Desktop/Websites/Urbis-Guide/src/pages/404.astro", void 0);

const $$file = "/Users/denismahoney/Desktop/Websites/Urbis-Guide/src/pages/404.astro";
const $$url = "/404/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
