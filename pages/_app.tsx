//import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import "bulma/bulma.sass";
import "../styles/mystyles.scss";
import "prism-themes/themes/prism-atom-dark.min.css";
import "@fortawesome/free-brands-svg-icons";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>B08waffles</title>
        <meta name="keywords" content="Brandon Kane, Brandon, Kane, Shay, Herrera, Web, Developer, Full-stack Web Developer, B08waffles, b08waffles, Brisbane, Lucid Professor, Starter Upp"></meta>
        <meta name="description" content="Brandon's Blog and Portfolio" />
        <meta name="author" content="Brandon Kane" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:image" content="/images/selfie.png" />
        <link rel="shortcut icon" href="/images/selfie.png" />
      </Head>
      <Header />
      <div>
        <Component {...pageProps} />
      </div>
      <div className="level has-background-grey-darker" />
      <Footer />
    </>
  );
}

export default MyApp;
