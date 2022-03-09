import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { AnimatePresence } from "framer-motion";
import "../styles/globals.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <div className="grid grid-cols-12 gap-6 px-5 lg:px-48 my-14 md:px-32 sm:px-20 ">
        <div className="col-span-12 p-4 text-center bg-white shadow-md dark:shadow-3xl lg:col-span-3 rounded-2xl dark:bg-dark500">
          <Sidebar />
        </div>
        <div className="flex flex-col col-span-12 overflow-hidden bg-white shadow-2xl dark:shadow-3xl lg:col-span-9 rounded-2xl dark:bg-dark500">
          <Navbar />
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
