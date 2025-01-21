import React from "react";
import Video from "./Video";
import AIAssistant from "./AIAssistant";
import LinkedKnowledge from "./LinkedKnowledge";
import Summary from "./Summary";
import Comments from "./Comments";
import VideoHub from "./VideoHub";
import Title from "./Title";

const MacBookPro16MainScreen: React.FC = () => {
  return (
    <div className="w-full h-full overflow-hidden text-left text-base text-black font-inter flex p-3" style={{ boxSizing: 'border-box' }}>
      {/* Linke Spalte: 2/3 der Breite */}
      <div className="flex flex-col w-3/5 h-full pr-3" style={{ boxSizing: 'border-box' }}>
        {/* Obere Zeile: Video */}
        <div className="pb-3" style={{ boxSizing: 'border-box' }}>
          <Video />
        </div>
        {/* Untere Zeile: 3 Spalten */}
        <div className="flex flex-grow h-full">
          <div className="flex-1 h-full pr-3" style={{ boxSizing: 'border-box' }}>
            <div className="flex flex-col h-full bg-gray-100 rounded-lg">
              <Title title="Linked Knowledge" icon="/LinkedKnowledge.svg" />
              <div className="flex-grow overflow-y-auto h-0">
                <LinkedKnowledge />
              </div>
            </div>
          </div>
          <div className="flex-1 h-full pr-3" style={{ boxSizing: 'border-box' }}>
            <div className="flex flex-col h-full bg-gray-100 rounded-lg">
              <Title title="Comments" icon="/Comments.svg" />
              <div className="flex-grow overflow-y-auto h-0">
                <Comments knowledgePage={false} />
              </div>
            </div>
          </div>
          <div className="flex-1 h-full" style={{ boxSizing: 'border-box' }}>
            <div className="flex flex-col h-full bg-gray-100 rounded-lg">
              <Title title="Summary" icon="/Summary.svg" />
              <div className="flex-grow overflow-y-auto h-0">
                <Summary />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Rechte Spalte: 1/3 der Breite */}
      <div className="flex flex-col w-2/5 h-full">
        {/* Obere Zeile: VideoHub */}
        <div className="h-1/3 pb-3" style={{ boxSizing: 'border-box' }}>
          <div className="flex flex-col h-full bg-gray-100 rounded-lg">
            <Title title="Video Hub" icon="/VideoHub.svg" />
            <div className="flex-grow overflow-y-auto">
              <VideoHub /></div></div>
        </div>
        {/* Untere Zeile: AIAssistant */}
        <div className="h-2/3">
          <div className="flex flex-col h-full bg-gray-100 rounded-lg">
            <Title title="AI Assistant" icon="/BlueBot.svg" />
            <div className="flex-grow overflow-y-auto">
              <AIAssistant knowledgePage={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MacBookPro16MainScreen;