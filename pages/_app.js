import "../styles/globals.css";
import { HelloProvider } from "../context/context.js";

function MyApp({ Component, pageProps }) {
  return (
    <HelloProvider>
      <Component {...pageProps} />
    </HelloProvider>
  );
}

export default MyApp;
