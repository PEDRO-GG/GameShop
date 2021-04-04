import { useState } from "react";
import SidebarItem from "./SidebarItem";
const SideBar = () => {
  const sidebarItems = [
    { href: "/billing", title: "Billing" },
    { href: "/inventory", title: "Inventory" },
    { href: "/unitConverter", title: "Unit Converter" },
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  const changeActiveTab = (index) => {
    setActiveIndex(index);
  };

  return (
    <nav className="col-span-1 flex flex-col">
      {sidebarItems.map((sidebarItem, index) => {
        return (
          <SidebarItem
            key={index}
            href={sidebarItem.href}
            isActive={activeIndex === index}
            title={sidebarItem.title}
            changeActiveTab={() => changeActiveTab(index)}
          />
        );
      })}
    </nav>
  );
};

export default SideBar;
