import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

const MetaTags = ({ title, image, url = "", description = "" }) => {
  const publicImageUrl = `https://${window.location.hostname}${image.startsWith("/") ? image : `/${image}`}`;
  console.log({ publicImageUrl, title, url, description });

  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:image" content={publicImageUrl} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={publicImageUrl} />
    </Helmet>
  );
};

MetaTags.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  url: PropTypes.string,
};

export default MetaTags;
