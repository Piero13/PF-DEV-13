import { Helmet } from "react-helmet-async";
import ogImage from "../../../../public/og_image.jpg"

function Seo({
  title,
  description,
  image = {ogImage},
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