// src/app/components/chatbot/ChatbotModal.tsx
"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import ChatHistory from "./ChatHistory";
import ChatInput from "./ChatInput";
import type { ChatMessage } from "@/lib/type";

interface ChatbotModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const ChatbotModal: React.FC<ChatbotModalProps> = ({
  isOpen,
  onOpenChange,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "ai",
      text: "Hello! I am an AI assistant representing Nguyen Huu Van Tri (Alden). Feel free to ask me about his skills, projects, or experience.",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const chatHistoryRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    if (chatHistoryRef.current) {
      setTimeout(() => {
        if (chatHistoryRef.current) {
          chatHistoryRef.current.scrollTop =
            chatHistoryRef.current.scrollHeight;
        }
      }, 0);
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, scrollToBottom]);

  const handleSendMessage = async (messageText: string) => {
    if (!messageText.trim()) return;

    const userMessage: ChatMessage = { role: "user", text: messageText.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setIsLoading(true);

    const historyForApi = newMessages.slice(1, -1).map((msg) => ({
      role: msg.role === "ai" ? "model" : "user",
      parts: [{ text: msg.text }],
    }));
    const currentMessage = userMessage.text;

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: currentMessage,
          history: historyForApi,
        }),
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      const aiResponse: ChatMessage = { role: "ai", text: data.reply || "..." };
      setMessages((prev) => [...prev, aiResponse]);
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage: ChatMessage = {
        role: "ai",
        text: `Sorry, I encountered an error${
          error instanceof Error ? `: ${error.message}` : "."
        }. Please try again later.`,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent
        className="
          sm:max-w-[600px] h-[80vh] flex flex-col p-0 gap-0
          bg-gradient-to-br from-gray-900 via-zinc-950 to-black  // Nền gradient tối
          text-foreground rounded-xl shadow-2xl // Bo tròn, bóng đổ sâu
          border border-transparent relative // Chuẩn bị cho viền gradient
          overflow-hidden // Cắt nội dung vượt ra ngoài (cho gradient border)
        "
        style={{
          // Viền gradient đặc biệt cho DialogContent (hack)
          // Có thể thay bằng lớp div bọc ngoài nếu muốn dùng p-px
          borderImage: "linear-gradient(to right, #3B82F6, #EF4444, #F59E0B) 1",
          borderWidth: "2px", // Độ dày của viền
          borderStyle: "solid",
        }}
      >
        {/* Header của Modal */}
        <DialogHeader
          className="
            p-4 border-b border-border/20 text-center flex-shrink-0
            bg-gradient-to-r from-gray-800/80 via-zinc-900/80 to-gray-800/80 // Gradient nhẹ cho header
            backdrop-blur-sm z-10 relative
          "
        >
          <DialogTitle
            className="
              text-lg font-bold
              bg-clip-text text-transparent // Cho phép text có gradient
              bg-gradient-to-r from-blue-400 via-red-400 to-yellow-400 // Gradient cho tiêu đề
            "
          >
            Tri (Alden)'s AI Assistant
          </DialogTitle>
          <DialogDescription className="text-xs text-muted-foreground mt-1">
            Powered by Gemini
          </DialogDescription>
          {/* Đường phân cách gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 opacity-60"></div>
        </DialogHeader>

        {/* Khu vực hiển thị lịch sử chat */}
        <div
          ref={chatHistoryRef}
          className="flex-1 overflow-y-auto p-4 custom-scrollbar"
        >
          {" "}
          {/* Thêm custom-scrollbar */}
          <ChatHistory messages={messages} isLoading={isLoading} />
        </div>

        {/* Khu vực nhập liệu */}
        <div className="border-t border-border/20 bg-gradient-to-r from-gray-800/80 via-zinc-900/80 to-gray-800/80 flex-shrink-0 backdrop-blur-sm relative">
          {" "}
          {/* Gradient và blur cho footer */}
          <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
          {/* Đường phân cách gradient */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 opacity-60"></div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChatbotModal;
