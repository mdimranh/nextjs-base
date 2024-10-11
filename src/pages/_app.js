import "@/styles/globals.css";
// import Layout from "./layout";

// export default function MyApp({ Component, pageProps }) {
//   return (
//     <Layout>
//       <Component {...pageProps} />
//     </Layout>
//   );
// }

// export default function MyApp({ Component, pageProps }) {
//   return Component.ignoreLayout ? <Component {...pageProps} /> : <Layout><Component {...pageProps} /></Layout>
// }

import DashboardLayout from "../layout/dashboard";
import Layout from "../layout/main";
import { useRouter } from "next/router";

const layoutMap = {
  "/dashboard": DashboardLayout,
  "default": Layout,
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const path = router.pathname;

  // Detect layout based on the route or default to MainLayout
  const getLayout = () => {
    // Match the first segment of the path to a layout
    const layoutPath = Object.keys(layoutMap).find((key) =>
      path.startsWith(key)
    );
    const Layout = layoutMap[layoutPath] || layoutMap['default'];

    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  };

  return getLayout();
}

export default MyApp;
