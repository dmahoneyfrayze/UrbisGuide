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
  "title": "Is Solid Wood Furniture Worth It?",
  "description": "Why solid wood furniture costs more, how long it lasts, and why it’s the smarter financial choice for your home.",
  "image": "https://urbisconcepts.com/cdn/shop/files/IMG_2293.heic?v=1755633335&width=1200",
  "publishDate": "2023-11-20",
  "category": "Buying Guide",
  "schemaType": "Article",
  "faqs": [{
    "question": "Why is solid wood furniture so expensive?",
    "answer": "Solid wood costs more because it uses premium, slow-grown lumber rather than cheap composites. It also requires skilled craftsmanship to join, finish, and stabilize, unlike mass-produced veneer pieces."
  }, {
    "question": "Does solid wood hold its value?",
    "answer": "Yes. Unlike veneer or particleboard furniture which often ends up in landfills, well-maintained solid wood furniture can be resold or passed down as an heirloom, retaining significant value."
  }, {
    "question": "How long does a solid wood table last?",
    "answer": "With proper care, a solid wood table can last for generations (50-100+ years). Durability is its primary advantage over cheaper alternatives that may only last 5-10 years."
  }]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "1-the-cost-per-use-equation",
    "text": "1. The “Cost Per Use” Equation"
  }, {
    "depth": 2,
    "slug": "2-repairability-the-invisible-value",
    "text": "2. Repairability (The Invisible Value)"
  }, {
    "depth": 2,
    "slug": "3-unfakeable-presence",
    "text": "3. Unfakeable Presence"
  }, {
    "depth": 2,
    "slug": "4-sustainability",
    "text": "4. Sustainability"
  }, {
    "depth": 2,
    "slug": "summary-who-is-it-for",
    "text": "Summary: Who is it for?"
  }, {
    "depth": 3,
    "slug": "ready-to-invest",
    "text": "Ready to invest?"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
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
      children: "When you’re shopping for a dining table, the price difference between “solid wood” and “wood finish” (veneer) can be shocking. You might see a table for $800 and another that looks similar for $3,500."
    }), "\n", createVNode(_components.p, {
      children: ["Is the solid wood piece really worth 4x the price? ", createVNode(_components.strong, {
        children: "financially and practically, yes."
      })]
    }), "\n", createVNode(_components.p, {
      children: "Here is the breakdown of why solid wood is an investment, not just an expense."
    }), "\n", createVNode(_components.h2, {
      id: "1-the-cost-per-use-equation",
      children: "1. The “Cost Per Use” Equation"
    }), "\n", createVNode(_components.p, {
      children: "Mass-produced furniture (IKEA, Wayfair, etc.) is designed to be disposable. It uses particleboard cores with thin plastic or wood paper on top."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Veneer Table:"
        }), " Costs $800. Lasts 5–7 years before chipping/peeling. ", createVNode(_components.strong, {
          children: "Result:"
        }), " You buy 4 tables over 30 years ($3,200)."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Solid Wood Table:"
        }), " Costs $3,500. Lasts 50+ years. ", createVNode(_components.strong, {
          children: "Result:"
        }), " You buy 1 table ($3,500)."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "The long-term cost is almost identical, but with solid wood, you enjoy a premium, beautiful piece of nature every single day, rather than a deteriorating fake."
    }), "\n", createVNode(_components.h2, {
      id: "2-repairability-the-invisible-value",
      children: "2. Repairability (The Invisible Value)"
    }), "\n", createVNode(_components.p, {
      children: "This is the single biggest difference."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Accidents Happen:"
        }), " A hot pan, a sharp fork, or a marker from a toddler."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "On Veneer:"
        }), " If you scratch deep enough to reveal the particleboard underneath, ", createVNode(_components.strong, {
          children: "it’s game over."
        }), " You cannot sand veneer (it’s too thin). You have to live with the damage or throw it out."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "On Solid Wood:"
        }), " A scratch is just character. If it bothers you, you can sand it out and re-oil it in 20 minutes. Ideally, you can completely refinish the table in 20 years to make it look brand new."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "3-unfakeable-presence",
      children: "3. Unfakeable Presence"
    }), "\n", createVNode(_components.p, {
      children: ["You can photograph veneer to look like wood, but you can’t fake the ", createVNode(_components.em, {
        children: "feel"
      }), "."]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Weight:"
        }), " Solid wood anchors a room. It feels substantial and permanent."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Temperature:"
        }), " Real wood warms to the touch and adapts to the room."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Uniqueness:"
        }), " Every board in a solid wood table has a unique grain fingerprint. Veneer often uses a “repeating pattern” print that the subconscious mind recognizes as artificial."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "4-sustainability",
      children: "4. Sustainability"
    }), "\n", createVNode(_components.p, {
      children: "“Fast furniture” is an environmental disaster, filling landfills with glue-heavy composite boards that don’t biodegrade.\nA solid wood table is carbon sequestration in your dining room. Sourced responsibly (like our Parota and Acacia), it is a renewable resource that stays in your home and out of the trash."
    }), "\n", createVNode(_components.h2, {
      id: "summary-who-is-it-for",
      children: "Summary: Who is it for?"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Buy Veneer If:"
        }), " You are furnishing a temporary apartment, expecting to move internationally soon, or have an extremely tight budget ($500-800)."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Buy Solid Wood If:"
        }), " You are building a home, want furniture that survives family life, or appreciate materials that age gracefully."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "ready-to-invest",
      children: "Ready to invest?"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "/materials/parota-wood",
          children: "Parota Wood Furniture"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://urbisconcepts.com/collections/live-edge",
          children: "Live Edge Collection"
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

const url = "/guides/is-solid-wood-furniture-worth-it/";
const file = "/Users/denismahoney/Desktop/Websites/Urbis-Guide/src/pages/guides/is-solid-wood-furniture-worth-it.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/denismahoney/Desktop/Websites/Urbis-Guide/src/pages/guides/is-solid-wood-furniture-worth-it.mdx";
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
