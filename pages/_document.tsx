import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>My Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Author: C.H. Naveen Kumar,My portfolio"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body className="bg-gradient-to-r from-cblue to-clight dark:from-dark500 dark:to-dark700 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
