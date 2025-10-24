import React, { useState, useEffect, useRef } from "react";

// FIX: Add TypeScript declarations for the Web Speech API to fix compilation errors.
// The Web Speech API is not part of the standard DOM typings.
interface SpeechRecognition {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  onend: (() => void) | null;
  onerror: ((event: any) => void) | null;
  onresult: ((event: any) => void) | null;
  start: () => void;
  stop: () => void;
}

// FIX: Augment the global Window interface to include Web Speech API properties.
// Using `declare global` is necessary to modify the global scope from within a module.
declare global {
  interface Window {
    SpeechRecognition: new () => SpeechRecognition;
    webkitSpeechRecognition: new () => SpeechRecognition;
  }
}

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

const SendIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
    />
  </svg>
);

const MicIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
    />
  </svg>
);

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading }) => {
  const [input, setInput] = useState("");
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const [isSpeechSupported, setIsSpeechSupported] = useState(false);

  useEffect(() => {
    const supported = !!(
      window.SpeechRecognition || window.webkitSpeechRecognition
    );
    setIsSpeechSupported(supported);
    if (!supported) return;

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
      setInput(transcript);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      // FIX: Removed condition which was causing a stale closure bug.
      // On error, we should always update the state to not listening.
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;

    return () => {
      recognitionRef.current?.stop();
    };
  }, []);

  const handleToggleListening = () => {
    if (!recognitionRef.current || isLoading) return;

    if (isListening) {
      recognitionRef.current.stop();
    } else {
      setInput("");
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      onSendMessage(input.trim());
      setInput("");
    }
  };

  return (
    <div className="p-4 bg-gray-900/50 backdrop-blur-sm border-t border-gray-700/50">
      <form onSubmit={handleSubmit} className="flex items-center gap-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={
            isListening
              ? "Listening..."
              : "Ask about Tri's skills, projects, or experience..."
          }
          disabled={isLoading}
          className="flex-1 bg-gray-700/50 text-gray-200 placeholder-gray-400 px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-300"
        />
        {isSpeechSupported && (
          <button
            type="button"
            onClick={handleToggleListening}
            disabled={isLoading}
            className={`flex-shrink-0 p-3 rounded-full text-white transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 focus-visible:ring-offset-gray-800 disabled:opacity-50 disabled:cursor-not-allowed ${
              isListening
                ? "bg-red-600 animate-pulse ring-2 ring-red-500 ring-offset-2 ring-offset-gray-800"
                : "bg-gray-600 hover:bg-gray-500"
            }`}
            aria-label={isListening ? "Stop listening" : "Start listening"}
          >
            <MicIcon />
          </button>
        )}
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="flex-shrink-0 p-3 rounded-full text-white bg-gradient-to-r from-blue-500 to-red-500 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-gray-800"
        >
          <SendIcon />
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
