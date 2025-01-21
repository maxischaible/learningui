import React, { useState } from "react";
import { useViewContext } from "../context/ViewContext";
import UploadModal from "./UploadModal";
import ReactGA from 'react-ga4';

const LinkedKnowledge: React.FC = () => {
  const { linkedElements } = useViewContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleElementClick = (element: { link: string; isWebLink: boolean; title: string }) => {
    if (element.isWebLink) {
      window.open(element.link, "_blank");
    } else {
      const link = document.createElement("a");
      link.href = element.link;
      link.download = element.link.split('/').pop() || "download";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Log the download event in Google Analytics
      ReactGA.event({
        category: 'Linked Knowledge',
        action: 'Download',
        label: element.title, // Log the title of the element
      });
    }
  };

  return (
    <div className="p-4 flex flex-col h-full " style={{ boxSizing: 'border-box' }}>
      <div className="flex-grow overflow-y-auto">
        {linkedElements.map((element, index) => (
          <div key={index} className="flex items-center p-4" onClick={() => handleElementClick(element)}>
            <img src={element.icon} alt={element.title} className="w-8 h-8 mr-4" />
            <h3 className="font-bold">{element.title}</h3>
          </div>
        ))}
      </div>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-500 text-white p-4 rounded-lg shadow-md w-full text-lg mb-4"
      >
        Upload own knowledge
      </button>
      {isModalOpen && <UploadModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default LinkedKnowledge;
