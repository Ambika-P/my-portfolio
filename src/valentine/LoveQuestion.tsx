import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LoveQuestion() {
    const navigate = useNavigate();

    const [noPosition, setNoPosition] = useState({ top: "64%", left: "36%" });
    const [noTextIndex, setNoTextIndex] = useState(0);

    const noTexts = [
        "No 😝", "Think again Subbu 🤨", "Don’t do this 😭",
        "Are you sure Subbu? 😏", "Wrong choice mister 😜",
        "Press YES Subbu 😉", "System error 🚫",
        "Button not working 😂", "Access denied ❌",
        "Nice try Subbu 😎", "Mission failed 😆",
        "Love loading… 💭"
    ];

    const moveNoButton = () => {
        const randomTop = Math.floor(Math.random() * 80);
        const randomLeft = Math.floor(Math.random() * 80);

        setNoPosition({ top: randomTop + "%", left: randomLeft + "%" });
        setNoTextIndex(prev => (prev + 1) % noTexts.length);
    };

    const [hearts, setHearts] = useState([]);
    useEffect(() => {
        const heartSymbols = ["💖", "💘", "💕", "💞", "💗", "💓"];
        const newHearts = Array.from({ length: 20 }).map(() => ({
            symbol: heartSymbols[Math.floor(Math.random() * heartSymbols.length)],
            size: Math.floor(Math.random() * 4 + 5) + "xl",
            top: Math.floor(Math.random() * 100) + "%",
            left: Math.floor(Math.random() * 100) + "%",
            animation: `float${Math.floor(Math.random() * 4) + 1}`,
        }));
        setHearts(newHearts);
    }, []);

    const [fallingHearts, setFallingHearts] = useState([]);
    useEffect(() => {
        const heartSymbols = ["💖", "💘", "💕", "💞", "💗", "💓"];
        const interval = setInterval(() => {
            const newHeart = {
                id: Date.now(),
                symbol: heartSymbols[Math.floor(Math.random() * heartSymbols.length)],
                size: Math.floor(Math.random() * 3 + 4) + "xl",
                left: Math.floor(Math.random() * 100) + "%",
            };
            setFallingHearts(prev => [...prev, newHeart]);
            setTimeout(() => {
                setFallingHearts(prev => prev.filter(h => h.id !== newHeart.id));
            }, 5000);
        }, 800);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900 relative overflow-hidden px-4">

            {/* Neon glow background blobs */}
            <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[140px] rounded-full top-[-100px] left-[-100px]" />
            <div className="absolute w-[400px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />

            {/* Floating Hearts */}
            {hearts.map((heart, idx) => (
                <div key={idx}
                    className={`absolute opacity-5 animate-[${heart.animation}] text-${heart.size}`}
                    style={{ top: heart.top, left: heart.left }}>
                    {heart.symbol}
                </div>
            ))}

            {/* Falling Hearts */}
            {fallingHearts.map(heart => (
                <div key={heart.id}
                    className={`absolute text-${heart.size} opacity-40 animate-fall`}
                    style={{ left: heart.left, top: "-10%" }}>
                    {heart.symbol}
                </div>
            ))}

            {/* Card */}
            <div className="group text-center bg-white/5 backdrop-blur-2xl p-6 pb-14 sm:p-10 rounded-3xl border border-white/10 max-w-md w-full relative
                            shadow-[0_20px_60px_rgba(0,0,0,0.6)] hover:shadow-[0_30px_80px_rgba(0,200,255,0.25)]
                            transition duration-500">

                {/* Animated glow border */}
                <div className="absolute inset-0 rounded-3xl border border-cyan-400/10 group-hover:border-cyan-400/40 transition" />

                <h1 className="text-2xl sm:text-4xl font-bold text-cyan-400 mb-6 sm:mb-8 animate-pulse drop-shadow-[0_0_15px_rgba(0,200,255,0.6)]">
                    Oi dabba Subbu, Do you love me? 💖<br />
                    This is not a question. This is a YES confirmation screen.
                </h1>

                <button
                    onClick={() => {
                        navigate("/valentine")
                    }}
                    className="relative z-20 px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm rounded-full
                               shadow-[0_0_20px_rgba(0,200,255,0.6)] hover:scale-110
                               hover:shadow-[0_0_35px_rgba(0,200,255,1)] active:scale-95 transition mr-4">
                    YES Subbi💘
                </button>
            </div>

            {/* NO BUTTON */}
            <button
                onMouseEnter={moveNoButton}
                onClick={moveNoButton}
                style={{ position: "absolute", ...noPosition }}
                className="px-5 sm:px-6 py-2 bg-gray-800 text-gray-200 text-sm rounded-full shadow-lg border border-gray-600
                           transition-all duration-300 hover:bg-gray-700 active:scale-95">
                {noTexts[noTextIndex]}
            </button>
        </div>
    );
}