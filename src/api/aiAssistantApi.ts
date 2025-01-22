export const getRecommendedQuestions = async (videoId: string): Promise<string[]> => {
  if (videoId === "123e4567-e89b-12d3-a456-426614174000") {
    return ["How do I change the Birthday?", "How do I change the entry?"];
  } else {
    return ["What is the process for data entry?", "How to manage user roles?"];
  }
};

export const restoreChatHistory = async (videoId: string) => {
  if (videoId === "123e4567-e89b-12d3-a456-426614174000") {
    return [
      { role: "user", type: "text", text: "What do I do if the country is not listed in the countries of origin?" },
      { role: "assistant", type: "text", text: "In this case, this country can be added in the system settings" },
      { role: "assistant", type: "video-timestamp", image_path: "assistant_frame.png", timestamp: 252 },
    ];
  } else {
    return [
      { role: "user", type: "text", text: "How can I reset my password?" },
      { role: "assistant", type: "text", text: "You can reset your password in the account settings." },
    ];
  }
};

export const getAnswer = async (question: string, videoId: string): Promise<string> => {
  if (videoId === "123e4567-e89b-12d3-a456-426614174000") {
    if (question === "How do I change the Birthday?") return "By clicking on the Birthday field and selecting the desired date.";
    if (question === "How do I change the entry?") return "You can change the entry by clicking on the entry field and selecting the desired entry.";
  } else {
    if (question === "What is the process for data entry?") return "Data entry can be done through the main dashboard.";
    if (question === "How to manage user roles?") return "User roles can be managed in the admin panel.";
  }
  return "I'm sorry, I didn't understand your question. Please try again.";
};
