import { _ as __astro_tag_component__, i as createVNode, j as Fragment } from '../../chunks/astro/server_BnC5UhzS.mjs';
import { $ as $$GuideLayout } from '../../chunks/GuideLayout_CuB59TFx.mjs';
import 'clsx';
export { renderers } from '../../renderers.mjs';

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
  "layout": "../../layouts/GuideLayout.astro",
  "title": "Solid Wood Furniture Care",
  "description": "Solid wood furniture is durable, but it responds to its environment.",
  "image": "https://urbisconcepts.com/cdn/shop/files/IMG_0078.heic?v=1755633335&width=1200",
  "publishDate": "2023-10-20",
  "category": "Care & Maintenance",
  "schemaType": "HowTo",
  "faqs": [{
    "question": "How often should I oil a wood table?",
    "answer": "For tables with oil finishes (like Rubio Monocoat), we recommend a maintenance coat every 12-24 months, or whenever the wood looks dry or loses its sheen."
  }, {
    "question": "What cleaners are safe for solid wood?",
    "answer": "Use mild soap diluted in water, or a specific cleaner designed for oil finishes. Avoid harsh chemicals, bleach, ammonia, or silicone-based polishes."
  }, {
    "question": "Can solid wood furniture be repaired?",
    "answer": "Yes. One of the biggest advantages of solid wood is that scratches, dents, and stains can be sanded out and refinished, restoring the piece to new condition."
  }]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "daily-care",
    "text": "Daily Care"
  }, {
    "depth": 2,
    "slug": "oiling--maintenance",
    "text": "Oiling & Maintenance"
  }, {
    "depth": 2,
    "slug": "humidity-matters",
    "text": "Humidity Matters"
  }, {
    "depth": 2,
    "slug": "repairs",
    "text": "Repairs"
  }, {
    "depth": 3,
    "slug": "explore-furniture-built-to-last",
    "text": "Explore furniture built to last"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    h3: "h3",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "Solid wood furniture is durable, but it responds to its environment."
    }), "\n", createVNode(_components.h2, {
      id: "daily-care",
      children: "Daily Care"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Dust with a soft cloth"
      }), "\n", createVNode(_components.li, {
        children: "Wipe spills immediately"
      }), "\n", createVNode(_components.li, {
        children: "Avoid harsh cleaners"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "oiling--maintenance",
      children: "Oiling & Maintenance"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Oil every ", createVNode(_components.strong, {
          children: "3–6 months"
        })]
      }), "\n", createVNode(_components.li, {
        children: "Use mineral-based or manufacturer-recommended oils"
      }), "\n", createVNode(_components.li, {
        children: "Increase frequency in dry winters"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "humidity-matters",
      children: "Humidity Matters"
    }), "\n", createVNode(_components.p, {
      children: ["Wood expands and contracts naturally. Aim for ", createVNode(_components.strong, {
        children: "40–45% indoor humidity"
      }), " year-round."]
    }), "\n", createVNode(_components.p, {
      children: ["Learn more in ", createVNode(_components.a, {
        href: "/care/humidity-and-hardwood",
        children: "Humidity and Hardwood Furniture"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "repairs",
      children: "Repairs"
    }), "\n", createVNode(_components.p, {
      children: "Minor scratches and surface wear can often be repaired—one of the biggest advantages of solid wood over veneer."
    }), "\n", createVNode(_components.h3, {
      id: "explore-furniture-built-to-last",
      children: "Explore furniture built to last"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://urbisconcepts.com/collections/solid-wood-dining-tables",
          children: "Solid Wood Dining Tables"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://urbisconcepts.com/collections/solid-wood-storage",
          children: "Handcrafted Storage Pieces"
        })
      }), "\n"]
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

const url = "/care/solid-wood-furniture-care/";
const file = "/Users/denismahoney/Desktop/Websites/Urbis-Guide/src/pages/care/solid-wood-furniture-care.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/denismahoney/Desktop/Websites/Urbis-Guide/src/pages/care/solid-wood-furniture-care.mdx";
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
