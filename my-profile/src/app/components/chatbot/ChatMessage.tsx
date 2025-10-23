// src/app/components/chatbot/ChatMessage.tsx
import React from "react";
import type { ChatMessage as ChatMessageType } from "@/lib/type";
import { Bot, User } from "lucide-react"; // Import icons

interface ChatMessageProps {
  message: ChatMessageType;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.role === "user";

  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      } mb-4 transition-all duration-300 ease-in-out`}
    >
      <div
        className={`
          flex items-start gap-3 p-3 rounded-lg max-w-[85%]
          ${
            isUser
              ? "bg-blue-600/90 text-white rounded-br-none shadow-md" // Tin nhắn user: màu xanh, góc bo khác
              : "bg-gray-700/80 text-gray-100 rounded-bl-none shadow-md" // Tin nhắn AI: màu xám, góc bo khác
          }
          transform hover:scale-[1.01] transition-transform duration-200
        `}
      >
        <div className={`flex-shrink-0 ${isUser ? "order-2" : "order-1"}`}>
          {
            isUser ? (
              <User className="h-5 w-5 text-blue-200" />
            ) : (
              <Bot className="h-5 w-5 text-red-200" />
            ) // Icon Bot có thể dùng màu gradient nhẹ
          }
        </div>
        <p
          className={`text-sm leading-relaxed ${
            isUser ? "order-1" : "order-2"
          }`}
        >
          {message.text}
        </p>
      </div>
    </div>
  );
};

export default ChatMessage;
