import { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";

function ChatMessages({ messages, isTyping }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  return (
    <div className="flex-1 overflow-y-auto px-6 py-6">
      {messages.length === 0 ? (
        <div className="h-full flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl font-bold mb-3">Hi! I'm Lumi 🌙</h2>
          <p className="text-gray-400">
            Ask me anything. I'm always here to help.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-5 max-w-4xl mx-auto">

          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex items-end gap-3 ${
                message.sender === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              {/* Lumi Avatar */}
              {message.sender === "lumi" && (
                <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center flex-shrink-0">
                  🌙
                </div>
              )}

              {/* Message Bubble */}
              <div
                className={`px-5 py-3 rounded-2xl max-w-[70%] break-words whitespace-pre-wrap ${
                  message.sender === "user"
                    ? "bg-violet-500 text-white rounded-br-md"
                    : "bg-[#1A2035] text-white rounded-bl-md"
                }`}
              >
                <ReactMarkdown>
                  {message.text}
                </ReactMarkdown>
              </div>

              {/* User Avatar */}
              {message.sender === "user" && (
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                  👤
                </div>
              )}
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex items-end gap-3">

              <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center">
                🌙
              </div>

              <div className="bg-[#1A2035] rounded-2xl rounded-bl-md px-5 py-4 flex gap-2">

                <span className="w-2 h-2 rounded-full bg-gray-300 animate-bounce"></span>

                <span
                  className="w-2 h-2 rounded-full bg-gray-300 animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></span>

                <span
                  className="w-2 h-2 rounded-full bg-gray-300 animate-bounce"
                  style={{ animationDelay: "0.4s" }}
                ></span>

              </div>

            </div>
          )}

          <div ref={bottomRef} />

        </div>
      )}
    </div>
  );
}

export default ChatMessages;