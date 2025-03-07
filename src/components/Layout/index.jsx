import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="w-full flex flex-col justify-start items-center">
      <Header />
      <div className="w-[95%] max-w-[1366px] mx-auto mt-[20px!important]">{children}</div>
      <Footer />
    </div>
  );
};
export default Layout;
