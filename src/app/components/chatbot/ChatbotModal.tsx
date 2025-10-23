// src/components/chatbot/ChatbotModal.tsx
"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"; // Import shadcn Dialog
import ChatHistory from "./ChatHistory"; // Import component của bạn
import ChatInput from "./ChatInput"; // Import component của bạn
import type { ChatMessage } from "@/lib/type"; // Import type từ vị trí mới

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
  const chatHistoryRef = useRef<HTMLDivElement>(null); // Ref cho cuộn

  // Hàm cuộn xuống cuối
  const scrollToBottom = useCallback(() => {
    if (chatHistoryRef.current) {
      chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, scrollToBottom]);

  const handleSendMessage = async (messageText: string) => {
    const userMessage: ChatMessage = { role: "user", text: messageText };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    scrollToBottom(); // Cuộn khi gửi

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: messageText }),
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      const aiResponse: ChatMessage = { role: "ai", text: data.reply || "..." }; // Lấy reply từ backend
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
      <DialogContent className="sm:max-w-[600px] h-[80vh] flex flex-col p-0 gap-0 bg-card/80 dark:bg-card/90 backdrop-blur-md border-border/30">
        <DialogHeader className="p-4 border-b border-border/20 text-center sticky top-0 bg-inherit z-10">
          <DialogTitle className="text-lg font-semibold">
            Tri (Alden)'s AI Assistant
          </DialogTitle>
          <DialogDescription className="text-xs text-muted-foreground">
            Powered by Gemini
          </DialogDescription>
          {/* Optional: Add gradient line here if desired */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500" />
        </DialogHeader>
        <div ref={chatHistoryRef} className="flex-1 overflow-y-auto px-4 pb-4">
          <ChatHistory messages={messages} isLoading={isLoading} />
        </div>
        <div className="border-t border-border/20 sticky bottom-0 bg-inherit">
          <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChatbotModal;
