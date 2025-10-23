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
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import { cn } from "@/lib/utils";
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
      {/* Sử dụng DialogPortal và DialogOverlay gốc từ shadcn/ui.
        Lớp Overlay đã được sửa ở Bước 1.
      */}
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay
          data-slot="dialog-overlay"
          className={cn(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          )}
        />
        {/* BẮT ĐẦU CUSTOMIZATION
          Chúng ta tạo một div bọc bên ngoài DialogContent để tạo viền gradient
        */}
        <div
          // Div này căn giữa modal và có viền gradient
          className="fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded-xl p-px bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500"
        >
          <DialogPrimitive.Content
            // className gốc của shadcn được đơn giản hóa, BỎ `style` và `borderImage`
            className={cn(
              "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
              "relative z-50 flex h-[80vh] w-[90vw] max-w-2xl flex-col gap-0 overflow-hidden rounded-[calc(0.75rem-1px)] bg-card text-card-foreground shadow-lg" // 0.75rem = rounded-xl
            )}
          >
            {/* 1. HEADER */}
            <DialogHeader
              className="
                p-4 border-b border-border/20 text-center flex-shrink-0
                bg-card/80 backdrop-blur-sm z-10 relative
              "
            >
              <DialogTitle
                className="
                  text-lg font-bold
                  bg-clip-text text-transparent
                  bg-gradient-to-r from-blue-400 via-red-400 to-yellow-400
                "
              >
                Tri (Alden)'s AI Assistant
              </DialogTitle>
              <DialogDescription className="text-xs text-muted-foreground mt-1">
                Powered by Gemini
              </DialogDescription>
              {/* Đường phân cách gradient (Tùy chọn, có thể bỏ nếu đã có viền) */}
              {/* <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 opacity-60"></div> */}
            </DialogHeader>

            {/* 2. KHU VỰC CHAT (Đã sửa lỗi layout) */}
            <div
              ref={chatHistoryRef}
              className="flex-1 overflow-y-auto custom-scrollbar" // <-- 'flex-1' và 'overflow-y-auto' ở đây
            >
              <ChatHistory messages={messages} isLoading={isLoading} />
            </div>

            {/* 3. KHU VỰC INPUT (Đã sửa lỗi layout) */}
            <div className="border-t border-border/20 bg-card/80 flex-shrink-0 backdrop-blur-sm relative">
              <ChatInput
                onSendMessage={handleSendMessage}
                isLoading={isLoading}
              />
            </div>

            {/* Nút Close X mặc định của shadcn/ui (vẫn nên có) */}
            <DialogPrimitive.Close
              data-slot="dialog-close"
              className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-3 right-3 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none"
            >
              <XIcon className="size-4" />
              <span className="sr-only">Close</span>
            </DialogPrimitive.Close>
          </DialogPrimitive.Content>
        </div>
      </DialogPrimitive.Portal>
    </Dialog>
  );
};

export default ChatbotModal;
