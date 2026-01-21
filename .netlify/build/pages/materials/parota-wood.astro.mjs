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
  "title": "Parota Wood Furniture",
  "description": "Parota wood (often called 'tree trunk tables') is a dense tropical hardwood known for its dramatic grain, strength, and natural warmth.",
  "image": "https://urbisconcepts.com/cdn/shop/files/Live_Edge_Parota_Table.png?v=1764875346",
  "publishDate": "2023-11-10",
  "category": "Materials & Craft",
  "schemaType": "Article",
  "faqs": [{
    "question": "Is parota wood good for dining tables?",
    "answer": "Yes, Parota is excellent for dining tables due to its massive size (allowing for single slabs), stability, and striking grain. It is lighter than walnut but sufficiently durable."
  }, {
    "question": "Does parota wood crack?",
    "answer": "Parota is exceptionally stable and resistant to warping, making it less prone to cracking than many other tropical hardwoods, especially when properly kiln-dried."
  }, {
    "question": "How does parota compare to walnut?",
    "answer": "Parota has a similar rich brown hue to Walnut but features a distinct blonde sapwood edge and wilder grain. It is softer than black walnut but significantly more sustainable and faster-growing."
  }, {
    "question": "Are these real tree trunk tables?",
    "answer": "Yes. Our single-slab Parota tables are cross-sections of the entire tree trunk, not glued-together boards. This preserves the natural 'live edge' on both sides, creating a true organic centerpiece."
  }]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "why-parota-is-popular",
    "text": "Why Parota Is Popular"
  }, {
    "depth": 2,
    "slug": "how-it-compares",
    "text": "How It Compares"
  }, {
    "depth": 2,
    "slug": "is-parota-right-for-you",
    "text": "Is Parota Right for You?"
  }, {
    "depth": 2,
    "slug": "care-notes",
    "text": "Care Notes"
  }, {
    "depth": 3,
    "slug": "explore-parota-furniture",
    "text": "Explore Parota furniture"
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
      children: ["Parota wood (Enterolobium cyclocarpum), often sought after for ", createVNode(_components.strong, {
        children: "tree trunk tables"
      }), ", is a dense tropical hardwood known for its dramatic grain, strength, and natural warmth."]
    }), "\n", createVNode(_components.h2, {
      id: "why-parota-is-popular",
      children: "Why Parota Is Popular"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "High durability for daily use"
      }), "\n", createVNode(_components.li, {
        children: "Naturally resistant to warping"
      }), "\n", createVNode(_components.li, {
        children: "Rich contrast between light and dark tones"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "how-it-compares",
      children: "How It Compares"
    }), "\n", createVNode(_components.p, {
      children: "Compared to walnut or acacia, parota offers:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "More pronounced grain movement"
      }), "\n", createVNode(_components.li, {
        children: "Slightly softer tone"
      }), "\n", createVNode(_components.li, {
        children: "Exceptional performance in large slabs"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "is-parota-right-for-you",
      children: "Is Parota Right for You?"
    }), "\n", createVNode(_components.p, {
      children: "Parota is ideal if you want:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "A bold, organic statement"
      }), "\n", createVNode(_components.li, {
        children: "A family-friendly hardwood"
      }), "\n", createVNode(_components.li, {
        children: "A table that improves with age"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "care-notes",
      children: "Care Notes"
    }), "\n", createVNode(_components.p, {
      children: ["Like all solid wood, parota benefits from stable humidity and periodic oiling. See our ", createVNode(_components.a, {
        href: "/care/solid-wood-furniture-care",
        children: "Solid Wood Furniture Care"
      }), " guide for details."]
    }), "\n", createVNode(_components.h3, {
      id: "explore-parota-furniture",
      children: "Explore Parota furniture"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://urbisconcepts.com/collections/live-edge",
          children: "Live Edge Dining Tables"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://urbisconcepts.com/collections/coffee-tables",
          children: "Parota Coffee Tables"
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

const url = "/materials/parota-wood/";
const file = "/Users/denismahoney/Desktop/Websites/Urbis-Guide/src/pages/materials/parota-wood.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/denismahoney/Desktop/Websites/Urbis-Guide/src/pages/materials/parota-wood.mdx";
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
