import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { fetchVideos, Video } from '../api/videoApi';
import { fetchSummaryData, SummaryData } from '../api/summaryApi';
import { fetchLinkedElements, LinkedElement } from '../api/linkedKnowledgeApi';
import { fetchComments } from '../api/commentsApi';
import { Comment } from "../types/Comment";
import { getRecommendedQuestions, restoreChatHistory, getAnswer } from '../api/aiAssistantApi';
import { fetchCourses, Course } from '../api/coursesApi';
import { fetchRecentlyWatched } from '../api/recentlyWatchedApi';
import { RecentlyWatched } from '../types/RecentlyWatched';

interface ChatMessage {
  role: "assistant" | "user";
  type: "text" | "image" | "video-timestamp";
  text?: string;
  image_path?: string;
  timestamp?: number;
}

interface ViewContextType {
  isExpanded: boolean;
  toggleView: () => void;
  videos: Video[];
  summaryData: SummaryData | null;
  linkedElements: LinkedElement[];
  addLinkedElement: (element: LinkedElement) => void;
  comments: Comment[];
  addComment: (comment: Comment) => void;
  updateComment: (index: number, updatedComment: Comment) => void;
  deleteComment: (index: number) => void;
  videoTitle: string;
  currentVideoIndex: number;
  setCurrentVideoIndex: (index: number) => void;
  chatHistory: ChatMessage[];
  recommendedQuestions: string[];
  addChatMessage: (message: ChatMessage) => void;
  fetchAnswer: (question: string) => Promise<string>;
  courses: Course[];
  recentlyWatchedVideos: RecentlyWatched[];
}

const ViewContext = createContext<ViewContextType | undefined>(undefined);

export const ViewProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [videos, setVideos] = useState<Video[]>([]);
  const [summaryData, setSummaryData] = useState<SummaryData | null>(null);
  const [linkedElements, setLinkedElements] = useState<LinkedElement[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(1);
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [recommendedQuestions, setRecommendedQuestions] = useState<string[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [recentlyWatchedVideos, setRecentlyWatchedVideos] = useState<RecentlyWatched[]>([]);
  const videoTitle = "Data collection of refugees";

  const toggleView = () => {
    setIsExpanded(!isExpanded);
  };

  const addLinkedElement = (element: LinkedElement) => {
    setLinkedElements((prev) => [...prev, element]);
  };

  const addComment = (comment: Comment) => {
    setComments((prev) => [...prev, comment]);
  };

  const updateComment = (index: number, updatedComment: Comment) => {
    setComments((prev) => {
      const newComments = [...prev];
      newComments[index] = updatedComment;
      return newComments;
    });
  };

  const deleteComment = (index: number) => {
    setComments((prev) => prev.filter((_, i) => i !== index));
  };

  const addChatMessage = (message: ChatMessage) => {
    setChatHistory((prev) => [...prev, message]);
  };

  const fetchAnswer = async (question: string) => {
    const answer = await getAnswer(question);
    addChatMessage({ role: "assistant", type: "text", text: answer });
    return answer;
  };

  useEffect(() => {
    const loadVideos = async () => {
      const videoData = await fetchVideos();
      setVideos(videoData);
    };
    const loadSummaryData = async () => {
      const data = await fetchSummaryData();
      setSummaryData(data);
    };
    const loadLinkedElements = async () => {
      const elements = await fetchLinkedElements();
      setLinkedElements(elements);
    };
    const loadComments = async () => {
      const data = await fetchComments();
      setComments(data);
    };
    const loadChatHistory = async () => {
      const history = await restoreChatHistory();
      const formattedHistory = history.map(item => ({
        ...item,
        type: item.type as "text" | "image" | "video-timestamp",
        role: item.role as "assistant" | "user"
      }));
      setChatHistory(formattedHistory);
    };
    const loadRecommendedQuestions = async () => {
      const questions = await getRecommendedQuestions();
      setRecommendedQuestions(questions);
    };
    const loadCourses = async () => {
      const courseData = await fetchCourses();
      setCourses(courseData);
    };
    const loadRecentlyWatchedVideos = async () => {
      const recentlyWatchedVideos = await fetchRecentlyWatched();
      setRecentlyWatchedVideos(recentlyWatchedVideos);
    };
    loadVideos();
    loadSummaryData();
    loadLinkedElements();
    loadComments();
    loadChatHistory();
    loadRecommendedQuestions();
    loadCourses();
    loadRecentlyWatchedVideos();
  }, []);

  return (
    <ViewContext.Provider value={{
      isExpanded,
      toggleView,
      videos,
      summaryData,
      linkedElements,
      addLinkedElement,
      comments,
      addComment,
      updateComment,
      deleteComment,
      videoTitle,
      currentVideoIndex,
      setCurrentVideoIndex,
      chatHistory,
      recommendedQuestions,
      addChatMessage,
      fetchAnswer,
      courses,
      recentlyWatchedVideos
    }}>
      {children}
    </ViewContext.Provider>
  );
};

export const useViewContext = () => {
  const context = useContext(ViewContext);
  if (!context) {
    throw new Error('useViewContext must be used within a ViewProvider');
  }
  return context;
};
