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
        <meta name="description" content="Blog and portfolio site" />
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
