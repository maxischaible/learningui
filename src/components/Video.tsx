import React from "react";
import { useViewContext } from "../context/ViewContext";

const Video: React.FC = () => {
  const { toggleView } = useViewContext();

  return (
    <div className="w-full flex-grow flex items-center">
      <div className="w-full h-full text-left text-[16px] text-darkgray font-inter relative">
        <iframe
          className="w-full h-full"
          src="https://fastaimoviespublic.blob.core.windows.net/videos/18576303-bffc-495d-82c3-f22229532bab/69e2248d-ce0d-4d18-89f4-1d989e513926/a5869008-2955-4630-9780-e6be5e24d969/index.html"
          frameBorder="0"
          allowFullScreen
          title="Video Player"
          style={{ overflow: 'hidden', minHeight: '600px' }}
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
