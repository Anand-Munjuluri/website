import Head from "next/head";
import AnimatedText from "../components/AnimatedText";
import AnimatedPage from "../components/PageWrapper";

export default function About() {
  return (
    <AnimatedPage>
      <Head>
        <title>cody — about</title>
        <meta
          name="description"
          content="hey, i'm cody, an 18 year old software engineer and designer based in the
        united states. i strive to build unique and polished web
        interfaces for both consumer and business ends. i love lacrosse,
        capybaras, and writing open source software! i'm currently working on Bloom"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="title__wrapper">
        <AnimatedText element="h1" text="About" />
      </div>
      <p>
        hey, i'm cody, an 18 year old software engineer and designer based in
        the united states. i strive to build unique and polished web interfaces
        for both consumer and business ends. i love lacrosse, capybaras, and
        writing open source software!
        <br />
        <br />
        currently working on{" "}
        <a href="https://bloomapp.com" target="_blank" rel="noreferrer">
          Bloom
        </a>
      </p>
    </AnimatedPage>
  );
}
