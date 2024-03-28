import Head from "next/head";
import AnimatedText from "../components/AnimatedText";
import AnimatedPage from "../components/PageWrapper";

export default function About() {
  return (
    <AnimatedPage>
      <Head>
        <title>anand — about</title>
        <meta
          name="description"
          content="Hey, I'm Anand, a student at SRM University, rocking my B.Tech in CSE. Building dope websites is my jam, you know? When I'm not grinding away at code, I'm most likely catching some Z's, because, hey, even tech wizards need their beauty sleep, right? 🚀✨"
        />
      </Head>

      <div className="title__wrapper">
        <AnimatedText element="h1" text="About" />
      </div>
      <p>
        Hey, I'm Anand, a student at SRM University,
        rocking my B.Tech in CSE. Building dope websites is my jam, you know?
        When I'm not grinding away at code, I'm most likely catching some Z's,
        because, hey, even tech wizards need their beauty sleep, right? 🚀✨
        <br />
        <br />
        currently working on{" "}
        <a href="https://finmuni.com/" target="_blank" rel="noreferrer">
          FinMuni
        </a>
      </p>
    </AnimatedPage>
  );
}

