import Link from "next/link";
import { useState } from "react";
import GameControllerIcon from "./GameControllerIcon";
import HamburgerButton from "./HamburgerButton";

const Header = ({ sidebarItems, setActiveIndex }) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  return (
    <header className="bg-white">
      <h1 className="w-full p-3 text-4xl text-center text-blue-500 flex justify-center items-center">
        <GameControllerIcon />
        GameShop
      </h1>
      <HamburgerButton
        isOpen={isHamburgerOpen}
        onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
      />
      {isHamburgerOpen &&
        sidebarItems.map((item, index) => (
          <Link key={item.href} href={item.href}>
            <a
              onClick={() => setActiveIndex(index)}
              className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            >
              {item.title}
            </a>
          </Link>
        ))}
    </header>
  );
};

export default Header;
