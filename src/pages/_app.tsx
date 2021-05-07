import { AppProps } from "next/app";
import Head from "next/head";

import "react-tippy/dist/tippy.css";
import "../styles/main.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <meta charSet='UTF-8' />
        <title>DEVLOOSKIE</title>

        <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Lexend:wght@100;300;400;500&display=swap'
          rel='stylesheet'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          name='description'
          content='Hello, I am DEVLOOSKIE, a 16 year old fullstack web developer and designer.'
        />
        <meta
          name='keywords'
          content='Developer, Devlooskie, DEVLOOSKIE, looskie, looskie, dev, developer ui, ui, ux, html, js, css, looskie.com, looskieee, twitter, instagram, frontend webdeveloper, frontend webdeveloper windsor, windsor, whs, web, webdeveloper, designs, '
        />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
