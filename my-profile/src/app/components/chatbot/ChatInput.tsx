// src/app/components/chatbot/ChatInput.tsx
import React, { useState } from "react";
import { Send } from "lucide-react"; // Dùng icon từ Lucide cho nhất quán
import { Button } from "@/components/ui/button"; // Import Button shadcn/ui

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

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
    <div className="p-4 bg-transparent">
      <form onSubmit={handleSubmit} className="flex items-center gap-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about Tri's skills, projects, or experience..."
          disabled={isLoading}
          className="
            flex-1 w-full
            bg-gray-700/70 text-gray-50 placeholder:text-gray-400 // Màu input
            px-5 py-3 rounded-full // Padding và bo góc lớn hơn
            focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/30 // Hiệu ứng focus
            transition-all duration-300 ease-in-out // Hiệu ứng mượt
            border border-gray-600/50 // Viền nhẹ
          "
        />
        <Button
          type="submit"
          disabled={isLoading || !input.trim()} // Disable khi input rỗng
          className="
            p-3 rounded-full text-white
            bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 // Nút gradient
            hover:from-blue-600 hover:via-red-600 hover:to-yellow-600 // Hiệu ứng hover gradient
            disabled:opacity-40 disabled:cursor-not-allowed // Disable style
            shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out // Bóng đổ và chuyển động
            transform hover:-translate-y-0.5 // Lift up on hover
          "
          size="icon" // Kích thước icon cho shadcn Button
        >
          <Send className="h-5 w-5" />
        </Button>
      </form>
    </div>
  );
};

export default ChatInput;
