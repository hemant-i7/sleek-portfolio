import Script from 'next/script';

const ADSENSE_CLIENT = 'ca-pub-2824416968186037';

export default function AdSense() {
  return (
    <Script
      id="adsense"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
      async
    />
  );
}
