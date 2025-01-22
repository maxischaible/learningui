import React from "react";
import Title from "./Title";
import AIAssistant from "./AIAssistant";
import LinkedKnowledge from "./LinkedKnowledge";
import Summary from "./Summary";
import VideoHub from "./VideoHub";
import Comments from "./Comments";

const icons: { [key: string]: string } = {
  "Video Hub": "/VideoHubBlue.svg",
  "Summary": "/SummaryBlue.svg",
  "Linked Knowledge": "/LinkedKnowledgeBlue.svg",
  "Comments": "/CommentsBlue.svg",
  "AI Assistant": "/BotBlue.svg",
};

interface ContentRightProps {
  selectedSection: string;
  className?: string;
}

const ContentRight: React.FC<ContentRightProps> = ({ selectedSection, className }) => {
  const renderContent = () => {
    switch (selectedSection) {
      case "AI Assistant":
        return <AIAssistant knowledgePage={false} />;
      case "Linked Knowledge":
        return <LinkedKnowledge />;
      case "Summary":
        return <Summary />;
      case "Video Hub":
        return <VideoHub />;
      case "Comments":
        return <Comments knowledgePage={false} />;
      default:
        return <AIAssistant knowledgePage={false} />;
    }
  };

  return (
    <div className={`flex flex-col h-full bg-whitesmoke-100 ${className}`}>
      <Title title={selectedSection} icon={icons[selectedSection]} />
      <div className="flex-grow overflow-y-auto">{renderContent()}</div>
    </div>
  );
};

export default ContentRight;
