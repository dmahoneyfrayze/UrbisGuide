import { d as createComponent, m as maybeRenderHead, o as renderScript, f as addAttribute, r as renderTemplate, c as createAstro, k as renderComponent, n as renderSlot, l as renderHead } from './astro/server_BnC5UhzS.mjs';
import 'piccolore';
/* empty css                         */
import 'clsx';
/* empty css                         */

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const links = [
    { href: "/materials", label: "Materials" },
    { href: "/guides", label: "Buying Guides" },
    { href: "/design", label: "Design" },
    { href: "/care", label: "Care" },
    { href: "/why-urbis", label: "Why Urbis" }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="bg-background/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 transition-all duration-300"> <div class="container mx-auto px-6 h-24 flex items-center justify-between"> <a href="/" class="flex flex-col group z-50 relative"> <span class="font-heading text-3xl font-bold tracking-tight text-secondary group-hover:text-primary transition-colors">URBIS<span class="text-primary group-hover:text-secondary transition-colors">CONCEPTS</span></span> <span class="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-medium ml-1">Guide & Resources</span> </a> <nav class="hidden md:flex items-center gap-10"> ${links.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="relative text-secondary font-medium text-sm uppercase tracking-widest hover:text-primary transition-colors group py-2"> ${link.label} <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span> </a>`)} </nav> <div class="hidden md:flex items-center gap-6"> <a href="https://urbisconcepts.com" class="bg-secondary text-white px-6 py-3 text-xs uppercase tracking-widest font-bold hover:bg-primary transition-colors duration-300 shadow-sm hover:shadow-md">
Shop Store
</a> </div> <!-- Mobile Menu Button --> <button id="mobile-menu-btn" class="md:hidden text-secondary p-2 hover:bg-gray-100 rounded-full transition-colors z-50 relative" aria-label="Menu"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </div> <!-- Mobile Menu Overlay --> <div id="mobile-menu" class="fixed inset-0 bg-white/95 backdrop-blur-xl z-40 transform translate-x-full transition-transform duration-300 flex items-center justify-center md:hidden"> <nav class="flex flex-col items-center gap-8"> ${links.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="text-2xl font-heading font-bold text-secondary hover:text-primary transition-colors"> ${link.label} </a>`)} <a href="https://urbisconcepts.com" class="mt-4 bg-secondary text-white px-8 py-4 text-sm uppercase tracking-widest font-bold shadow-lg">
Shop Store
</a> </nav> </div> </header> ${renderScript($$result, "/Users/denismahoney/Desktop/Websites/Urbis-Guide/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/denismahoney/Desktop/Websites/Urbis-Guide/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="bg-secondary text-white pt-20 pb-10 mt-20"> <div class="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-16"> <div class="space-y-6"> <a href="/" class="block"> <span class="font-heading text-2xl font-bold tracking-tight">URBIS<span class="text-primary">CONCEPTS</span></span> </a> <p class="text-gray-300 text-sm leading-loose max-w-xs">
Handcrafted solid wood furniture designed to elevate your space.
                Built with passion, designed to last generations.
</p> </div> <div> <h3 class="font-heading font-bold mb-6 text-white text-lg">
Explore
</h3> <ul class="space-y-4 text-sm text-gray-300"> <li> <a href="/materials" class="hover:text-primary transition-colors">Materials & Craft</a> </li> <li> <a href="/guides" class="hover:text-primary transition-colors">Buying Guides</a> </li> <li> <a href="/guides/understanding-urbis-collections" class="hover:text-primary transition-colors font-bold">Understanding Collections</a> </li> <li> <a href="/care" class="hover:text-primary transition-colors">Care Instructions</a> </li> <li> <a href="/design" class="hover:text-primary transition-colors">Design Inspiration</a> </li> </ul> </div> <div> <h3 class="font-heading font-bold mb-6 text-white text-lg">
Room Guides
</h3> <ul class="space-y-4 text-sm text-gray-300"> <li> <a href="/guides/bedroom-furniture-collection" class="hover:text-primary transition-colors">Bedroom</a> </li> <li> <a href="/guides/dining-room-furniture" class="hover:text-primary transition-colors">Dining Room</a> </li> <li> <a href="/guides/living-room-furniture" class="hover:text-primary transition-colors">Living Room</a> </li> <li> <a href="/guides/dining-table-size-guide" class="hover:text-primary transition-colors">Dining Size Guide</a> </li> <li> <a href="/resources/sizing-tool" class="hover:text-primary transition-colors text-primary font-bold">Table Sizing Calculator</a> </li> </ul> </div> <div> <h3 class="font-heading font-bold mb-6 text-white text-lg">Shop</h3> <ul class="space-y-4 text-sm text-gray-300"> <li> <a href="https://urbisconcepts.com/collections/all" class="hover:text-primary transition-colors">All Collections</a> </li> <li> <a href="https://urbisconcepts.com/collections/live-edge" class="hover:text-primary transition-colors">Live Edge Tables</a> </li> <li> <a href="https://urbisconcepts.com/pages/contact" class="hover:text-primary transition-colors">Contact Us</a> </li> <li> <a href="https://urbisconcepts.com/pages/book-visit" class="hover:text-primary transition-colors">Visit Showroom</a> </li> </ul> </div> <div> <h3 class="font-heading font-bold mb-6 text-white text-lg">
Connect
</h3> <p class="text-sm text-gray-300 leading-relaxed mb-4">
Join our newsletter on the main site for exclusive updates and
                design tips.
</p> <a href="https://urbisconcepts.com" class="text-sm font-bold text-white hover:text-primary transition-colors">Subscribe &rarr;</a> </div> </div> <div class="container mx-auto px-6 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-wider"> <div class="flex flex-col md:flex-row gap-4 items-center"> <p>&copy; ${currentYear} Urbis Concepts. All rights reserved.</p> <span class="hidden md:inline text-gray-700">|</span> <p class="text-gray-400 font-semibold tracking-normal normal-case">
Proudly Serving Etobicoke & The GTA 🇨🇦
</p> </div> <div class="flex gap-6 mt-4 md:mt-0"> <a href="https://urbisconcepts.com/pages/privacy-policy" class="hover:text-white transition-colors">Privacy Policy</a> <a href="https://urbisconcepts.com/pages/terms-of-service" class="hover:text-white transition-colors">Terms of Service</a> </div> </div> </footer>`;
}, "/Users/denismahoney/Desktop/Websites/Urbis-Guide/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro("https://guide.urbisconcepts.com");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/denismahoney/Desktop/Websites/Urbis-Guide/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/denismahoney/Desktop/Websites/Urbis-Guide/node_modules/astro/components/ClientRouter.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://guide.urbisconcepts.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title,
    description = "The ultimate guide to solid wood furniture, care, and design by Urbis Concepts.",
    image = "https://urbisconcepts.com/cdn/shop/files/Parota_Live_Edge_Dining_Table_1.jpg?v=1700000000"
  } = Astro2.props;
  const canonicalURL = new URL(
    Astro2.url.pathname.replace(/\/+$/, "") + "/",
    Astro2.site
  );
  return renderTemplate(_a || (_a = __template(['<html lang="en" class="text-secondary bg-background font-sans"> <head><meta charset="UTF-8"><meta name="description"', '><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', '><link rel="canonical"', '><!-- Google tag (gtag.js) --><script async src="https://www.googletagmanager.com/gtag/js?id=G-080DVEFY0Y"><\/script><script>\n      window.dataLayer = window.dataLayer || [];\n      function gtag() {\n        dataLayer.push(arguments);\n      }\n      gtag("js", new Date());\n\n      gtag("config", "G-080DVEFY0Y");\n    <\/script><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:image:alt"', '><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', '><meta property="twitter:image:alt"', "><title>", ' | Urbis Concepts Guide</title><!-- Performance optimizations --><meta name="theme-color" content="#c2542a"><link rel="preconnect" href="https://beta.leadconnectorhq.com"><link rel="preconnect" href="https://links.urbisconcepts.com">', '<script type="text/partytown" src="https://links.urbisconcepts.com/js/external-tracking.js" data-tracking-id="tk_412b70e7363e4997aa21be85041884ba"><\/script>', "", '</head> <body class="flex flex-col min-h-screen"> ', ' <main class="flex-grow container mx-auto px-4 py-8"> ', " </main> ", ' <div data-chat-widget data-widget-id="68f8484c008ff375adcc09ef" data-location-id="Z9Vg8cf0Zm8TE2uP4PHd"></div> <script type="text/partytown" src="https://beta.leadconnectorhq.com/loader.js" data-resources-url="https://beta.leadconnectorhq.com/chat-widget/loader.js" data-widget-id="68f8484c008ff375adcc09ef"><\/script> </body> </html>'])), addAttribute(description, "content"), addAttribute(Astro2.generator, "content"), addAttribute(canonicalURL, "href"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(image, "content"), addAttribute(title, "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(image, "content"), addAttribute(title, "content"), title, renderComponent($$result, "ViewTransitions", $$ClientRouter, {}), renderSlot($$result, $$slots["head"]), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/denismahoney/Desktop/Websites/Urbis-Guide/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
