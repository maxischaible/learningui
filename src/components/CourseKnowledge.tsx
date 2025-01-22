import React, { useState } from 'react';
import { useViewContext } from "../context/ViewContext";
import DownloadButton from "./DownloadButton";

const CourseKnowledge: React.FC = () => {
    const { courses } = useViewContext();

    return (
        <div className=" p-3">
            {courses.map((course) => (
                <CourseCard key={course.courseID} course={course} />
            ))}
        </div>
    );
};

const CourseCard = ({ course }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border-b ">
            <div className="flex p-2 bg-gray-300 rounded-lg justify-between items-center" style={{ borderBottom: '1px solid black' }}>
                <h3 className="font-bold m-0">{course.title}</h3>
                <button onClick={toggleOpen} className="cursor-pointer" style={{ backgroundColor: 'transparent', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
                    ▼
                </button>
            </div>
            <div style={{ maxHeight: isOpen ? '500px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease', padding: isOpen ? '1rem 0' : '0' }}>
                <div className="flex items-center">
                    <div className="w-3/4">
                        <div className="text-sm font-semibold mb-1">Quiz Success Rate</div>
                        <div className="bg-gray-200 h-7 rounded flex items-center">
                            <div className="bg-green-500 h-full" style={{ width: `${course.progress * 100}%` }}></div>
                            <span className="ml-2">{(course.progress * 100).toFixed(0)}%</span>
                        </div>
                    </div>
                    <button className="bg-blue-500 text-white p-2 rounded ml-4 mr-3">Retry</button>
                    <DownloadButton
                        label="Summary"
                        filePath={course.summaryPath}
                        icon="/download_icon.svg"
                        onClick={() => {
                            console.log("Download button clicked");
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default CourseKnowledge; 