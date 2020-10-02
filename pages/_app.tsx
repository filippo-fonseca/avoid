import React, { useEffect } from "react";
import "../styles/globals.css";
function AppContainer({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default AppContainer;
