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
  "title": "Creating Your Sanctuary: The Urbis Bedroom Collection",
  "description": "Design a restful retreat with handcrafted solid wood beds, nightstands, and dressers. Explore the Urbis Bedroom Collection.",
  "image": "https://urbisconcepts.com/cdn/shop/collections/MarwarLoftKingBed1.png?v=1768959083&width=1024",
  "publishDate": "2026-01-20",
  "category": "Buying Guide",
  "schemaType": "CollectionPage",
  "items": [{
    "name": "Bedroom Furniture Collection",
    "url": "https://urbisconcepts.com/collections/bedroom",
    "description": "Handcrafted solid wood bedroom furniture designed for rest and relaxation."
  }]
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "creating-your-sanctuary",
    "text": "Creating Your Sanctuary"
  }, {
    "depth": 2,
    "slug": "the-centerpiece-solid-wood-beds",
    "text": "The Centerpiece: Solid Wood Beds"
  }, {
    "depth": 2,
    "slug": "complementary-pieces-nightstands--dressers",
    "text": "Complementary Pieces: Nightstands & Dressers"
  }, {
    "depth": 2,
    "slug": "styling-your-space",
    "text": "Styling Your Space"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "creating-your-sanctuary",
      children: "Creating Your Sanctuary"
    }), "\n", createVNode(_components.p, {
      children: "Your bedroom is more than just a place to sleep—it’s a personal retreat, a sanctuary from the busy world outside. At Urbis Concepts, we believe bedroom furniture should be grounded, calming, and built to last for generations. Our Bedroom Collection combines the warmth of solid wood with modern, thoughtful design."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: createVNode(_components.a, {
          href: "https://urbisconcepts.com/collections/bedroom",
          children: "Explore the Full Bedroom Collection"
        })
      })
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "the-centerpiece-solid-wood-beds",
      children: "The Centerpiece: Solid Wood Beds"
    }), "\n", createVNode(_components.p, {
      children: "Everything starts with the bed. It anchors the room and sets the tone for your entire aesthetic."
    }), "\n", createVNode($$ProductCTA, {
      title: "Aravalli Collection Bed",
      description: "Soft curves and rounded edges define the Aravalli bed, creating a sense of gentle comfort. The solid wood frame is substantial yet approachable, perfect for creating a cozy, organic atmosphere.",
      image: "https://urbisconcepts.com/cdn/shop/collections/Aravalli_Collection_collage.png?v=1763863775",
      url: "https://urbisconcepts.com/collections/aravalli-collection",
      buttonText: "Shop Aravalli Bedroom"
    }), "\n", createVNode($$ProductCTA, {
      title: "Marwar Collection Bed",
      description: "For a bolder statement, the Marwar bed features thick, solid slabs and rich, deep tones. Inspired by traditional craftsmanship, it brings a sense of history and permanence to your space.",
      image: "https://urbisconcepts.com/cdn/shop/collections/MarwarLoftKingBed1.png?v=1768959083&width=1024",
      url: "https://urbisconcepts.com/collections/marwar-collection",
      buttonText: "Shop Marwar Bedroom"
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "complementary-pieces-nightstands--dressers",
      children: "Complementary Pieces: Nightstands & Dressers"
    }), "\n", createVNode(_components.p, {
      children: "Function meets form. Our case goods are designed to minimize clutter while maximizing the beauty of natural wood grain."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Nightstands"
        }), ": Available in matching collection styles or as versatile standalone pieces like the ", createVNode(_components.strong, {
          children: "Acacia Studio"
        }), " live edge tables."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Dressers"
        }), ": Built with precision joinery and soft-close hardware, ensuring that your storage is as durable as it is beautiful."]
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "styling-your-space",
      children: "Styling Your Space"
    }), "\n", createVNode(_components.p, {
      children: "When styling a solid wood bedroom, let the material breathe."
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Layer Textures"
        }), ": Pair the hardness of wood with soft linen bedding, wool rugs, and organic cotton throws."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Keep it Simple"
        }), ": Let the wood grain be the art. Avoid over-decorating surfaces."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Warm Lighting"
        }), ": Use warm-toned bulbs (2700K) to highlight the rich amber and honey tones of the Acacia and Parota wood."]
      }), "\n"]
    }), "\n", createVNode($$ImageGallery, {
      title: "Bedroom Inspiration",
      description: "Real homes featuring Urbis bedroom furniture.",
      images: [{
        src: "https://urbisconcepts.com/cdn/shop/collections/MarwarLoftKingBed1.png?v=1768959083&width=1024",
        alt: "Marwar King Bed in a modern loft"
      }, {
        src: "https://urbisconcepts.com/cdn/shop/collections/Aravalli_Collection_collage.png?v=1763863775",
        alt: "Aravalli Bedroom Set"
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

const url = "/guides/bedroom-furniture-collection/";
const file = "/Users/denismahoney/Desktop/Websites/Urbis-Guide/src/pages/guides/bedroom-furniture-collection.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/denismahoney/Desktop/Websites/Urbis-Guide/src/pages/guides/bedroom-furniture-collection.mdx";
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
