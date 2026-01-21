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
  "title": "Gathering in Style: The Urbis Dining Room Guide",
  "description": "From live edge statement pieces to modern strata designs, find the perfect solid wood dining table for your home.",
  "image": "https://urbisconcepts.com/cdn/shop/collections/Acacia_Collection_1x1_b2abb2d6-dd24-4046-907e-d493e42c63c0.jpg?v=1768962000&width=1024",
  "publishDate": "2026-01-20",
  "category": "Buying Guide",
  "schemaType": "CollectionPage",
  "items": [{
    "name": "Dining Room Furniture",
    "url": "https://urbisconcepts.com/collections/dining-room",
    "description": "Handcrafted solid wood dining tables and chairs."
  }]
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "gathering-in-style",
    "text": "Gathering in Style"
  }, {
    "depth": 2,
    "slug": "live-edge-vs-modern-geometric",
    "text": "Live Edge vs. Modern Geometric"
  }, {
    "depth": 2,
    "slug": "seating-solutions",
    "text": "Seating Solutions"
  }, {
    "depth": 2,
    "slug": "choosing-the-right-size",
    "text": "Choosing the Right Size"
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
      id: "gathering-in-style",
      children: "Gathering in Style"
    }), "\n", createVNode(_components.p, {
      children: "The dining table is the heart of the home. It’s where meals are shared, conversations happen, and memories are made. At Urbis Concepts, our dining collections are designed to be the backdrop for these moments—combining durability with breathtaking natural beauty."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: createVNode(_components.a, {
          href: "https://urbisconcepts.com/collections/dining-room",
          children: "Explore the Full Dining Room Collection"
        })
      })
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "live-edge-vs-modern-geometric",
      children: "Live Edge vs. Modern Geometric"
    }), "\n", createVNode(_components.p, {
      children: "Choosing a dining table often comes down to two main styles: the organic flow of Live Edge or the structured precision of our geometric collections."
    }), "\n", createVNode($$ProductCTA, {
      title: "Live Edge Collection",
      description: "Every Live Edge table is unique. We preserve the natural contour of the tree, meaning your table is a one-of-a-kind piece of art. Perfect for those who want a dramatic, organic focal point.",
      image: "https://urbisconcepts.com/cdn/shop/files/Live_Edge_Parota_Table.png?v=1764875346",
      url: "https://urbisconcepts.com/collections/live-edge",
      buttonText: "Shop Live Edge"
    }), "\n", createVNode($$ProductCTA, {
      title: "Strata Collection",
      description: "If you prefer clean lines and architectural details, the Strata Collection is your match. Featuring layered, stepped profiles, these tables offer a modern, sophisticated aesthetic that feels light yet substantial.",
      image: "https://urbisconcepts.com/cdn/shop/collections/Strata_Collection_16x9_02108dfa-3b0b-45b3-8af1-73d92c064b7c.png?v=1763863842",
      url: "https://urbisconcepts.com/collections/strata-collection",
      buttonText: "Shop Strata Dining"
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "seating-solutions",
      children: "Seating Solutions"
    }), "\n", createVNode(_components.p, {
      children: "Don’t forget the chairs. A great dining chair should be comfortable enough for a long dinner party and stylish enough to stand on its own."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Dining Chairs"
        }), ": Upholstered or wood, designed to complement our table heights perfectly."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Benches"
        }), ": A live edge bench is a fantastic space-saving solution that showcases more wood grain and adds a communal feel to the table."]
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "choosing-the-right-size",
      children: "Choosing the Right Size"
    }), "\n", createVNode(_components.p, {
      children: "Not sure what size table fits your room?"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Allow for Flow"
        }), ": Leave at least 36-42 inches of clearance between the table edge and the wall or other furniture."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Seating Capacity"
        }), ": A 6-foot table comfortably seats 6, while an 8-foot table can accommodate 8-10."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: ["Visit our ", createVNode(_components.a, {
            href: "/guides/dining-table-size-guide",
            children: "Sizing Guide"
          })]
        }), " for a detailed breakdown."]
      }), "\n"]
    }), "\n", createVNode($$ImageGallery, {
      title: "Dining Room Inspiration",
      description: "Real dining spaces featuring Urbis tables.",
      images: [{
        src: "https://urbisconcepts.com/cdn/shop/collections/Acacia_Collection_1x1_b2abb2d6-dd24-4046-907e-d493e42c63c0.jpg?v=1768962000&width=1024",
        alt: "Acacia Dining Set"
      }, {
        src: "https://urbisconcepts.com/cdn/shop/files/IMG_1044.heic?v=1755633336&width=2000",
        alt: "Live Edge Boardroom Table"
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

const url = "/guides/dining-room-furniture/";
const file = "/Users/denismahoney/Desktop/Websites/Urbis-Guide/src/pages/guides/dining-room-furniture.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/denismahoney/Desktop/Websites/Urbis-Guide/src/pages/guides/dining-room-furniture.mdx";
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
