import { d as createComponent, m as maybeRenderHead, r as renderTemplate, c as createAstro, k as renderComponent, j as Fragment, f as addAttribute, n as renderSlot } from './astro/server_BnC5UhzS.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from './BaseLayout_Oh7OFzZQ.mjs';
import { $ as $$Schema } from './Schema_MZ6u8sC_.mjs';
import 'clsx';

const $$TrustAuthor = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="mt-16 mb-8 p-6 bg-gray-50 rounded-xl border border-gray-100 flex items-start gap-4"> <div class="flex-shrink-0"> <div class="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-bold font-heading text-lg">
U
</div> </div> <div> <p class="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Written & Verified By</p> <h4 class="text-lg font-heading font-bold text-secondary mb-2">The Urbis Workshop Team</h4> <p class="text-sm text-gray-600 leading-relaxed">
Our guides are written by real woodworkers, not AI. We draw from years of experience sourcing sustainable Parota slabs in Mexico and finishing them in our Toronto workshop. We believe in transparency, craftsmanship, and furniture that lasts generations.
</p> </div> </div>`;
}, "/Users/denismahoney/Desktop/Websites/Urbis-Guide/src/components/TrustAuthor.astro", void 0);

const $$Astro = createAstro("https://guide.urbisconcepts.com");
const $$GuideLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GuideLayout;
  const { frontmatter } = Astro2.props;
  const currentUrl = `https://guide.urbisconcepts.com${Astro2.url.pathname.replace(/\/+$/, "")}/`;
  let parentHub = { name: "Guides", url: "/guides" };
  if (frontmatter.category === "Materials & Craft") {
    parentHub = { name: "Materials", url: "/materials" };
  } else if (frontmatter.category === "Care & Maintenance") {
    parentHub = { name: "Care", url: "/care" };
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": frontmatter.title, "description": frontmatter.description, "image": frontmatter.image }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<article class="max-w-4xl mx-auto py-12 px-6 animate-fade-in"> <!-- Breadcrumb --> <nav class="flex text-sm text-gray-500 mb-12 border-b border-gray-100 pb-4" aria-label="Breadcrumb"> <ol class="inline-flex items-center space-x-1 md:space-x-3"> <li class="inline-flex items-center"> <a href="/" class="hover:text-primary transition-colors flex items-center gap-2"> <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"></path></svg>
Home
</a> </li> <li> <div class="flex items-center"> <svg class="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path> </svg> <a${addAttribute(`/${frontmatter.category === "Materials & Craft" ? "materials" : frontmatter.category === "Care & Maintenance" ? "care" : "guides"}`, "href")} class="hover:text-primary transition-colors"> ${frontmatter.category === "Materials & Craft" ? "Materials" : frontmatter.category === "Care & Maintenance" ? "Care" : "Guides"} </a> </div> </li> </ol> </nav> <!-- Header --> <header class="mb-16 text-center max-w-3xl mx-auto"> <span class="inline-block py-1 px-3 border border-primary/30 rounded-full text-primary text-xs uppercase tracking-[0.2em] font-bold mb-6 bg-primary/5"> ${frontmatter.category || "Guide"} </span> <h1 class="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-8 text-secondary leading-tight"> ${frontmatter.title} </h1> </header> <!-- Content --> <div class="prose prose-lg md:prose-xl prose-headings:font-heading prose-headings:text-secondary prose-p:text-gray-600 prose-p:leading-loose prose-a:text-primary prose-a:font-bold hover:prose-a:text-primary/80 prose-img:rounded-xl prose-img:shadow-lg mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100"> ${renderSlot($$result2, $$slots["default"])} ${renderComponent($$result2, "TrustAuthor", $$TrustAuthor, {})} </div> <!-- Call to Action --> <div class="mt-20 pt-12 border-t border-gray-200 text-center"> <div class="bg-secondary rounded-2xl p-10 md:p-16 text-white relative overflow-hidden group"> <div class="absolute inset-0 bg-primary/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div> <div class="relative z-10"> <h3 class="text-3xl font-heading font-bold mb-4">
Ready to find your perfect table?
</h3> <p class="mb-8 text-gray-300 text-lg max-w-xl mx-auto">
Explore our exclusive collection of handcrafted solid
                        wood dining tables, built to your exact specifications.
</p> <a href="https://urbisconcepts.com/collections/live-edge" class="inline-block bg-white text-secondary px-10 py-4 font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors shadow-lg">
Shop Live Edge Tables
</a> </div> </div> </div> </article> `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Schema", $$Schema, { "title": frontmatter.title, "description": frontmatter.description, "url": currentUrl, "type": frontmatter.schemaType || "Article", "faqs": frontmatter.faqs, "parent": parentHub, "image": frontmatter.image, "publishDate": frontmatter.publishDate, "items": frontmatter.items })} ` })}` })}`;
}, "/Users/denismahoney/Desktop/Websites/Urbis-Guide/src/layouts/GuideLayout.astro", void 0);

export { $$GuideLayout as $ };
