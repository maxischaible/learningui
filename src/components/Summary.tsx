import React from "react";
import { useViewContext } from "../context/ViewContext";
import DownloadButton from "./DownloadButton";

const Summary: React.FC = () => {
  const { summaryData } = useViewContext();

  if (!summaryData) return null;

  return (
    <div className="p-4 flex flex-col h-full" style={{ boxSizing: 'border-box' }}>
      <div className="flex-grow overflow-y-auto bg-white shadow-md rounded p-4 mb-4" style={{ minHeight: '150px' }}>
        <p>{summaryData.summaryText}</p>
      </div>
      <div className="flex items-center mb-4">
        <img src={summaryData.summaryImage} alt="Summary" className="w-full" />
      </div>
      <div className="flex justify-between pb-3">
        <DownloadButton label="Summary" filePath={summaryData.summaryPdf} icon="/download_icon.svg" />
        <DownloadButton label="Mind Map" filePath={summaryData.mindMapPdf} icon="/download_icon.svg" />
      </div>
    </div>
  );
};

export default Summary;