import { useState } from "react";

export default function LoveSuccess() {
    const [openModal, setOpenModal] = useState(null);

    const plans = [
        { id: 1, title: "Home Date", emoji: "🏠", desc: "Lights Off, Movies, subbu time." },
        { id: 2, title: "Dinner Outside", emoji: "🍽️", desc: "Biriyani with subbuuu." },
        { id: 3, title: "Cleaning and Chicken Curry", emoji: "🛣️", desc: "Clean, Eat, Sleep." },
        { id: 4, title: "Evening Park", emoji: "🌅", desc: "Walking, Running, Sheke Sheke time and bath togeather." }
    ];

    const selectedPlan = plans.find(p => p.id === openModal);

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center 
                        bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900 
                        relative overflow-hidden px-4 text-white">

            {/* Background glow */}
            <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[140px] rounded-full top-[-100px] left-[-100px] pointer-events-none" />
            <div className="absolute w-[400px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full bottom-[-100px] right-[-100px] pointer-events-none" />

            {/* Title */}
            <h1 className="text-4xl sm:text-6xl font-bold text-cyan-400 mb-4 text-center drop-shadow-[0_0_20px_rgba(0,200,255,0.8)] z-10">
                Subbu… what’s our Valentine’s plan?
            </h1>

            <p className="text-gray-300 mb-10 text-center z-10">
                Choose one and get 3 free, Subbu.
            </p>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl w-full z-10">
                {plans.map(plan => (
                    <div
                        key={plan.id}
                        onClick={() => setOpenModal(plan.id)}
                        className="cursor-pointer group bg-white/5 backdrop-blur-xl p-6 rounded-3xl border border-white/10 
                                   shadow-[0_10px_40px_rgba(0,0,0,0.6)] hover:scale-105 
                                   hover:shadow-[0_0_40px_rgba(0,200,255,0.4)] transition duration-300"
                    >
                        <div className="text-4xl mb-3 group-hover:scale-125 transition">{plan.emoji}</div>
                        <h2 className="text-xl font-semibold text-cyan-400 mb-2">{plan.title}</h2>
                        <p className="text-gray-400">{plan.desc}</p>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedPlan && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
                    <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-cyan-400/20 rounded-3xl p-8 max-w-md w-full text-center 
                                    shadow-[0_0_60px_rgba(0,200,255,0.4)] relative">

                        <button
                            onClick={() => setOpenModal(null)}
                            className="absolute top-3 right-4 text-gray-400 text-xl hover:text-white"
                        >
                            ✕
                        </button>

                        <h2 className="text-2xl font-bold text-cyan-400 mb-3">
                            {selectedPlan.title} {selectedPlan.emoji}
                        </h2>

                        <p className="text-gray-300">
                            {selectedPlan.desc}
                        </p>

                    </div>
                </div>
            )}
        </div>
    );
}