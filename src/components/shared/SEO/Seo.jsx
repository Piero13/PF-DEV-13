import { Helmet } from "react-helmet-async";
import OgImage from "/PFDEV13_opengraph.webp"

function Seo({
  title,
  description,
  image = OgImage,
  url = "https://pfdev13.netlify.app",
}) {
  const siteTitle =
    "Pierre Fasce — Développeur Web";

  const fullTitle = title
    ? `${title} | ${siteTitle}`
    : siteTitle;

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{fullTitle}</title>

      <meta
        name="description"
        content={description}
      />

      {/* Open Graph */}
      <meta
        property="og:title"
        content={fullTitle}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:url"
        content={url}
      />

      <meta
        property="og:image"
        content={image}
      />

      {/* Twitter */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={fullTitle}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content={image}
      />
    </Helmet>
  );
}

export default Seo;