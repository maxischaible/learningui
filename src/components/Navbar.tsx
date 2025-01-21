import React from "react";
import NavItem from "./NavItem";

interface NavbarProps {
  selectedSection: string | null;
  setSelectedSection: (section: string | null) => void;
}

const Navbar: React.FC<NavbarProps> = ({ selectedSection, setSelectedSection }) => {

  return (
    <div className="w-full h-[80px] flex justify-end bg-white shadow-md border-l-2 border-r-2 px-4 box-border">
  
      <div className="flex space-x-4">
        <NavItem
          icon={"/overview.svg"}
          title="Course Overview"
          link="/courses"
          onClick={() => setSelectedSection(null)}
        />
        <NavItem
          icon={"/book.svg"}
          title="Personal Knowledge"
          link="/knowledge"
          onClick={() => setSelectedSection(null)}
        />
        <NavItem
          icon={"/Help.svg"}
          title="Help"
          link="/help"
          onClick={() => setSelectedSection(null)}
        />
        <NavItem
          icon={"/Profile.svg"}
          title="Ann Smith"
          link="/profile"
          onClick={() => setSelectedSection(null)}
        />
      </div>
    </div>
  );
};

export default Navbar;