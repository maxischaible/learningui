import React, { useState } from "react";
import { useViewContext } from "../context/ViewContext";
import ReactGA from 'react-ga4';

const AIAssistant: React.FC<{ knowledgePage: boolean }> = ({ knowledgePage }) => {
  const { chatHistory, recommendedQuestions, addChatMessage, fetchAnswer } = useViewContext();
  const [question, setQuestion] = useState('');

  const handleAskQuestion = async () => {
    if (question.trim()) {
      addChatMessage({ role: "user", type: "text", text: question });

      // Log the ask question event in Google Analytics
      ReactGA.event({
        category: 'Questions',
        action: 'Ask Question',
        label: question
      });

      await fetchAnswer(question);
      setQuestion('');
    }
  };

  return (
    <div className="flex flex-col h-full p-4" style={{ boxSizing: 'border-box' }}>
      <div className="flex-grow overflow-y-auto mb-4">
        {chatHistory.map((message, index) => (
          <div key={index} className={`flex ${message.role === "assistant" ? "justify-start" : "justify-end"} mb-4`}>
            {message.role === "assistant" && (
              <img src="Bot.svg" alt="Bot" className="w-8 h-8 mr-2 self-start" />
            )}
            <div className={`p-4 rounded-lg shadow-md ${message.role === "assistant" ? "bg-gray-200 max-w-3/4 mr-10" : "bg-white max-w-2/3 ml-10"}`}>
              {message.type === "text" && <p>{message.text}</p>}
              {message.type === "video-timestamp" && (
                <div>
                  <img src={message.image_path} alt="Video frame" className="w-full mb-2" />
                  <a href={`#${message.timestamp}`} className="text-blue-500">Jump to {new Date(message.timestamp! * 1000).toISOString().substr(11, 8)}</a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex mb-4 overflow-x-auto" style={{ flexShrink: 0, boxSizing: 'border-box' }}>
        {recommendedQuestions.map((q, index) => (
          <button
            key={index}
            onClick={() => setQuestion(q)}
            className="bg-white text-gray-500 rounded-lg mr-2 shadow-md flex-shrink-0"
            style={{ width: '170px', padding: '4px 8px', fontSize: '14px', whiteSpace: 'normal', wordWrap: 'break-word' }}
          >
            {q}
          </button>
        ))}
      </div>
      <div className="flex items-center bg-white text-gray-500 rounded-lg shadow-md mt-auto" style={{ padding: '4px 8px', width: 'calc(100% - 16px)' }}>
        <input
          type="text"
          placeholder="Ask me your question"
          className="flex-grow bg-transparent outline-none"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleAskQuestion();
            }
          }}
        />
        <button onClick={handleAskQuestion} className="flex-shrink-0 bg-transparent">
          <img src="Bot_Grey.svg" alt="Ask" className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
};

export default AIAssistant;
