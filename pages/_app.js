import { Fragment } from "react";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { ContextAuthProvider } from "../context/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <ContextAuthProvider>
        <Navbar />
        <Component {...pageProps} />
      </ContextAuthProvider>
    </Fragment>
  );
}

export default MyApp;
