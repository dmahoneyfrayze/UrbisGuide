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
  "title": "Does Solid Wood Furniture Crack?",
  "description": "The honest truth about wood movement, why cracks happen, and how to prevent them in your home.",
  "image": "https://urbisconcepts.com/cdn/shop/files/IMG_8835.heic?v=1755633335&width=1200",
  "publishDate": "2024-01-15",
  "category": "Care & Maintenance",
  "schemaType": "Article",
  "faqs": [{
    "question": "Why does solid wood furniture crack?",
    "answer": "Wood cracks primarily due to rapid changes in humidity. When the air gets too dry (like in winter), wood shrinks. If it shrinks too fast or is restricted by its base, it can split."
  }, {
    "question": "Is a small crack in a slab normal?",
    "answer": "Yes, 'checks' (small hairline cracks) are a natural part of solid wood's character and often open/close with the seasons. They rarely affect structural integrity."
  }, {
    "question": "How do I stop my wood table from cracking?",
    "answer": "The #1 defense is humidity control. Keep your home between 35-45% humidity year-round using a humidifier in winter and AC/dehumidifier in summer."
  }]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "1-wood-breathes-even-after-cutting",
    "text": "1. Wood Breathes (Even After Cutting)"
  }, {
    "depth": 2,
    "slug": "2-when-does-it-crack",
    "text": "2. When Does It Crack?"
  }, {
    "depth": 2,
    "slug": "3-how-we-prevent-it-the-urbis-way",
    "text": "3. How We Prevent It (The Urbis Way)"
  }, {
    "depth": 2,
    "slug": "4-how-you-prevent-it-your-job",
    "text": "4. How You Prevent It (Your Job)"
  }, {
    "depth": 3,
    "slug": "learn-more-about-care",
    "text": "Learn more about care"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["This is the most common question we get. The short answer is: ", createVNode(_components.strong, {
        children: "Solid wood is a living material, and it moves."
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Understanding ", createVNode(_components.em, {
        children: "why"
      }), " it moves is the key to preventing damage."]
    }), "\n", createVNode(_components.h2, {
      id: "1-wood-breathes-even-after-cutting",
      children: "1. Wood Breathes (Even After Cutting)"
    }), "\n", createVNode(_components.p, {
      children: "Think of wood like a bundle of microscopic straws. When the tree is alive, these straws transport water. When cut and dried, these straws stay open."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "High Humidity (Summer):"
        }), " The straws absorb moisture from the air. The wood ", createVNode(_components.strong, {
          children: "expands"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Low Humidity (Winter):"
        }), " The straws release moisture. The wood ", createVNode(_components.strong, {
          children: "shrinks"
        }), "."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "This movement is natural. A 40-inch wide table might actually be 40.25” in July and 39.75” in February."
    }), "\n", createVNode(_components.h2, {
      id: "2-when-does-it-crack",
      children: "2. When Does It Crack?"
    }), "\n", createVNode(_components.p, {
      children: "Cracking happens when the wood tries to shrink, but something stops it."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Bad Design:"
        }), " If a table base is screwed directly into the wood without “slotted holes” (which allow the screw to slide as the wood moves), the wood will pull itself apart. ", createVNode(_components.em, {
          children: "Note: Urbis Concepts bases allow for this movement."
        })]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Extreme Dryness:"
        }), " If humidity drops below 30% (common in Canadian winters), the wood shrinks so aggressively that its own fibers snap."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "3-how-we-prevent-it-the-urbis-way",
      children: "3. How We Prevent It (The Urbis Way)"
    }), "\n", createVNode(_components.p, {
      children: "We take three critical steps before the table ever reaches your home:"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Proper Kiln Drying:"
        }), " We dry slabs to 8-10% moisture content. This removes the bulk of the water so the wood is stable ", createVNode(_components.em, {
          children: "before"
        }), " finish."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Epoxy Filling:"
        }), " Any natural knots or existing voids are filled with specialized epoxy, stabilizing weak points."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "C-Channel Reinforcement:"
        }), " Large slabs are routed underneath and fitted with steel C-Channels. These keep the slab flat while still allowing it to expand/contract sideways."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "4-how-you-prevent-it-your-job",
      children: "4. How You Prevent It (Your Job)"
    }), "\n", createVNode(_components.p, {
      children: ["You have one responsibility: ", createVNode(_components.strong, {
        children: "Humidity Control."
      })]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Aim for ", createVNode(_components.strong, {
          children: "40–45% humidity"
        }), " in your home."]
      }), "\n", createVNode(_components.li, {
        children: "Don’t place the table directly over a heating vent."
      }), "\n", createVNode(_components.li, {
        children: "Don’t place the table in direct, baking sunlight all day."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "If a crack does appear, don’t panic. Solid wood is repairable. A butterfly key (dovetail key) or epoxy fill can fix it, often adding even more character to the piece."
    }), "\n", createVNode(_components.h3, {
      id: "learn-more-about-care",
      children: "Learn more about care"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "/care/solid-wood-furniture-care",
          children: "Solid Wood Furniture Care"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "/care/humidity-and-hardwood",
          children: "Humidity & Hardwood"
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

const url = "/care/does-solid-wood-furniture-crack/";
const file = "/Users/denismahoney/Desktop/Websites/Urbis-Guide/src/pages/care/does-solid-wood-furniture-crack.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/denismahoney/Desktop/Websites/Urbis-Guide/src/pages/care/does-solid-wood-furniture-crack.mdx";
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
