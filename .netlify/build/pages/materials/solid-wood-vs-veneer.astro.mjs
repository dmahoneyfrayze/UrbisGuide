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
  "title": "Solid Wood vs Veneer Furniture",
  "description": "Understanding the difference between solid wood and veneer furniture can save you money—and frustration—long term.",
  "image": "https://urbisconcepts.com/cdn/shop/files/IMG_0082.heic?v=1755633335&width=1200",
  "publishDate": "2023-11-01",
  "category": "Materials & Craft",
  "schemaType": "Article",
  "faqs": [{
    "question": "Is solid wood furniture worth the cost?",
    "answer": "Yes, solid wood is an investment that lasts for generations (50+ years), can be repaired/refinished, and holds its value, unlike veneer which often peels or chips within a decade."
  }, {
    "question": "Does veneer last as long as solid wood?",
    "answer": "No. High-quality veneer typically lasts 5-15 years before showing wear that cannot be sanded out. Solid wood can last hundreds of years with proper care."
  }, {
    "question": "Can veneer be repaired?",
    "answer": "Generally, no. Since veneer is a thin layer (less than 3mm), deep scratches expose the core underneath and cannot be sanded down without ruining the piece."
  }]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "solid-wood",
    "text": "Solid Wood"
  }, {
    "depth": 2,
    "slug": "veneer",
    "text": "Veneer"
  }, {
    "depth": 2,
    "slug": "which-is-better",
    "text": "Which Is Better?"
  }, {
    "depth": 3,
    "slug": "related-reading",
    "text": "Related reading"
  }, {
    "depth": 3,
    "slug": "design-tools",
    "text": "Design Tools"
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
      children: "Understanding the difference between solid wood and veneer furniture can save you money—and frustration—long term."
    }), "\n", createVNode(_components.h2, {
      id: "solid-wood",
      children: "Solid Wood"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Built from full hardwood"
      }), "\n", createVNode(_components.li, {
        children: "Can be refinished or repaired"
      }), "\n", createVNode(_components.li, {
        children: "Develops patina over time"
      }), "\n", createVNode(_components.li, {
        children: "Higher upfront cost, longer lifespan"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "veneer",
      children: "Veneer"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Thin wood layer over engineered core"
      }), "\n", createVNode(_components.li, {
        children: "More stable initially"
      }), "\n", createVNode(_components.li, {
        children: "Limited repair options"
      }), "\n", createVNode(_components.li, {
        children: "Often replaced, not restored"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "which-is-better",
      children: "Which Is Better?"
    }), "\n", createVNode(_components.p, {
      children: ["If longevity, sustainability, and repairability matter, ", createVNode(_components.strong, {
        children: "solid wood"
      }), " is the clear choice."]
    }), "\n", createVNode(_components.p, {
      children: "For temporary spaces or short-term use, veneer may be sufficient."
    }), "\n", createVNode(_components.h3, {
      id: "related-reading",
      children: "Related reading"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "/guides/is-solid-wood-furniture-worth-it",
          children: "Is Solid Wood Furniture Worth It?"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "/care/solid-wood-furniture-care",
          children: "How to Care for Solid Wood Furniture"
        })
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "design-tools",
      children: "Design Tools"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: createVNode(_components.a, {
            href: "/resources/sizing-tool",
            children: "Interactive Table Sizing Calculator"
          })
        }), ": Find the perfect dimensions for your room."]
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

const url = "/materials/solid-wood-vs-veneer/";
const file = "/Users/denismahoney/Desktop/Websites/Urbis-Guide/src/pages/materials/solid-wood-vs-veneer.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/denismahoney/Desktop/Websites/Urbis-Guide/src/pages/materials/solid-wood-vs-veneer.mdx";
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
