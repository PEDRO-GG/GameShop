import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";

const Layout = ({ children }) => {
  return (
    <div className="bg-blue-50 h-screen">
      <Header />
      <div className="grid grid-cols-8 w-11/12 m-auto mt-7 h-4/5">
        <SideBar />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
