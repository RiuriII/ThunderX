// components/PortfolioLink.tsx
"use client";
import React, { useState, useEffect } from "react";
import { Code, X } from "lucide-react";

const PortfolioLink = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        // Appears after 3 seconds
        const timer = setTimeout(() => setIsVisible(true), 3000);
        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed right-6 bottom-6 z-50">
            <div className="group relative">
                {/* Tooltip */}
                <div
                    className={`absolute right-0 bottom-full mb-3 transition-all duration-300 ${
                        isHovered
                            ? "translate-y-0 opacity-100"
                            : "pointer-events-none translate-y-2 opacity-0"
                    }`}
                >
                    <div className="border-primary/30 rounded-lg border bg-[#3d2b2a] px-4 py-2 text-sm whitespace-nowrap text-white">
                        🔥 Desenvolvido por Riuri
                        <div className="border-primary/30 absolute -bottom-1 left-6 h-2 w-2 rotate-45 border-r border-b bg-[#3d2b2a]" />
                    </div>
                </div>

                {/* Main Button */}
                <a
                    href="https://riuridev.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="from-primary to-primary/80 hover:shadow-primary/30 flex items-center gap-3 rounded-full bg-linear-to-r px-5 py-3 text-white shadow-xl transition-all duration-300 hover:scale-105"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <Code size={20} />
                    <span className="font-semibold">riuridev.com</span>
                </a>
            </div>
        </div>
    );
};

export default PortfolioLink;
