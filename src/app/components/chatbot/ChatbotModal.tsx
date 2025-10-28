// src/app/components/chatbot/ChatbotModal.tsx (Cập nhật câu chào sang tiếng Việt)
"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Dialog, // Giữ lại Dialog từ shadcn/ui
  DialogContent, // Không dùng DialogContent gốc vì custom viền gradient
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import ChatHistory from "./ChatHistory";
import ChatInput from "./ChatInput";
import type { ChatMessage } from "@/lib/type"; // Đảm bảo đường dẫn đúng
import * as DialogPrimitive from "@radix-ui/react-dialog"; // Import gốc để custom
import { XIcon } from "lucide-react"; // Import icon close
import { cn } from "@/lib/utils"; // Import cn utility

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
      // Đã cập nhật câu chào sang tiếng Việt:
      text: "Xin chào! Tôi là trợ lý AI đại diện cho Nguyễn Hữu Văn Trí (Alden). Bạn có thể hỏi tôi về kỹ năng, dự án hoặc kinh nghiệm của anh ấy.",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const chatHistoryRef = useRef<HTMLDivElement>(null); // Ref để cuộn chat

  const scrollToBottom = useCallback(() => {
    if (chatHistoryRef.current) {
      setTimeout(() => {
        if (chatHistoryRef.current) {
          chatHistoryRef.current.scrollTop =
            chatHistoryRef.current.scrollHeight;
        }
      }, 0); // Dùng setTimeout để đảm bảo DOM cập nhật
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, scrollToBottom]);

  const handleSendMessage = async (messageText: string) => {
    // Không gửi nếu input rỗng hoặc đang loading
    if (!messageText.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: "user", text: messageText.trim() };

    // Cập nhật UI ngay với tin nhắn của user
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setIsLoading(true);

    // Chuẩn bị history để gửi lên backend:
    // 1. Bỏ qua tin nhắn chào mừng (index 0)
    // 2. Chuyển 'ai' -> 'model'
    // 3. Chỉ lấy các tin nhắn *trước* tin nhắn user vừa gửi
    const historyForApi = newMessages.slice(1, -1).map((msg) => ({
      role: msg.role === "ai" ? "model" : "user",
      parts: [{ text: msg.text }],
    }));

    // Tin nhắn hiện tại của user
    const currentMessage = userMessage.text;

    try {
      // Gọi API Route (backend)
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: currentMessage, // Tin nhắn mới
          history: historyForApi, // Lịch sử trước đó
        }),
      });

      // Xử lý lỗi nếu gọi API thất bại
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();

      // Xử lý lỗi nếu backend trả về lỗi (ví dụ: lỗi từ Gemini)
      if (data.error) {
        throw new Error(data.error);
      }

      // Tạo tin nhắn trả lời từ AI
      const aiResponse: ChatMessage = { role: "ai", text: data.reply || "..." };
      // Cập nhật UI với tin nhắn của AI
      setMessages((prev) => [...prev, aiResponse]);
    } catch (error) {
      // Hiển thị lỗi ra UI nếu có vấn đề
      console.error("Error sending message:", error);
      const errorMessage: ChatMessage = {
        role: "ai",
        text: `Xin lỗi, tôi gặp lỗi ${
          error instanceof Error ? `: ${error.message}` : "."
        }. Vui lòng thử lại sau.`, // Dịch thông báo lỗi
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      // Dừng trạng thái loading
      setIsLoading(false);
    }
  };

  // --- JSX Rendering ---
  return (
    // Sử dụng Dialog gốc (không có trigger)
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      {/* Portal để đưa modal ra ngoài cấu trúc DOM chính */}
      <DialogPrimitive.Portal>
        {/* Lớp Overlay mờ */}
        <DialogPrimitive.Overlay
          data-slot="dialog-overlay"
          className={cn(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          )}
        />
        {/* Div bọc ngoài để tạo viền Gradient */}
        <div className="fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded-xl p-px bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500">
          {/* Content của Dialog (nền card, bo góc nhỏ hơn div ngoài 1px) */}
          <DialogPrimitive.Content
            className={cn(
              "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
              "relative z-50 flex h-[80vh] w-[90vw] max-w-2xl flex-col gap-0 overflow-hidden rounded-[calc(0.75rem-1px)] bg-card text-card-foreground shadow-lg" // rounded-xl = 0.75rem
            )}
            // Không cần {...props} ở đây vì component này không nhận props trực tiếp
          >
            {/* 1. Header */}
            <DialogHeader className="p-4 border-b border-border/20 text-center flex-shrink-0 bg-card/80 backdrop-blur-sm z-10 relative">
              <DialogTitle className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-red-400 to-yellow-400">
                Trợ lý AI của Trí (Alden)
              </DialogTitle>
              <DialogDescription className="text-xs text-muted-foreground mt-1">
                Hỗ trợ bởi Gemini
              </DialogDescription>
            </DialogHeader>

            {/* 2. Khu vực Chat (Cuộn được) */}
            <div
              ref={chatHistoryRef}
              className="flex-1 overflow-y-auto custom-scrollbar" // flex-1 để chiếm không gian, overflow-y-auto để cuộn
            >
              {/* Component hiển thị lịch sử chat */}
              <ChatHistory messages={messages} isLoading={isLoading} />
            </div>

            {/* 3. Khu vực Input (Luôn ở dưới cùng) */}
            <div className="border-t border-border/20 bg-card/80 flex-shrink-0 backdrop-blur-sm relative">
              {/* Component nhập liệu */}
              <ChatInput
                onSendMessage={handleSendMessage}
                isLoading={isLoading}
              />
            </div>

            {/* Nút Close X mặc định */}
            <DialogPrimitive.Close
              data-slot="dialog-close"
              className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-3 right-3 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none"
            >
              <XIcon className="size-4" />
              <span className="sr-only">Đóng</span>
            </DialogPrimitive.Close>
          </DialogPrimitive.Content>
        </div>
      </DialogPrimitive.Portal>
    </Dialog>
  );
};

export default ChatbotModal;
