import React from "react";
import type { ChatMessage as ChatMessageType } from "../../../lib/type";

interface ChatMessageProps {
  message: ChatMessageType;
}

const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-gray-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

const AiIcon = () => (
  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 via-red-500 to-yellow-500 flex items-center justify-center text-white font-bold text-sm shadow-lg">
    T
  </div>
);

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const { role, text } = message;
  const isUser = role === "user";

  const containerClasses = isUser ? "justify-end" : "justify-start";
  const bubbleClasses = isUser
    ? "bg-blue-600/50 rounded-br-none"
    : "bg-gray-700/60 rounded-bl-none";
  const messageClasses = `flex items-start gap-3 my-4 ${containerClasses}`;

  const formattedText = text.split("\n").map((str, index, array) => (
    <React.Fragment key={index}>
      {str}
      {index < array.length - 1 && <br />}
    </React.Fragment>
  ));

  return (
    <div className={messageClasses}>
      {!isUser && <AiIcon />}
      <div
        className={`max-w-md lg:max-w-2xl px-4 py-3 rounded-xl text-gray-200 shadow-md ${bubbleClasses}`}
      >
        <p className="text-sm">{formattedText}</p>
      </div>
      {isUser && (
        <div className="h-8 w-8 rounded-full bg-gray-600 flex items-center justify-center shadow-lg">
          <UserIcon />
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
