import React from "react";
import { NavLink } from "react-router-dom";

interface NavItemProps {
  icon: string;
  title: string;
  onClick?: () => void;
  sidePage?: boolean;
  link?: string; // Optional, falls noch benötigt
}

const NavItem: React.FC<NavItemProps> = ({ icon, title, onClick, link, sidePage }) => {
  return (
    <NavLink
      to={link || "#"}
      className={({ isActive }) =>
        `flex items-center space-x-2 cursor-pointer ${title === "Help"
          ? "text-black"
          : sidePage !== undefined
            ? (sidePage ? "font-bold border-b-2 text-black" : "text-black")
            : (isActive ? "font-bold border-b-2 text-black" : "text-black")
        }`
      }
      onClick={onClick}
      style={{ textDecoration: 'none' }}
    >
      <img src={icon} alt={title} className="w-6 h-6" />
      <span>{title}</span>
    </NavLink>
  );
};

export default NavItem;
