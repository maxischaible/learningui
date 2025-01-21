import React, { useState } from "react";
import { useViewContext } from "../context/ViewContext";
import { Comment } from "../types/Comment";
import ReactGA from 'react-ga4';

const CommentItem: React.FC<{ comment: Comment; index: number }> = ({ comment, index }) => {
  const { updateComment } = useViewContext();
  const [replyText, setReplyText] = useState("");
  const [showReplies, setShowReplies] = useState(true);

  const handleThumbsUp = () => {
    const updatedComment: Comment = {
      ...comment,
      number_thumbs_up: comment.number_thumbs_up + 1,
    };
    updateComment(index, updatedComment);

    // Log the thumbs up event in Google Analytics
    ReactGA.event({
      category: 'Comments',
      action: 'Thumbs Up',
      label: comment.text
    });
  };

  const handleReply = () => {
    if (replyText.trim()) {
      const newReply = {
        user_prename: "U",
        user_surname: "N",
        number_thumbs_up: 0,
        text: replyText,
        replies: null,
      };
      const updatedComment = {
        ...comment,
        replies: comment.replies ? [...comment.replies, newReply] : [newReply],
      };
      updateComment(index, updatedComment);
      setReplyText("");
    }
  };

  return (
    <div className="p-2">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center w-full">
          <div className="rounded-full bg-gray-300 w-8 h-8 flex items-center justify-center">
            {comment.user_prename}
            {comment.user_surname}
          </div>
          <div className="bg-white rounded-md shadow-md pl-1 pr-1 ml-2 flex-grow flex justify-between items-center">
            <p className="text-sm">{comment.text}</p>
            <button className="bg-transparent text-gray-500">⋮</button>
          </div>
        </div>
      </div>
      <div className="flex items-center mt-2">
        <button onClick={handleThumbsUp} className=" bg-transparent flex items-center text-gray-500">
          <img src="/thumb_up.svg" alt="Thumb Up" className="w-4 h-4 mr-1" />
          {comment.number_thumbs_up}
        </button>
        <button onClick={() => setShowReplies(!showReplies)} className="bg-transparent ml-4 text-blue-500">
          <img
            src="/arrow_up.svg"
            alt="Toggle Replies"
            className={`w-4 h-4 transform ${showReplies ? "" : "rotate-180"}`}
          />
        </button>
      </div>
      {showReplies && comment.replies && (
        <div className="ml-8 mt-2">
          {comment.replies.map((reply, i) => (
            <div key={i} className="flex items-center mb-2">
              <div className="rounded-full bg-gray-300 w-6 h-6 flex items-center justify-center text-sm">
                {reply.user_prename}
                {reply.user_surname}
              </div>
              <div className="bg-white rounded-md shadow-md pl-1 pr-1 ml-2 flex-grow">
                <p className="text-sm">{reply.text}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="flex items-center bg-white rounded-md shadow-md pl-1 pr-1 mt-2 ml-8">
        <input
          type="text"
          placeholder="Reply..."
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleReply()}
          className="flex-grow p-1 mr-2 text-sm"
        />
        <img src="/send.svg" alt="Send" onClick={handleReply} className="w-3 h-3 cursor-pointer" />
      </div>
    </div>
  );
};

const Comments: React.FC<{ knowledgePage: boolean }> = ({ knowledgePage }) => {
  const { comments, addComment } = useViewContext();
  const [newCommentText, setNewCommentText] = useState("");

  const handleAddComment = () => {
    if (newCommentText.trim()) {
      const newComment = {
        user_prename: "U",
        user_surname: "N",
        number_thumbs_up: 0,
        text: newCommentText,
        replies: [],
      };
      addComment(newComment);
      setNewCommentText("");

      // Log the new comment event in Google Analytics
      ReactGA.event({
        category: 'Comments',
        action: 'Add Comment',
        label: newCommentText
      });
    }
  };

  return (
    <div className="flex flex-col h-full" style={{ boxSizing: 'border-box' }}>
      <div className="flex-grow overflow-y-auto p-4">
        {comments.map((comment, index) => (
          <CommentItem key={index} comment={comment} index={index} />
        ))}
      </div>

      <div className=" m-3 h-6 relative p-4 bg-white rounded-lg shadow-md flex items-center px-4">
        <input
          type="text"
          placeholder="Add a comment..."
          value={newCommentText}
          onChange={(e) => setNewCommentText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAddComment()}
          className="w-full bg-transparent text-[#a8a0a0] text-2xl font-bold font-['Inter'] leading-normal outline-none flex-grow"
        />
        <img src="/send.svg" alt="Send" onClick={handleAddComment} className="w-6 h-6 cursor-pointer" />
      </div>
    </div>
  );
};

export default Comments;
