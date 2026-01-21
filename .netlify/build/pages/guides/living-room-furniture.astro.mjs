import { _ as __astro_tag_component__, i as createVNode, j as Fragment } from '../../chunks/astro/server_BnC5UhzS.mjs';
import { $ as $$GuideLayout } from '../../chunks/GuideLayout_CuB59TFx.mjs';
import { $ as $$ProductCTA } from '../../chunks/ProductCTA_GBt49qn1.mjs';
import { $ as $$ImageGallery } from '../../chunks/ImageGallery_DzC6sUNN.mjs';
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
  "title": "Living Beautifully: The Urbis Living Room Collection",
  "description": "Elevate your living space with solid wood coffee tables, consoles, and media units designed for modern life.",
  "image": "https://urbisconcepts.com/cdn/shop/files/MarwarLoftCoffeeTable_OpenShelf_43_2.png?v=1762380151&width=1024",
  "publishDate": "2026-01-20",
  "category": "Buying Guide",
  "schemaType": "CollectionPage",
  "items": [{
    "name": "Living Room Furniture",
    "url": "https://urbisconcepts.com/collections/living-room",
    "description": "Solid wood tables and storage for the living room."
  }]
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "living-beautifully",
    "text": "Living Beautifully"
  }, {
    "depth": 2,
    "slug": "coffee-tables-the-anchor",
    "text": "Coffee Tables: The Anchor"
  }, {
    "depth": 2,
    "slug": "media-units--consoles",
    "text": "Media Units & Consoles"
  }, {
    "depth": 2,
    "slug": "material-matters",
    "text": "Material Matters"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    hr: "hr",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "living-beautifully",
      children: "Living Beautifully"
    }), "\n", createVNode(_components.p, {
      children: "Your living room is where you unwind, entertain, and connect. It deserves furniture that is both functional and beautiful. The Urbis Living Room Collection brings the grounding presence of nature indoors, with solid wood pieces that serve as the focal point of your daily life."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: createVNode(_components.a, {
          href: "https://urbisconcepts.com/collections/living-room",
          children: "Explore the Full Living Room Collection"
        })
      })
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "coffee-tables-the-anchor",
      children: "Coffee Tables: The Anchor"
    }), "\n", createVNode(_components.p, {
      children: "The coffee table is often the center of the room. Choose one that speaks to your style."
    }), "\n", createVNode($$ProductCTA, {
      title: "Stria Collection Tables",
      description: "Defined by linear texture and directional grain, Stria coffee tables add visual interest and depth. The fluting details catch the light, creating a dynamic surface that changes throughout the day.",
      image: "https://urbisconcepts.com/cdn/shop/collections/Stria_Collection_16x9_5559edd5-e42c-432e-a469-a3ed5b485ee1.png?v=1762381223",
      url: "https://urbisconcepts.com/collections/stria-collection",
      buttonText: "Shop Stria Collection"
    }), "\n", createVNode($$ProductCTA, {
      title: "Marwar Coffee Tables",
      description: "Solid, substantial, and timeless. Marwar coffee tables feature thick tops and robust legs, perfect for grounding a large sectional or an airy, open-concept space.",
      image: "https://urbisconcepts.com/cdn/shop/files/MarwarLoftCoffeeTable_OpenShelf_43_2.png?v=1762380151&width=1024",
      url: "https://urbisconcepts.com/collections/marwar-collection",
      buttonText: "Shop Marwar Collection"
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "media-units--consoles",
      children: "Media Units & Consoles"
    }), "\n", createVNode(_components.p, {
      children: "Hide the wires, display the beauty. Our media units provide essential storage while serving as a platform for your TV or decor."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Solid Construction"
        }), ": Built to support heavy screens without bowing."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Cable Management"
        }), ": Thoughtful design details to keep your setup clean."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Versatile Use"
        }), ": Many of our consoles work perfectly in an entryway or behind a sofa."]
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "material-matters",
      children: "Material Matters"
    }), "\n", createVNode(_components.p, {
      children: "In high-traffic areas like the living room, durability is key."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Acacia"
        }), ": Known for its hardness and rich grain, perfect for everyday use."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Finish"
        }), ": Our premium finishes protect against water rings and spills, but we always recommend using coasters to maintain the perfect look."]
      }), "\n"]
    }), "\n", createVNode($$ImageGallery, {
      title: "Living Room Inspiration",
      description: "Real living spaces featuring Urbis furniture.",
      images: [{
        src: "https://urbisconcepts.com/cdn/shop/files/MarwarLoftCoffeeTable_OpenShelf_43_2.png?v=1762380151&width=1024",
        alt: "Marwar Coffee Table"
      }, {
        src: "https://urbisconcepts.com/cdn/shop/files/IMG_9464.heic?v=1755633334&width=2000",
        alt: "Live Edge Coffee Table"
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

const url = "/guides/living-room-furniture/";
const file = "/Users/denismahoney/Desktop/Websites/Urbis-Guide/src/pages/guides/living-room-furniture.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/denismahoney/Desktop/Websites/Urbis-Guide/src/pages/guides/living-room-furniture.mdx";
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
