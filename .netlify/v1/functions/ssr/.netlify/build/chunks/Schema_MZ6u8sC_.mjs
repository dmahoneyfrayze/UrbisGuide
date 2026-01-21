import { c as createAstro, d as createComponent, r as renderTemplate, u as unescapeHTML } from './astro/server_BnC5UhzS.mjs';
import 'piccolore';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://guide.urbisconcepts.com");
const $$Schema = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Schema;
  const {
    type = "Article",
    title,
    description,
    url,
    image,
    publishDate,
    faqs,
    parent,
    items
  } = Astro2.props;
  const siteUrl = "https://guide.urbisconcepts.com";
  const logoUrl = "https://urbisconcepts.com/cdn/shop/files/Urbis_Concepts_Logo_Black.png?v=1680000000";
  const baseSchema = {
    "@context": "https://schema.org",
    "@graph": []
  };
  const organizationSchema = {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "Urbis Concepts",
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: logoUrl
    },
    sameAs: [
      "https://urbisconcepts.com",
      "https://www.instagram.com/urbisconcepts/",
      "https://www.facebook.com/urbisconcepts/"
    ]
  };
  baseSchema["@graph"].push(organizationSchema);
  const storeSchema = {
    "@type": "FurnitureStore",
    "@id": `${siteUrl}/#store`,
    name: "Urbis Concepts",
    image: logoUrl,
    url: siteUrl,
    telephone: "+16478665799",
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "122 Evans Ave",
      addressLocality: "Etobicoke",
      addressRegion: "ON",
      postalCode: "M8Z 5W2",
      addressCountry: "CA"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.6166,
      longitude: -79.5118
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        opens: "10:00",
        closes: "18:00"
      }
    ],
    areaServed: [
      "Toronto",
      "Etobicoke",
      "Mississauga",
      "Oakville",
      "Burlington",
      "Greater Toronto Area"
    ]
  };
  baseSchema["@graph"].push(storeSchema);
  const websiteSchema = {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: "Urbis Concepts Guide",
    description: "Expert guides on solid wood furniture, care, and design.",
    publisher: { "@id": `${siteUrl}/#organization` }
  };
  baseSchema["@graph"].push(websiteSchema);
  let mainEntity = {
    "@type": type,
    "@id": `${url}#${type.toLowerCase()}`,
    isPartOf: { "@id": `${url}` },
    headline: title,
    description,
    image: image || "https://urbisconcepts.com/cdn/shop/files/Live_Edge_Parota_Table.png?v=1764875346",
    datePublished: publishDate || (/* @__PURE__ */ new Date()).toISOString(),
    author: { "@id": `${siteUrl}/#organization` },
    publisher: { "@id": `${siteUrl}/#organization` }
  };
  if (type === "HowTo") {
    mainEntity["@type"] = "Article";
  }
  baseSchema["@graph"].push(mainEntity);
  const breadcrumbItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl
    }
  ];
  if (parent) {
    breadcrumbItems.push({
      "@type": "ListItem",
      position: 2,
      name: parent.name,
      item: `${siteUrl}${parent.url}`
    });
  }
  breadcrumbItems.push({
    "@type": "ListItem",
    position: parent ? 3 : 2,
    name: title,
    item: url
  });
  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems
  };
  baseSchema["@graph"].push(breadcrumbSchema);
  if (faqs && faqs.length > 0) {
    const faqSchema = {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer
        }
      }))
    };
    baseSchema["@graph"].push(faqSchema);
  }
  if (items && items.length > 0) {
    const itemListSchema = {
      "@type": "ItemList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: item.url.startsWith("http") ? item.url : `${siteUrl}${item.url}`,
        name: item.name,
        description: item.description
      }))
    };
    baseSchema["@graph"].push(itemListSchema);
  }
  return renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(baseSchema)));
}, "/Users/denismahoney/Desktop/Websites/Urbis-Guide/src/components/Schema.astro", void 0);

export { $$Schema as $ };
