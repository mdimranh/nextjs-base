import "@/styles/globals.css";
import Layout from "./layout";

// export default function MyApp({ Component, pageProps }) {
//   return (
//     <Layout>
//       <Component {...pageProps} />
//     </Layout>
//   );
// }

export default function MyApp({ Component, pageProps }) {
  return Component.ignoreLayout ? <Component {...pageProps} /> : <Layout><Component {...pageProps} /></Layout>
}