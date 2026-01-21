import { _ as __astro_tag_component__, i as createVNode, j as Fragment } from '../chunks/astro/server_BnC5UhzS.mjs';
import { $ as $$GuideLayout } from '../chunks/GuideLayout_CuB59TFx.mjs';
import { $ as $$ProductCTA } from '../chunks/ProductCTA_GBt49qn1.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const MDXLayout = function ({children}) {
  const {layout, ...content} = frontmatter;
  content.file = file;
  content.url = url;
  return createVNode($$GuideLayout, {
    file,
    url,
    content,
    frontmatter: content,
    headings: getHeadings(),
    'server:root': true,
    children
  });
};
const frontmatter = {
  "layout": "../layouts/GuideLayout.astro",
  "title": "Why Urbis Concepts?",
  "description": "We don't sell 'fast furniture'. We craft heirlooms. Discover the Urbis difference.",
  "category": "Our Philosophy",
  "schemaType": "Article",
  "faqs": [{
    "question": "Where is your furniture made?",
    "answer": "Our solid wood slabs are ethically sourced and kiln-dried in Mexico, then finished and customized in our Toronto (Etobicoke) workshop."
  }, {
    "question": "Do you have a showroom?",
    "answer": "Yes. We believe you need to touch and feel solid wood to understand it. Visit our showroom at 122 Evans Ave, Etobicoke to choose your specific slab."
  }, {
    "question": "Are your tree trunk tables real solid wood?",
    "answer": "100%. We do not use veneers, fakes, or 'engineered' wood for our live edge tops. You are buying a single, solid slice of a massive tropical tree trunk."
  }, {
    "question": "Can I customize the size?",
    "answer": "Absolutely. Whether you need a massive 12-foot conference table or a compact 6-foot dining table, we can cut and finish any slab to your exact dimensions."
  }, {
    "question": "Do you offer delivery?",
    "answer": "Yes. We offer White Glove Delivery to Toronto, Etobicoke, Mississauga, Oakville, and the entire GTA. This includes assembly and garbage removal."
  }]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "1-the-kiln-dried-difference",
    "text": "1. The “Kiln-Dried” Difference"
  }, {
    "depth": 2,
    "slug": "2-ethical-sourcing-no-mystery-wood",
    "text": "2. Ethical Sourcing (No Mystery Wood)"
  }, {
    "depth": 2,
    "slug": "3-we-are-real-people-in-etobicoke",
    "text": "3. We Are Real People (In Etobicoke)"
  }, {
    "depth": 2,
    "slug": "4-one-table-lifetime-value",
    "text": "4. One Table, Lifetime Value"
  }];
}
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "In a world of “click-and-ship” disposable furniture, Urbis Concepts stands for permanence."
    }), "\n", createVNode(_components.p, {
      children: "We founded Urbis because we were tired of seeing beautiful trees turned into cheap wood chips, and we were tired of seeing families replace their dining table every 5 years."
    }), "\n", createVNode(_components.h2, {
      id: "1-the-kiln-dried-difference",
      children: "1. The “Kiln-Dried” Difference"
    }), "\n", createVNode(_components.p, {
      children: ["Most imported live edge tables fail in Canada. Why? ", createVNode(_components.strong, {
        children: "Winter."
      }), "\nWhen a table enters a dry Canadian home in February, it shrinks. If it wasn’t dried properly, it cracks."]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "The Industry Standard:"
        }), " Air Drying (leaving logs outside). This leaves 20%+ moisture."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "The Urbis Standard:"
        }), " Rigorous Kiln Drying to ", createVNode(_components.strong, {
          children: "8-10% moisture"
        }), ".\nWe invest in the time and energy to dry our wood correctly so it remains stable in your home for decades."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "2-ethical-sourcing-no-mystery-wood",
      children: "2. Ethical Sourcing (No Mystery Wood)"
    }), "\n", createVNode(_components.p, {
      children: ["We work directly with regulated mills in Mexico and Central America to source ", createVNode(_components.strong, {
        children: "Parota (Guanacaste)"
      }), " and ", createVNode(_components.strong, {
        children: "Acacia"
      }), "."]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "We don’t cut down endangered rainforest."
      }), "\n", createVNode(_components.li, {
        children: "We often use salvaged logs or trees felled for city planning."
      }), "\n", createVNode(_components.li, {
        children: "Every slab has a story, and we respect that story by preserving the natural edge."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "3-we-are-real-people-in-etobicoke",
      children: "3. We Are Real People (In Etobicoke)"
    }), "\n", createVNode(_components.p, {
      children: ["We aren’t a drop-shipping algorithm. We are woodworkers and designers.\nWhen you buy from Urbis, you are invited to our showroom to ", createVNode(_components.strong, {
        children: "select your exact slab"
      }), ". You see the grain, you touch the edge, and you meet the team who will finish it."]
    }), "\n", createVNode(_components.h2, {
      id: "4-one-table-lifetime-value",
      children: "4. One Table, Lifetime Value"
    }), "\n", createVNode(_components.p, {
      children: "A veneer table is garbage the moment it gets scratched.\nA solid wood table is renewable."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Scratch it? Sand it out."
      }), "\n", createVNode(_components.li, {
        children: "Change your style? Stain it darker."
      }), "\n", createVNode(_components.li, {
        children: "Moving? It’s solid enough to survive the truck."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: ["44: We build furniture that your grandchildren will fight over.\n45:\n46: ## 5. White Glove Delivery (GTA & Etobicoke)\n47: We don’t just leave a 300lb crate in your driveway.\n48: Our delivery team specializes in heavy solid wood furniture.\n49: *   ", createVNode(_components.strong, {
        children: "We Deliver:"
      }), " To Etobicoke, Toronto, Mississauga, Oakville, and surrounding areas.\n50: *   ", createVNode(_components.strong, {
        children: "We Assemble:"
      }), " We attach the legs on-site to ensure they are rock-solid.\n51: *   ", createVNode(_components.strong, {
        children: "We Clean Up:"
      }), " We take all the packaging with us, leaving you with nothing but a beautiful new table."]
    }), "\n", createVNode($$ProductCTA, {
      title: "Visit Our Showroom",
      description: "Come see the difference for yourself. Browse our gallery of raw slabs and finished tables in Etobicoke.",
      image: "https://urbisconcepts.com/cdn/shop/files/IMG_1044.heic?v=1755633336&width=1200",
      url: "https://urbisconcepts.com/pages/book-visit",
      buttonText: "Book an Appointment"
    })]
  });
}
function MDXContent(props = {}) {
  return createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  });
}

const url = "/why-urbis/";
const file = "/Users/denismahoney/Desktop/Websites/Urbis-Guide/src/pages/why-urbis.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/denismahoney/Desktop/Websites/Urbis-Guide/src/pages/why-urbis.mdx";
__astro_tag_component__(Content, 'astro:jsx');

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
