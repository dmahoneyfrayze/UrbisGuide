import { d as createComponent, l as renderHead, k as renderComponent, r as renderTemplate } from '../../chunks/astro/server_BnC5UhzS.mjs';
import 'piccolore';
/* empty css                                    */
import { $ as $$TableCalculator$1 } from '../../chunks/TableCalculator_COn3oE1r.mjs';
export { renderers } from '../../renderers.mjs';

const $$TableCalculator = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en" class="bg-transparent"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><title>Urbis Table Calculator Embed</title>${renderHead()}</head> <body class="min-h-screen flex items-center justify-center p-4 bg-transparent"> <div class="w-full max-w-4xl"> ${renderComponent($$result, "TableCalculator", $$TableCalculator$1, {})} </div> </body></html>`;
}, "/Users/denismahoney/Desktop/Websites/Urbis-Guide/src/pages/embed/table-calculator.astro", void 0);

const $$file = "/Users/denismahoney/Desktop/Websites/Urbis-Guide/src/pages/embed/table-calculator.astro";
const $$url = "/embed/table-calculator/";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$TableCalculator,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
