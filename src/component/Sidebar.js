import * as FaIcons from "react-icons/fa";

export const Sidebar = [
  {
    id: 1,
    title: "Home",
    cName: "sidebar-item",
    icon: <FaIcons.FaHome />,
    path: "/",
  },
  {
    id: 2,
    title: "About",
    cName: "sidebar-item",
    icon: <FaIcons.FaQuestion />,
    path: "/about",
  },
  {
    id: 3,
    title: "About App",
    cName: "sidebar-item",
    icon: <FaIcons.FaLaptop />,
    path: "/about/about-app",
  },
  {
    id: 4,
    title: "About Author",
    cName: "sidebar-item",
    icon: <FaIcons.FaAddressBook />,
    path: "/about/about-author",
  }
];