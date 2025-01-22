import React from "react";
import { useViewContext } from "../context/ViewContext";
import ReactGA from 'react-ga4';

const VideoHub: React.FC = () => {
  const { videos, currentVideoIndex, setCurrentVideoIndex, setVideoId } = useViewContext();

  const handleVideoClick = (index: number) => {
    setCurrentVideoIndex(index + 1);
    setVideoId(videos[index].videoId);

    // Log the video index change event in Google Analytics
    ReactGA.event({
      category: 'Video Hub',
      action: 'Set Current Video Index',
      label: `Video Index: ${index + 1}`,
    });
  };

  return (
    <div className="">
      {videos.map((video, index) => (
        <div
          key={index}
          className={`flex items-center pb-2 pt-2 pl-4 pr-4  ${currentVideoIndex === index + 1 ? "bg-blue-500 text-white" : "text-black"}`}
          onClick={() => handleVideoClick(index)}
        >
          <div className="text-lg font-bold mr-4">{index + 1}</div>
          <div className="flex items-center">
            <img src={video.videoFramePath} alt="Video frame" className="w-28 rounded-lg mr-4" />
            <h3 className="font-bold text-lg leading-tight">{video.videoTitle}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoHub;
