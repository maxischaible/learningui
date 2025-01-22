import React from "react";
import Comments from "./Comments";
import AIAssistant from "./AIAssistant";
import RecentlyWatched from "./RecentlyWatched";
import CourseKnowledge from "./CourseKnowledge";
import Title from "./Title";

const Knowledge: React.FC = () => {
    return (
        <div className="flex h-full w-full p-3" style={{ boxSizing: 'border-box' }} >
            <div className="flex w-3/5 pr-3" style={{ boxSizing: 'border-box' }}>
                <div className="w-1/2 h-full pr-3" style={{ boxSizing: 'border-box' }}>
                    <div className="h-3/5  pb-3 overflow-y-auto" style={{ boxSizing: 'border-box' }}>
                        <div className="flex flex-col h-full bg-gray-100 rounded-lg">
                            <Title title="My Comments" icon="/CommentsBlue.svg" />
                            <div className="flex-grow overflow-y-auto">

                                <Comments knowledgePage={true} />
                            </div>
                        </div>
                    </div>
                    <div className="h-2/5  overflow-y-auto " style={{ boxSizing: 'border-box' }}>
                        <div className="flex flex-col h-full bg-gray-100 rounded-lg">
                            <Title title="Knowledge" icon="/LinkedKnowledgeBlue.svg" />
                            <div className="flex-grow overflow-y-auto">

                                <CourseKnowledge />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 h-full bg-gray-100 overflow-y-auto rounded-lg" style={{ boxSizing: 'border-box' }}>
                    <Title title="Recently Watched" icon="/VideoHubBlue.svg" />
                    <div className="flex-grow overflow-y-auto">

                        <RecentlyWatched />
                    </div>
                </div>
            </div>
            <div className="w-2/5 bg-gray-100 flex flex-col h-full overflow-y-auto rounded-lg" style={{ boxSizing: 'border-box' }}>
                <Title title="AI Assistant" icon="/BotBlue.svg" />
                <div className="flex-grow overflow-y-auto">
                    <AIAssistant knowledgePage={true} />
                </div>
            </div>
        </div>
    );
};

export default Knowledge;
