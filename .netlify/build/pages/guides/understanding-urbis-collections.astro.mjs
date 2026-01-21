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
  "title": "Understanding Urbis Collections",
  "description": "Urbis collections simplify the buying process by grouping pieces by design language, material, and use. Find the right solid wood furniture for your space and lifestyle.",
  "image": "https://urbisconcepts.com/cdn/shop/files/Parota_Live_Edge_Dining_Table_1.jpg?v=1700000000",
  "publishDate": "2026-01-18",
  "category": "Buying Guide",
  "schemaType": "CollectionPage",
  "items": [{
    "name": "Live Edge Collection",
    "url": "https://urbisconcepts.com/collections/live-edge",
    "description": "Preserving the natural edge of the tree for one-of-a-kind statement pieces."
  }, {
    "name": "Marwar Collection",
    "url": "https://urbisconcepts.com/collections/marwar-collection",
    "description": "Traditional Indian woodworking inspiration with rich tones and substantial slabs."
  }, {
    "name": "Strata Collection",
    "url": "https://urbisconcepts.com/collections/strata-collection",
    "description": "Layered planes and stepped profiles for modern, architectural spaces."
  }, {
    "name": "Stria Collection",
    "url": "https://urbisconcepts.com/collections/stria-collection",
    "description": "Linear texture and directional grain adding depth and shadow."
  }, {
    "name": "Aravalli Collection",
    "url": "https://urbisconcepts.com/collections/aravalli-collection",
    "description": "Soft, sculpted forms and grounded silhouettes with rounded edges."
  }, {
    "name": "Acacia Studio Collection",
    "url": "https://urbisconcepts.com/collections/acacia-studio-collection",
    "description": "Versatile, everyday designs perfect for condos and modern living."
  }]
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "understanding-urbis-collections",
    "text": "Understanding Urbis Collections"
  }, {
    "depth": 2,
    "slug": "how-to-choose-the-right-collection",
    "text": "How to Choose the Right Collection"
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
      id: "understanding-urbis-collections",
      children: "Understanding Urbis Collections"
    }), "\n", createVNode(_components.p, {
      children: "Urbis collections are designed to simplify the buying process—helping you choose solid wood furniture that fits your space, lifestyle, and design preferences without needing to be a furniture expert."
    }), "\n", createVNode(_components.p, {
      children: ["Rather than browsing hundreds of individual products, each Urbis collection groups pieces by ", createVNode(_components.strong, {
        children: "design language, material expression, and intended use"
      }), ". This allows you to quickly narrow in on furniture that aligns with how you live and how you want your space to feel."]
    }), "\n", createVNode(_components.p, {
      children: ["You can explore all available pieces at any time on the ", createVNode(_components.strong, {
        children: createVNode(_components.a, {
          href: "https://urbisconcepts.com/pages/all-products",
          children: "All Products page"
        })
      }), ", or dive deeper into each collection below."]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode($$ProductCTA, {
      title: "Live Edge Collection",
      description: "The Live Edge Collection preserves the natural edge of the tree, highlighting organic curves, knots, and grain patterns. Paired with refined, modern bases, these designs work especially well as statement dining tables—bringing sculptural presence without overpowering clean interiors.",
      image: "https://urbisconcepts.com/cdn/shop/files/Live_Edge_Parota_Table.png?v=1764875346",
      url: "https://urbisconcepts.com/collections/live-edge",
      buttonText: "View Collection"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Best for:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Open-concept ", createVNode(_components.strong, {
          children: createVNode(_components.a, {
            href: "/guides/dining-room-furniture",
            children: "dining spaces"
          })
        })]
      }), "\n", createVNode(_components.li, {
        children: "Homes that blend modern design with natural materials"
      }), "\n", createVNode(_components.li, {
        children: "Buyers who want a true one-of-one piece"
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode($$ProductCTA, {
      title: "Marwar Collection",
      description: "Drawing inspiration from traditional Indian woodworking, the Marwar Collection emphasizes rich tones, substantial slabs, and expressive grain movement. These pieces feel anchored and warm, ideal for spaces that need furniture with permanence and character.",
      image: "https://urbisconcepts.com/cdn/shop/collections/Marwar_Collection_16x9_b9100393-0dbf-46b6-bd42-b7387f4b9979.png?v=1763863663",
      url: "https://urbisconcepts.com/collections/marwar-collection",
      buttonText: "View Collection"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Best for:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Formal ", createVNode(_components.strong, {
          children: createVNode(_components.a, {
            href: "/guides/dining-room-furniture",
            children: "dining rooms"
          })
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Warm, layered interiors (especially ", createVNode(_components.strong, {
          children: createVNode(_components.a, {
            href: "/guides/bedroom-furniture-collection",
            children: "bedrooms"
          })
        }), ")"]
      }), "\n", createVNode(_components.li, {
        children: "Buyers who value visual weight and heritage materials"
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode($$ProductCTA, {
      title: "Strata Collection",
      description: "The Strata Collection focuses on layered planes and stepped profiles, creating a subtle stacked effect. Designed for modern spaces where you want clean lines and visual lightness, Strata pieces often feel architectural—quietly detailed rather than decorative.",
      image: "https://urbisconcepts.com/cdn/shop/collections/Strata_Collection_16x9_02108dfa-3b0b-45b3-8af1-73d92c064b7c.png?v=1763863842",
      url: "https://urbisconcepts.com/collections/strata-collection",
      buttonText: "View Collection"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Best for:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Modern and minimalist ", createVNode(_components.strong, {
          children: createVNode(_components.a, {
            href: "/guides/dining-room-furniture",
            children: "dining interiors"
          })
        })]
      }), "\n", createVNode(_components.li, {
        children: "Condos and contemporary homes"
      }), "\n", createVNode(_components.li, {
        children: "Buyers who want understated design with depth"
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode($$ProductCTA, {
      title: "Stria Collection",
      description: "Defined by linear texture, fluting, ribbing, and directional grain, the Stria Collection introduces depth and shadow. If you prefer minimal forms but want more visual interest than a flat panel, Stria adds movement without noise.",
      image: "https://urbisconcepts.com/cdn/shop/collections/Stria_Collection_16x9_5559edd5-e42c-432e-a469-a3ed5b485ee1.png?v=1762381223",
      url: "https://urbisconcepts.com/collections/stria-collection",
      buttonText: "View Collection"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Best for:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Design-forward interiors"
      }), "\n", createVNode(_components.li, {
        children: ["Hallways, entryways, and ", createVNode(_components.strong, {
          children: createVNode(_components.a, {
            href: "/guides/living-room-furniture",
            children: "living spaces"
          })
        })]
      }), "\n", createVNode(_components.li, {
        children: "Buyers who value texture over ornamentation"
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode($$ProductCTA, {
      title: "Aravalli Collection",
      description: "Named after the Aravalli mountain range, this collection leans into soft, sculpted forms and grounded silhouettes. Rounded corners and eased edges make Aravalli ideal for spaces where comfort and flow matter—bringing warmth without sharp lines.",
      image: "https://urbisconcepts.com/cdn/shop/collections/Aravalli_Collection_collage.png?v=1763863775",
      url: "https://urbisconcepts.com/collections/aravalli-collection",
      buttonText: "View Collection"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Best for:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: createVNode(_components.a, {
            href: "/guides/living-room-furniture",
            children: "Living rooms"
          })
        }), " and ", createVNode(_components.strong, {
          children: createVNode(_components.a, {
            href: "/guides/bedroom-furniture-collection",
            children: "bedrooms"
          })
        })]
      }), "\n", createVNode(_components.li, {
        children: "Homes with softer, organic layouts"
      }), "\n", createVNode(_components.li, {
        children: "Buyers who want solid wood with a calming presence"
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode($$ProductCTA, {
      title: "Acacia Studio Collection",
      description: "The Acacia Studio Collection showcases acacia wood in versatile, ready-to-style designs. From live edge dining tables to round coffee tables, these pieces are designed for everyday use, making them a strong fit for spaces where durability matters just as much as aesthetics.",
      image: "https://urbisconcepts.com/cdn/shop/collections/Acacia_Collection_16x9_fb4f2bca-167c-4964-b452-a3f93d41c0b5.png?v=1763863722",
      url: "https://urbisconcepts.com/collections/acacia-studio-collection",
      buttonText: "View Collection"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Best for:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Smaller or multifunctional spaces"
      }), "\n", createVNode(_components.li, {
        children: "First-time solid wood buyers"
      }), "\n", createVNode(_components.li, {
        children: "High-use dining and living areas"
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode($$ImageGallery, {
      title: "Urbis Design Gallery",
      description: "See how our collections come to life in real homes and spaces across the GTA.",
      images: [{
        src: "https://urbisconcepts.com/cdn/shop/files/IMG_1044.heic?v=1755633336&width=2000",
        alt: "Large live edge dining/boardroom table in a modern office space"
      }, {
        src: "https://urbisconcepts.com/cdn/shop/files/IMG_2505.heic?v=1755633335&width=2000",
        alt: "Live edge dining table with natural wood grain in a residential setting"
      }, {
        src: "https://urbisconcepts.com/cdn/shop/files/IMG_1762.jpg?v=1755633334&width=2000",
        alt: "Solid wood dining table set in a brightly lit dining room"
      }, {
        src: "https://urbisconcepts.com/cdn/shop/files/IMG_8817.heic?v=1755633335&width=2000",
        alt: "Solid wood furniture piece in a cozy living room environment"
      }, {
        src: "https://urbisconcepts.com/cdn/shop/files/IMG_9464.heic?v=1755633334&width=2000",
        alt: "Live edge coffee table in a modern living space"
      }, {
        src: "https://urbisconcepts.com/cdn/shop/files/IMG_2600.heic?v=1755633334&width=2000",
        alt: "Handcrafted side table showcasing unique wood textures"
      }, {
        src: "https://urbisconcepts.com/cdn/shop/files/IMG_8835.heic?v=1755633335&width=2000",
        alt: "Close-up of natural wood grain and live edge detail"
      }, {
        src: "https://urbisconcepts.com/cdn/shop/files/IMG_0082.heic?v=1755633335&width=2000",
        alt: "Handcrafted wood dining table with elegant base"
      }]
    }), "\n", createVNode(_components.h2, {
      id: "how-to-choose-the-right-collection",
      children: "How to Choose the Right Collection"
    }), "\n", createVNode(_components.p, {
      children: ["If you’re unsure where to start, visit the ", createVNode(_components.strong, {
        children: createVNode(_components.a, {
          href: "/materials",
          children: "Materials & Craft Guide"
        })
      }), " to learn more about the specific wood species we use, or use our sizing guides to find the perfect fit."]
    }), "\n", createVNode(_components.p, {
      children: "Each Urbis collection is built to last generations—this guide simply helps you find the one that fits your space best."
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

const url = "/guides/understanding-urbis-collections/";
const file = "/Users/denismahoney/Desktop/Websites/Urbis-Guide/src/pages/guides/understanding-urbis-collections.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/denismahoney/Desktop/Websites/Urbis-Guide/src/pages/guides/understanding-urbis-collections.mdx";
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
