import { useState } from "react";
function ChatInput({ onSend }) {
    const [text, setText] = useState("");
  return (

    <div className="border-t border-gray-800 p-5 flex gap-3">

      <input
        className="flex-1 rounded-full bg-[#1A2035] px-5 py-4 outline-none"
        placeholder="Message Lumi..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
            if (e.key === "Enter" && text.trim() !== "") {
            onSend(text);
            setText("");
            }
        }}
        />

      <button
        onClick={() => {
            if (text.trim() === "") return;

            onSend(text);
            setText("");
            }}
        className="bg-violet-400 text-black px-6 rounded-full font-semibold"
    >
        Send
    </button>

    </div>

  );
}

export default ChatInput;