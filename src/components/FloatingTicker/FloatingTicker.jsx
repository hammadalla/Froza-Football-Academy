import { useState } from "react";
import "./FloatingTicker.css";

export default function FloatingTicker() {
    const messages = [
        "🎯 Spots filling fast for Summer Programs!   ",
        "⏰ Enrollment closes in 7 days — Secure your spot today!   ",
        "🚀 New workshops launching this weekend!   ",
        "🔥 Limited seats for Advanced Training!   ",
        "💡 New tips every week!   ",
    ];

    const tickerText = messages.join(" • ") + " • " + messages.join(" • ");

    return (
        <div className="ticker-bar">
            <div className="ticker-slide">
                {tickerText}
            </div>
        </div>
    );
}
