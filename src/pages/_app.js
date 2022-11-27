import "../styles/globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

var needFix = false;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer needFix={needFix} />
    </>
  );
}

export default MyApp;
