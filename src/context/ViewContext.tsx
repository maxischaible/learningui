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
import { getUserData } from '../api/profileAPI';

interface ChatMessage {
  role: "assistant" | "user";
  type: "text" | "image" | "video-timestamp";
  text?: string;
  image_path?: string;
  timestamp?: number;
}

interface UserData {
  name: string;
  email: string;
  profilePicture?: string;
  plan?: string;
  position?: string;
  company?: string;
  phone?: string;
  address?: string;
  // Weitere Felder hier
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
  userData: UserData;
  videoId: string;
  setVideoId: (id: string) => void;
}

const ViewContext = createContext<ViewContextType | undefined>(undefined);

export const ViewProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [videos, setVideos] = useState<Video[]>([]);
  const [summaryData, setSummaryData] = useState<SummaryData | null>(null);
  const [linkedElements, setLinkedElements] = useState<LinkedElement[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(1);
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [recommendedQuestions, setRecommendedQuestions] = useState<string[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [recentlyWatchedVideos, setRecentlyWatchedVideos] = useState<RecentlyWatched[]>([]);
  const [userData, setUserData] = useState<UserData>({ name: '', email: '' });
  const [videoId, setVideoId] = useState("123e4567-e89b-12d3-a456-426614174000");
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
    const answer = await getAnswer(question, videoId);
    addChatMessage({ role: "assistant", type: "text", text: answer });
    return answer;
  };

  useEffect(() => {
    const loadVideos = async () => {
      const videoData = await fetchVideos();
      setVideos(videoData);
    };
    const loadSummaryData = async () => {
      const data = await fetchSummaryData(videoId);
      setSummaryData(data);
    };
    const loadLinkedElements = async () => {
      const elements = await fetchLinkedElements(videoId);
      setLinkedElements(elements);
    };
    const loadComments = async () => {
      const data = await fetchComments(videoId);
      setComments(data);
    };
    const loadChatHistory = async () => {
      const history = await restoreChatHistory(videoId);
      const formattedHistory = history.map(item => ({
        ...item,
        type: item.type as "text" | "image" | "video-timestamp",
        role: item.role as "assistant" | "user"
      }));
      setChatHistory(formattedHistory);
    };
    const loadRecommendedQuestions = async () => {
      const questions = await getRecommendedQuestions(videoId);
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
    const loadUserData = () => {
      const data = getUserData();
      setUserData(data);
    };
    loadVideos();
    loadSummaryData();
    loadLinkedElements();
    loadComments();
    loadChatHistory();
    loadRecommendedQuestions();
    loadCourses();
    loadRecentlyWatchedVideos();
    loadUserData();
  }, [videoId]);

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
      recentlyWatchedVideos,
      userData,
      videoId,
      setVideoId,
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
