import React from 'react';
import './globals.css';
import '@/styles/main.scss';
import Script from 'next/script';
import '@fortawesome/fontawesome-svg-core/styles.css';  // 引入 FontAwesome 样式文件
import '@/icons';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Prologue by HTML5 UP</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <link rel="stylesheet" href="assets/css/main.css" />
      </head>
      <body>
        <Script src="/assets/js/jquery.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/jquery.scrolly.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/jquery.scrollex.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/browser.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/breakpoints.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/util.js" strategy="beforeInteractive" />
        <Script src="/assets/js/main.js" strategy="beforeInteractive" />
        
        {children}
      </body>
    </html>
  );
}
