import Script from 'next/script';

export default function Feed() {
  return (
    <>
      <div id="substack-feed-embed"></div>
      
      {/* Inline configuration script */}
      <Script id="substack-config">
        {`
          window.SubstackFeedWidget = {
            substackUrl: "thequeergaze.substack.com",
            posts: 8,
            colors: {
              primary: "#F3F3F3",
              secondary: "#BCB9B9",
              background: "#050505",
            }
          };
        `}
      </Script>

      {/* External script for the feed widget */}
      <Script 
        src="https://substackapi.com/embeds/feed.js" 
        strategy="lazyOnload" 
        async 
      />
    </>
  );
}
