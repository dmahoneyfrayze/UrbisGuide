import { c as createAstro, d as createComponent, m as maybeRenderHead, r as renderTemplate, f as addAttribute } from './astro/server_BnC5UhzS.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://guide.urbisconcepts.com");
const $$ImageGallery = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ImageGallery;
  const { images, title = "Design Inspiration", description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="my-20 not-prose"> ${title && renderTemplate`<h3 class="text-3xl font-heading font-bold text-center mb-4 text-secondary"> ${title} </h3>`} ${description && renderTemplate`<p class="text-center text-gray-600 max-w-2xl mx-auto mb-12"> ${description} </p>`} <div class="grid grid-cols-2 md:grid-cols-3 gap-4"> ${images.map((image) => renderTemplate`<div class="relative group overflow-hidden rounded-xl bg-gray-100 aspect-square md:aspect-[4/5]"> <img${addAttribute(image.src, "src")}${addAttribute(image.alt, "alt")} class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy"> <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> </div>`)} </div> </section>`;
}, "/Users/denismahoney/Desktop/Websites/Urbis-Guide/src/components/ImageGallery.astro", void 0);

export { $$ImageGallery as $ };
