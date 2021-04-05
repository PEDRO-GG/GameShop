import SidebarItem from "./SidebarItem";
const SideBar = ({ sidebarItems, activeIndex, setActiveIndex }) => {
  const changeActiveTab = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <nav className="hidden lg:flex lg:flex-col">
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
    </>
  );
};

export default SideBar;
