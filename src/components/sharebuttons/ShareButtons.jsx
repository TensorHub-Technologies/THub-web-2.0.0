const ShareButtons = () => {
  const shareOnLinkedIn = () => {
    const currentUrl = window.location.href; // Get the full URL including the query string
    const linkedInShareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}`;
    window.open(linkedInShareUrl, "_blank");
    console.log("Share on LinkedIn:", currentUrl);
  };

  const shareOnFacebook = (url) => {
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(facebookShareUrl, "_blank");
    console.log("Share on Facebook:", url);
  };

  const shareOnTwitter = () => {
    const currentUrl = window.location.href;
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}`;
    window.open(twitterShareUrl, "_blank");
  };

  return (
    <div className="flex flex-col items-end space-y-3">
      <a
        href="#"
        onClick={shareOnLinkedIn}
        className="text-black dark:text-secondary-dark hover:text-[#3c5ba4] dark:hover:text-[#e22a90] mr-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="38"
          height="38"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
          <path d="M8 11l0 5" />
          <path d="M8 8l0 .01" />
          <path d="M12 16l0 -5" />
          <path d="M16 16v-3a2 2 0 0 0 -4 0" />
        </svg>
      </a>
      <a
        href="#"
        onClick={() =>
          shareOnFacebook("https://abcd1234.ngrok.io/blog-details.html")
        }
        target="_blank"
        className="text-black dark:text-secondary-dark hover:text-[#3c5ba4] dark:hover:text-[#e22a90] mr-4"
      >
        <svg
          fill="none"
          viewBox="0 0 18 18"
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
        >
          <path
            d="M15.75 6v6A3.75 3.75 0 0 1 12 15.75H6A3.75 3.75 0 0 1 2.25 12V6A3.75 3.75 0 0 1 6 2.25h6A3.75 3.75 0 0 1 15.75 6Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M8.25 15.75V9c0-1.641.375-3 3-3m-4.5 3.75h4.5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      </a>
      <a
        href="#"
        onClick={shareOnTwitter}
        className="text-black dark:text-secondary-dark hover:text-[#3c5ba4] dark:hover:text-[#e22a90] mr-5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
          <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
        </svg>
      </a>
      <a
        href="mailto:?subject=Check out this blog post&body=Here is a link to the blog post: [URL]"
        className="text-black dark:text-secondary-dark hover:text-[#3c5ba4] dark:hover:text-[#e22a90] mr-5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-mail"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
          <path d="M3 7l9 6l9 -6" />
        </svg>
      </a>
    </div>
  );
};

export default ShareButtons;
