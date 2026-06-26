import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="zh-CN" className="dark">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#0f0f11" />
      </Head>
      <body className="bg-dark-950 text-white antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
