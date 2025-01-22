import React from "react";
import { useViewContext } from "../context/ViewContext";
import DownloadButton from "./DownloadButton";

const RecentlyWatched: React.FC = () => {
    const { recentlyWatchedVideos } = useViewContext();

    return (
        <div className="w-full">
            {recentlyWatchedVideos.map((video, index) => (
                <div key={index} className="flex items-center p-4 border-b  h-28 ">
                    <img src={video.videoframe} alt="Video frame" className="h-full rounded-lg mr-4" />
                    <div>
                        <h3 className="font-bold m-0">{video.title}</h3>
                        <p className="mt-2">{video.subtitle}</p>
                        <div className="flex gap-3">
                            <DownloadButton
                                label="Summary"
                                filePath={video.summary}
                                icon="/download_icon.svg"
                                onClick={() => {
                                    console.log("Summary download button clicked");
                                }}
                            />
                            <DownloadButton
                                label="Mind Map"
                                filePath={video.mindmap}
                                icon="/download_icon.svg"
                                onClick={() => {
                                    console.log("Mind Map download button clicked");
                                }}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RecentlyWatched; 