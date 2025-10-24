// src/app/api/chat/route.ts
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
  Content, // Import Content type
} from "@google/generative-ai";
import { NextResponse } from "next/server";
// Đảm bảo file này tồn tại: src/lib/constant.ts
import { SYSTEM_INSTRUCTION } from "@/lib/constant";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

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

    const { message, history } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // 2. Sử dụng systemInstruction (Cách này là tốt nhất)
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction: SYSTEM_INSTRUCTION,
      safetySettings: safetySettings,
    });

    // 3. Khởi tạo chat với history nhận được (đã được format bởi frontend)
    const chat = model.startChat({
      history: (history || []) as Content[], 
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
    // Trả về lỗi chi tiết để debug
    return NextResponse.json(
      { error: `Failed to get response from AI: ${errorMessage}` },
      { status: 500 }
    );
  }
}
