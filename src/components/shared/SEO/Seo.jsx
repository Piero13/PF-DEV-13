import { Helmet } from "react-helmet-async";

function Seo({
  title,
  description,
  image = "/og-image.jpg",
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
        content={`https://pfdev13.netlify.app${image}`}
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

      {/* Canonical */}
      <link
        rel="canonical"
        href={url}
      />
    </Helmet>
  );
}

export default Seo;