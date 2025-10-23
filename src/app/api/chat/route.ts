// src/app/api/chat/route.ts
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
import { NextResponse } from "next/server";
// Đảm bảo đường dẫn này đúng, file của em tên là constant.ts
import { SYSTEM_INSTRUCTION } from "@/lib/constant";

// Cấu hình an toàn
const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];

export async function POST(request: Request) {
  try {
    // 1. Nhận message và history từ frontend
    const { message, history } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

    // 2. Sử dụng systemInstruction (Cách A - Tốt nhất)
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-pro", // Hoặc model em muốn
      systemInstruction: SYSTEM_INSTRUCTION, // Prompt hệ thống của em
      safetySettings: safetySettings,
    });

    // 3. Khởi tạo chat với history nhận được từ frontend
    // History này đã được frontend format (user, model, user, model...)
    const chat = model.startChat({
      history: history || [], // Sử dụng history nếu có
    });

    // 4. Gửi tin nhắn mới của người dùng
    const result = await chat.sendMessage(message); // Chỉ gửi text của tin nhắn mới
    const response = result.response;
    const text = response.text();

    return NextResponse.json({ reply: text });
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: `Failed to get response from AI: ${errorMessage}` },
      { status: 500 }
    );
  }
}
