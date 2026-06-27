import { useState, useEffect } from "react";
import ChatHeader from "../components/ChatHeader";
import ChatMessages from "../components/ChatMessages";
import ChatInput from "../components/ChatInput";

function ChatPage() {
  // Load chat history from localStorage
  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem("lumi-chat");
    return savedMessages ? JSON.parse(savedMessages) : [];
  });

  const [isTyping, setIsTyping] = useState(false);

  // Save chat whenever messages change
  useEffect(() => {
    localStorage.setItem("lumi-chat", JSON.stringify(messages));
  }, [messages]);

  async function sendMessage(text) {
    if (!text.trim()) return;

    const userMessage = {
      sender: "user",
      text,
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/chat?prompt=${encodeURIComponent(text)}`
      );

      const data = await response.json();

      setIsTyping(false);

      const aiMessage = {
        sender: "lumi",
        text: data.reply || "Sorry, I couldn't think of a reply. 🥲",
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      setIsTyping(false);

      setMessages((prev) => [
        ...prev,
        {
          sender: "lumi",
          text: "⚠️ Oops! I couldn't connect to my brain right now. Try again in a moment.",
        },
      ]);

      console.error(error);
    }
  }

  // Clear chat
  function clearChat() {
    localStorage.removeItem("lumi-chat");
    setMessages([]);
  }

  return (
    <main className="min-h-screen bg-[#0B1020] text-white flex flex-col">
      <ChatHeader onClear={clearChat} />

      <div className="flex-1 flex justify-center overflow-hidden">
        <div className="w-full max-w-4xl flex flex-col">
          <ChatMessages
            messages={messages}
            isTyping={isTyping}
          />
        </div>
      </div>

      <ChatInput onSend={sendMessage} />
    </main>
  );
}

export default ChatPage;