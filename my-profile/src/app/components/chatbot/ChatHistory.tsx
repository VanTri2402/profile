import React from "react";
import type { ChatMessage as ChatMessageType } from "../../../lib/type";
import ChatMessage from "./ChatMessage";

interface ChatHistoryProps {
  messages: ChatMessageType[];
  isLoading: boolean;
}

const LoadingIndicator: React.FC = () => (
  <div className="flex items-start gap-3 my-4 justify-start">
    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 via-red-500 to-yellow-500 flex items-center justify-center text-white font-bold text-sm shadow-lg">
      T
    </div>
    <div className="bg-gray-700/60 rounded-xl rounded-bl-none px-4 py-3 flex items-center justify-center">
      <div className="flex space-x-1">
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.3s]"></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:-0.15s]"></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
      </div>
    </div>
  </div>
);

const ChatHistory: React.FC<ChatHistoryProps> = ({ messages, isLoading }) => {

  
  return (
    <div className="flex-1 p-6 space-y-4 overflow-y-auto">
      {messages.map((msg, index) => (
        <ChatMessage key={index} message={msg} />
      ))}
      {isLoading && <LoadingIndicator />}
    </div>
  );
};

export default ChatHistory;
