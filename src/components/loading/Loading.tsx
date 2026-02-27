"use client";

export const Loading = () => {
    return (
        <div className="bg-background/95 fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
            <div className="relative flex flex-col items-center gap-6">
                {/* Title with glow effect using primary color */}
                <h1 className="text-primary animate-[flicker_2.5s_infinite] text-[2.5rem] font-bold tracking-[0.35em] uppercase drop-shadow-[0_0_8px_rgba(166,17,3,0.6)] md:text-[3rem]">
                    THUNDER<span className="text-accent">X</span>
                </h1>

                {/* Progress bar with theme gradient */}
                <div className="relative h-2 w-64 overflow-hidden rounded-full border border-[#4a3635] bg-[#3d2b2a]">
                    <div className="via-primary absolute inset-0 animate-[scan_1.4s_linear_infinite] bg-linear-to-r from-transparent to-transparent" />
                    <div className="from-primary/20 via-accent/10 to-primary/20 absolute inset-0 animate-[pulse_2s_ease-in-out_infinite] bg-linear-to-r" />
                </div>

                {/* Secondary text with softer color */}
                <p className="animate-pulse text-xs tracking-widest text-[#cbd5e1] opacity-80">
                    SYSTEM BOOT SEQUENCE
                </p>

                {/* Visual effects */}
                <div className="pointer-events-none absolute inset-0 animate-[scanlines_6s_linear_infinite] bg-[linear-gradient(rgba(166,17,3,0.05)_1px,transparent_1px)] bg-size-[100%_3px]" />

                {/* Particle/glow effect */}
                <div className="bg-primary/10 absolute -z-10 h-48 w-48 animate-pulse rounded-full blur-xl" />

                {/* Glow dots */}
                <div className="bg-accent/50 absolute -top-4 left-8 h-2 w-2 animate-ping rounded-full" />
                <div className="bg-accent/50 absolute right-8 -bottom-4 h-2 w-2 animate-ping rounded-full delay-300" />
            </div>

            <style jsx>{`
                @keyframes flicker {
                    0%,
                    100% {
                        opacity: 1;
                        text-shadow:
                            0 0 10px rgba(166, 17, 3, 0.8),
                            0 0 20px rgba(166, 17, 3, 0.4);
                    }
                    5% {
                        opacity: 0.4;
                        text-shadow:
                            0 0 5px rgba(166, 17, 3, 0.4),
                            0 0 10px rgba(166, 17, 3, 0.2);
                    }
                    10% {
                        opacity: 1;
                        text-shadow:
                            0 0 15px rgba(166, 17, 3, 1),
                            0 0 30px rgba(166, 17, 3, 0.6);
                    }
                    15% {
                        opacity: 0.3;
                        text-shadow: 0 0 3px rgba(166, 17, 3, 0.3);
                    }
                    20% {
                        opacity: 1;
                        text-shadow:
                            0 0 12px rgba(166, 17, 3, 0.9),
                            0 0 25px rgba(166, 17, 3, 0.5),
                            0 0 35px rgba(166, 17, 3, 0.3);
                    }
                }

                @keyframes scan {
                    0% {
                        transform: translateX(-100%) skewX(-15deg);
                    }
                    100% {
                        transform: translateX(100%) skewX(-15deg);
                    }
                }

                @keyframes scanlines {
                    0% {
                        background-position: 0 0;
                    }
                    100% {
                        background-position: 0 100%;
                    }
                }

                @keyframes pulse {
                    0%,
                    100% {
                        opacity: 0.3;
                    }
                    50% {
                        opacity: 0.6;
                    }
                }

                /* Efeito de "glitch" sutil */
                @keyframes glitch {
                    0% {
                        transform: translate(0);
                    }
                    20% {
                        transform: translate(-1px, 1px);
                    }
                    40% {
                        transform: translate(-1px, -1px);
                    }
                    60% {
                        transform: translate(1px, 1px);
                    }
                    80% {
                        transform: translate(1px, -1px);
                    }
                    100% {
                        transform: translate(0);
                    }
                }
            `}</style>
        </div>
    );
};
