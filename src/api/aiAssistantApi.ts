export const getRecommendedQuestions = async (): Promise<string[]> => {
  return ["How do I change the Birthday?", "How do I change the entry?"];
};

export const restoreChatHistory = async () => {
  return [
    { role: "user", type: "text", text: "What do I do if the country is not listed in the countries of origin?" },    { role: "assistant", type: "text", text: "In this case, this country can be added in the system settings" },
    { role: "assistant", type: "video-timestamp", image_path: "assistant_frame.png", timestamp: 252 },

  ];
};

export const getAnswer = async (question: string): Promise<string> => {
  if (question === "How do I change the Birthday?") return "By clicking on the Birthday field and selecting the desired date.";
  if (question === "How do I change the entry?") return "You can change the entry by clicking on the entry field and selecting the desired entry.";
  return "I'm sorry, I didn't understand your question. Please try again.";
};
