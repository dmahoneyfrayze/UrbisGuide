import { c as createAstro, d as createComponent, m as maybeRenderHead, f as addAttribute, r as renderTemplate, _ as __astro_tag_component__, i as createVNode, j as Fragment } from '../../chunks/astro/server_BnC5UhzS.mjs';
import { $ as $$GuideLayout } from '../../chunks/GuideLayout_CuB59TFx.mjs';
import { $ as $$ProductCTA } from '../../chunks/ProductCTA_GBt49qn1.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://guide.urbisconcepts.com");
const $$CollectionGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CollectionGrid;
  const { title = "Explore Our Collections", collections } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="my-16 not-prose"> <h3 class="text-2xl font-heading font-bold mb-8 text-center text-secondary">${title}</h3> <div class="grid grid-cols-1 md:grid-cols-3 gap-6"> ${collections.map((collection) => renderTemplate`<a${addAttribute(collection.url, "href")} class="group block relative aspect-[4/5] overflow-hidden rounded-xl bg-gray-100"> <img${addAttribute(collection.image, "src")}${addAttribute(collection.title, "alt")} class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"> <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div> <div class="absolute bottom-0 left-0 right-0 p-6 text-center"> <h4 class="text-white font-bold text-xl uppercase tracking-wider mb-2">${collection.title}</h4> <span class="inline-block text-white/80 text-sm border-b border-white/30 pb-1 group-hover:border-white transition-colors">Shop Now</span> </div> </a>`)} </div> </div>`;
}, "/Users/denismahoney/Desktop/Websites/Urbis-Guide/src/components/CollectionGrid.astro", void 0);

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
  "title": "Dining Table Size Guide",
  "description": "The right dining table size balances comfort, flow, and visual proportion.",
  "image": "https://urbisconcepts.com/cdn/shop/files/IMG_1762.jpg?v=1755633334&width=1200",
  "publishDate": "2023-11-15",
  "category": "Buying Guide",
  "schemaType": "HowTo",
  "faqs": [{
    "question": "What size table fits 6 people?",
    "answer": "For a rectangular table, aim for 72 inches long to seat 6 people comfortably (3 on each side). A round table should be at least 54-60 inches in diameter."
  }, {
    "question": "How much clearance do I need around a table?",
    "answer": "You need a minimum of 30 inches from the table edge to the wall for clearance, but 36-42 inches is ideal to allow people to walk behind seated guests."
  }, {
    "question": "Is round or rectangular better for small rooms?",
    "answer": "Round tables are generally better for small, square rooms because they lack sharp corners and improve flow. Rectangular tables work best in standard dining rooms."
  }]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "seating-guidelines",
    "text": "Seating Guidelines"
  }, {
    "depth": 2,
    "slug": "clearance-rules",
    "text": "Clearance Rules"
  }, {
    "depth": 2,
    "slug": "shape-considerations",
    "text": "Shape Considerations"
  }, {
    "depth": 2,
    "slug": "common-mistakes",
    "text": "Common Mistakes"
  }, {
    "depth": 3,
    "slug": "related-guides",
    "text": "Related guides"
  }, {
    "depth": 3,
    "slug": "explore-related-collections",
    "text": "Explore related collections"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
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
      children: "The right dining table size balances comfort, flow, and visual proportion."
    }), "\n", createVNode(_components.h2, {
      id: "seating-guidelines",
      children: "Seating Guidelines"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "4 people:"
        }), " 48–60 inches"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "6 people:"
        }), " 72 inches"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "8 people:"
        }), " 84–96 inches"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "10+ people:"
        }), " 108 inches or custom"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Allow 24–30 inches per person for comfortable seating."
    }), "\n", createVNode(_components.h2, {
      id: "clearance-rules",
      children: "Clearance Rules"
    }), "\n", createVNode(_components.p, {
      children: ["Maintain at least ", createVNode(_components.strong, {
        children: "36 inches of clearance"
      }), " from table edge to walls or furniture. This allows chairs to pull out and people to move freely."]
    }), "\n", createVNode(_components.h2, {
      id: "shape-considerations",
      children: "Shape Considerations"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Rectangular:"
        }), " best for long rooms and larger groups"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Round:"
        }), " ideal for small spaces and conversation"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Live edge:"
        }), " visually larger—plan extra clearance"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Ignoring chair depth"
      }), "\n", createVNode(_components.li, {
        children: "Forgetting walkways"
      }), "\n", createVNode(_components.li, {
        children: "Choosing size before room layout"
      }), "\n"]
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["[!TIP]\n", createVNode(_components.strong, {
          children: "Not sure if it fits?"
        }), "\nUse our interactive ", createVNode(_components.strong, {
          children: createVNode(_components.a, {
            href: "/resources/sizing-tool",
            children: "Table Sizing Calculator"
          })
        }), " to input your exact room dimensions and get an instant recommendation."]
      }), "\n"]
    }), "\n", createVNode($$ProductCTA, {
      title: "Handcrafted Live Edge Tables",
      description: "Every table we build is one-of-a-kind, sourced from sustainable Parota and Acacia slabs. Custom sized to fit your exact dining room dimensions.",
      image: "https://urbisconcepts.com/cdn/shop/files/Parota_Live_Edge_Dining_Table_1.jpg?v=1700000000",
      url: "https://urbisconcepts.com/collections/live-edge",
      buttonText: "View Available Slabs"
    }), "\n", createVNode(_components.h3, {
      id: "related-guides",
      children: "Related guides"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "/guides/dining-room-furniture",
          children: "Urbis Dining Room Furniture Guide"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "/guides/how-to-choose-a-dining-table",
          children: "How to Choose a Dining Table"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "/guides/best-dining-table-for-small-spaces",
          children: "Dining Tables for Small Spaces"
        })
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "explore-related-collections",
      children: "Explore related collections"
    }), "\n", createVNode($$CollectionGrid, {
      collections: [{
        title: "Live Edge Tables",
        image: "https://images.unsplash.com/photo-1572048572872-2394404cf1f3?auto=format&fit=crop&q=80&w=800",
        url: "https://urbisconcepts.com/collections/live-edge"
      }, {
        title: "Solid Wood Tables",
        image: "https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?auto=format&fit=crop&q=80&w=800",
        url: "https://urbisconcepts.com/collections/solid-wood-dining-tables"
      }, {
        title: "Dining Chairs",
        image: "https://images.unsplash.com/photo-1503602642458-2321114453ad?auto=format&fit=crop&q=80&w=800",
        url: "https://urbisconcepts.com/collections/dining-chairs"
      }]
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

const url = "/guides/dining-table-size-guide/";
const file = "/Users/denismahoney/Desktop/Websites/Urbis-Guide/src/pages/guides/dining-table-size-guide.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/denismahoney/Desktop/Websites/Urbis-Guide/src/pages/guides/dining-table-size-guide.mdx";
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
