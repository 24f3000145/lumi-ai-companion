import Greeting from "../components/Greeting";
import Hero from "../components/Hero";
import StartButton from "../components/StartButton";
function LandingPage({ onStart }) {
    const hour = new Date().getHours();

    let greeting = "";
    let emoji = "";

    if (hour >= 5 && hour < 12) {
        greeting = "Good Morning";
        emoji = "☀️";
    } else if (hour >= 12 && hour < 17) {
        greeting = "Good Afternoon";
        emoji = "🌤";
    } else if (hour >= 17 && hour < 21) {
        greeting = "Good Evening";
        emoji = "🌇";
    } else {
        greeting = "You're awake too. It's late!";
        emoji = "🌙";
    }
    return (
        <main className="min-h-screen bg-[#0B1020] text-white flex items-center justify-center px-6">
        <div className="text-center max-w-xl">

            <Greeting
            greeting={greeting}
            emoji={emoji}
            />

        <Hero />

            <StartButton onClick={onStart} />

        </div>
        </main>
    );
}

export default LandingPage;