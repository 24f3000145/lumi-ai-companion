function ChatHeader({ onClear }) {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-gray-800">

      <div>
        <h1 className="text-2xl font-bold flex items-center gap-2">
          🌙 Lumi
        </h1>

        <p className="text-gray-400 text-sm">
          Your AI Companion
        </p>
      </div>

      <button
        onClick={onClear}
        className="px-4 py-2 rounded-xl bg-red-500/20 hover:bg-red-500/30 text-red-300 transition"
      >
        🗑 Clear Chat
      </button>

    </header>
  );
}

export default ChatHeader;