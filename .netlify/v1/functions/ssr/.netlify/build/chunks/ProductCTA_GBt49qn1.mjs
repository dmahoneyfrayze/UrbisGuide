import { c as createAstro, d as createComponent, m as maybeRenderHead, f as addAttribute, r as renderTemplate } from './astro/server_BnC5UhzS.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://guide.urbisconcepts.com");
const $$ProductCTA = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProductCTA;
  const { title, description, image, url, price, buttonText = "View Details" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")} class="group block my-12 not-prose no-underline"> <div class="bg-surface rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row"> <!-- Image --> <div class="sm:w-1/3 relative min-h-[250px] overflow-hidden"> <img${addAttribute(image, "src")}${addAttribute(title, "alt")} class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"> </div> <!-- Content --> <div class="p-8 sm:w-2/3 flex flex-col justify-center"> <div class="uppercase tracking-widest text-xs font-bold text-primary mb-3">Shop Recommendations</div> <h3 class="text-2xl font-heading font-bold text-secondary mb-3 group-hover:text-primary transition-colors"> ${title} </h3> <p class="text-gray-600 mb-6 leading-relaxed"> ${description} </p> <div class="flex items-center justify-between mt-auto"> ${price && renderTemplate`<span class="font-medium text-secondary">${price}</span>`} <span class="inline-flex items-center text-sm font-bold uppercase tracking-widest text-primary border-b-2 border-transparent group-hover:border-primary transition-all"> ${buttonText} <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </span> </div> </div> </div> </a>`;
}, "/Users/denismahoney/Desktop/Websites/Urbis-Guide/src/components/ProductCTA.astro", void 0);

export { $$ProductCTA as $ };
