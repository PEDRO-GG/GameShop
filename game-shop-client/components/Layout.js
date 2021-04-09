import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";
import { ProductsContextProvider } from "../context/ProductsContext";

const Layout = ({ children }) => {
  const sidebarItems = [
    { href: "/billing", title: "Billing" },
    { href: "/inventory", title: "Inventory" },
    { href: "/unit-converter", title: "Unit Converter" },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="bg-blue-50 h-screen">
      <Header sidebarItems={sidebarItems} setActiveIndex={setActiveIndex} />
      <div className="overflow-auto lg:flex lg:w-11/12 lg:m-auto lg:mt-7 h-4/5">
        <SideBar
          sidebarItems={sidebarItems}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
        <main className="overflow-auto w-full bg-white min-h-full">
          <ProductsContextProvider>{children}</ProductsContextProvider>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
