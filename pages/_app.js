import Layout from "../components/Layout";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Layout/>
      <Component {...pageProps} />
    </div>
  );
}
