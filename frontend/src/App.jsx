function App() {
  return (
    <main className="min-h-screen bg-[#0B1020] text-white flex items-center justify-center px-6">
      <div className="text-center max-w-xl">

        <div className="text-7xl mb-8">
          🌙
        </div>

        <h2 className="text-2xl text-gray-300 mb-3">
          Good Morning
        </h2>

        <h1 className="text-6xl font-bold mb-6">
          Hi, I'm Lumi.
        </h1>

        <p className="text-xl text-gray-400 mb-10">
          It's nice to meet you.
        </p>

        <button
          className="
          bg-violet-400
          hover:bg-violet-300
          text-black
          px-8
          py-4
          rounded-full
          text-lg
          font-semibold
          transition
          duration-300
          "
        >
          Start Chatting
        </button>

      </div>
    </main>
  );
}

export default App;