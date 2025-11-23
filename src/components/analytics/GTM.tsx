"use client";

import Script from "next/script";

export default function GTM({ gtmId }: { gtmId: string }) {
  const gtmCode = `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id=' + i + dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${gtmId}');
  `;

  return (
    <>
      {/* GTM HEAD SCRIPT */}
      <Script id="gtm-script" strategy="afterInteractive">
        {gtmCode}
      </Script>

      {/* GTM NOSCRIPT (BODY) */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
    </>
  );
}
