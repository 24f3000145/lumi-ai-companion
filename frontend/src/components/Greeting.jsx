function Greeting({ greeting, emoji }) {
  return (
    <>
      <div className="text-7xl mb-8">
        {emoji}
      </div>

      <h2 className="text-2xl text-gray-400 mb-3">
        {greeting}
      </h2>
    </>
  );
}

export default Greeting;