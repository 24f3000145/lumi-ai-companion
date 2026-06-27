import { useState } from "react";
import ChatHeader from "../components/ChatHeader";
import ChatMessages from "../components/ChatMessages";
import ChatInput from "../components/ChatInput";

function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  async function sendMessage(text) {
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
        text: data.reply || "No reply received.",
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
        setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          sender: "lumi",
          text: "❌ Failed to connect to backend.",
        },
      ]);

      console.error(error);
    }
  }

  return (
    <main className="min-h-screen bg-[#0B1020] text-white flex flex-col">
        <ChatHeader />

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