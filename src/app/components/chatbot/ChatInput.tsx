import React, { useState } from "react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

const SendIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
    />
  </svg>
);

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      onSendMessage(input.trim());
      setInput("");
    }
  };

  return (
    <div className="p-4 bg-gray-900/50 backdrop-blur-sm border-t border-gray-700/50">
      <form onSubmit={handleSubmit} className="flex items-center gap-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about Tri's skills, projects, or experience..."
          disabled={isLoading}
          className="flex-1 w-full bg-gray-700/50 text-gray-200 placeholder-gray-400 px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-300"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="p-3 rounded-full text-white bg-gradient-to-r from-blue-500 to-red-500 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity duration-300"
        >
          <SendIcon />
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
