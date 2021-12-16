import Sidebar from "../components/Sidebar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="grid grid-cols-12 gap-6 px-5 my-14 lg:px-48 sm:px-20 md:px-32">
      <div className="col-span-12 text-center bg-white rounded-2xl lg:col-span-3 pd-4">
        <Sidebar />
      </div>
      <div className="col-span-12 bg-white rounded-2xl lg:col-start-9">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
