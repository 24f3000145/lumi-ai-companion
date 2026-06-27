import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import ChatPage from "./pages/ChatPage";

function App() {

  const [currentPage, setCurrentPage] = useState("landing");

  if (currentPage === "landing") {
    return (
      <LandingPage
        onStart={() => setCurrentPage("chat")}
      />
    );
  }

  return <ChatPage />;
}

export default App;