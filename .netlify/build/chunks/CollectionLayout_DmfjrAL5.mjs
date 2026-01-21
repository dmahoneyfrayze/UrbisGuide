import { c as createAstro, d as createComponent, k as renderComponent, r as renderTemplate, j as Fragment, f as addAttribute, m as maybeRenderHead, n as renderSlot } from './astro/server_BnC5UhzS.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from './BaseLayout_Oh7OFzZQ.mjs';
import { $ as $$Schema } from './Schema_MZ6u8sC_.mjs';

const $$Astro = createAstro("https://guide.urbisconcepts.com");
const $$CollectionLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CollectionLayout;
  const { title, description, urlCategory } = Astro2.props;
  const currentUrl = `https://guide.urbisconcepts.com/${urlCategory}/`;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="max-w-7xl mx-auto px-6 py-12 md:py-20 animate-fade-in"> <!-- Breadcrumb --> <nav class="flex text-sm text-gray-500 mb-8" aria-label="Breadcrumb"> <ol class="inline-flex items-center space-x-1 md:space-x-3"> <li class="inline-flex items-center"> <a href="/" class="hover:text-primary transition-colors flex items-center gap-2"> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"></path></svg>
Home
</a> </li> <li> <div class="flex items-center"> <svg class="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path> </svg> <span class="text-gray-900 font-medium">${title}</span> </div> </li> </ol> </nav> <!-- Authority Header --> <header class="max-w-4xl mb-20"> <h1 class="text-5xl md:text-6xl font-heading font-bold mb-8 text-secondary">${title}</h1> <div class="prose prose-xl prose-p:text-gray-600 leading-relaxed"> ${renderSlot($$result2, $$slots["intro"])} </div> </header> <!-- Child Pages Grid --> <section> <h2 class="text-2xl font-bold mb-8 border-b border-gray-100 pb-4">Guides in this Collection</h2> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> ${renderSlot($$result2, $$slots["default"])} </div> </section> <!-- CTA --> <div class="mt-24 bg-surface p-12 rounded-2xl border border-gray-100 text-center"> <h3 class="text-3xl font-heading font-bold mb-4">Have Questions?</h3> <p class="mb-8 text-gray-600 max-w-2xl mx-auto">Our design consultants are experts in solid wood sizing and care. Reach out for a personalized recommendation.</p> <a href="https://urbisconcepts.com/pages/contact" class="inline-block bg-secondary text-white px-8 py-3 font-medium hover:bg-black transition-colors">
Contact Urbis Concepts
</a> </div> </div> `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Schema", $$Schema, { "title": title, "description": description, "url": currentUrl, "type": "CollectionPage" })} <link rel="canonical"${addAttribute(currentUrl, "href")}> ` })}` })}`;
}, "/Users/denismahoney/Desktop/Websites/Urbis-Guide/src/layouts/CollectionLayout.astro", void 0);

export { $$CollectionLayout as $ };
