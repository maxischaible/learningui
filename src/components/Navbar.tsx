import React from "react";
import NavItem from "./NavItem";
import { useViewContext } from "../context/ViewContext";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  selectedSection: string | null;
  setSelectedSection: (section: string | null) => void;
}

const Navbar: React.FC<NavbarProps> = ({ selectedSection, setSelectedSection }) => {
  const { isExpanded, videoTitle, userData } = useViewContext();
  const navigate = useNavigate();

  const sections = [
    { icon: "/VideoHub.svg", title: "Video Hub", link: "/" },
    { icon: "/Summary.svg", title: "Summary", link: "/" },
    { icon: "/LinkedKnowledge.svg", title: "Linked Knowledge", link: "/" },
    { icon: "/Comments.svg", title: "Comments", link: "/" },
    { icon: "/BotBlack.svg", title: "AI Assistant", link: "/" },
  ];

  return (
    <div className="w-full h-[80px] flex justify-between items-center bg-white shadow-md border-l-2 border-r-2 px-4 box-border">
      <div className="flex space-x-4 flex-grow">
        {isExpanded ? (
          <h2
            className="mt-2 text-left text-2xl font-bold pl-4 cursor-pointer"
            onClick={() => {
              setSelectedSection("Video Hub");
              navigate("/");
            }}
          >
            {videoTitle}
          </h2>
        ) : (
          sections.map((section) => (
            <NavItem
              key={section.title}
              icon={section.icon}
              title={section.title}
              onClick={() => setSelectedSection(section.title)}
              sidePage={selectedSection === section.title}
              link="/"
            />
          ))
        )}
      </div>
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
          link="#"
          onClick={() => {
            window.location.href = "mailto:florian.scherl@tum.de?subject=Support%20request";
          }}
        />
        <NavItem
          icon={"/Profile.svg"}
          title={userData.name || "Ann Smith"}
          link="/profile"
          onClick={() => setSelectedSection(null)}
        />
      </div>
    </div>
  );
};

export default Navbar;