import Link from "next/link";
const SidebarItem = ({ href, title, isActive, changeActiveTab }) => {
  let styles = "bg-white text-center w-36 p-1 m-1";
  styles = isActive
    ? styles + " border-r-2 border-blue-400 text-blue-400"
    : styles;
  return (
    <Link href={href}>
      <a className={styles} onClick={changeActiveTab}>
        {title}
      </a>
    </Link>
  );
};

export default SidebarItem;
