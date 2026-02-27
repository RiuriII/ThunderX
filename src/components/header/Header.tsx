"use client";
import React, { useState, useEffect, useCallback } from "react";
import { Menu, X, User, Search } from "lucide-react";
import Link from "next/link";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Scroll function with easing for better user experience
    const smoothScrollTo = (elementId: string) => {
        const element = document.getElementById(elementId);
        if (!element) return;

        const targetPosition = element.offsetTop;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const duration = 1000; // duration in ms
        let start: number | null = null;

        // easing function: easeInOutCubic
        const easeInOutCubic = (t: number) => {
            return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        };

        const animation = (currentTime: number) => {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const progress = Math.min(timeElapsed / duration, 1);
            const ease = easeInOutCubic(progress);

            window.scrollTo(0, startPosition + distance * ease);

            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        };

        requestAnimationFrame(animation);
    };

    useEffect(() => {
        let ticking = false;

        const handleScrollEvent = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const shouldBeScrolled = window.scrollY > 20;

                    setScrolled((prev) => {
                        if (prev === shouldBeScrolled) return prev;
                        return shouldBeScrolled;
                    });

                    ticking = false;
                });

                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScrollEvent);
        return () => window.removeEventListener("scroll", handleScrollEvent);
    }, []);

    // Fechar menu ao clicar em um link
    const toggleMenu = useCallback(() => {
        setIsMenuOpen((v) => !v);
    }, []);

    // Navegação
    const navItems = [
        { label: "Home", href: "#home" },
        { label: "Tecnologia", href: "#technology" },
        { label: "Garantia", href: "#warranty" },
        { label: "Contato", href: "#contact" },
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 z-50 h-20 w-full max-w-screen transition-all duration-300 ${
                    scrolled
                        ? "bg-background/95 border-b border-[#4a3635] backdrop-blur-md"
                        : "bg-primary backdrop-blur-sm"
                }`}
            >
                <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
                    <div className="flex h-20 items-center justify-between transition-all duration-300">
                        {/* Logo */}
                        <div className="flex items-center">
                            <button
                                onClick={() => smoothScrollTo("home")}
                                className="group flex items-center gap-3.5"
                            >
                                <div className="relative">
                                    <div className="bg-primary flex h-10 w-10 items-center justify-center rounded-full">
                                        <span className="text-xl font-black text-white">
                                            TX
                                        </span>
                                    </div>
                                    <div className="border-primary/30 group-hover:border-primary/50 absolute -inset-2 rounded-full border-2 transition-all duration-500" />
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <span className="text-xl font-bold tracking-tight text-white">
                                        THUNDER
                                    </span>
                                    <span
                                        className={`text-xl font-black tracking-tighter transition-colors duration-300 ${
                                            scrolled
                                                ? "text-primary"
                                                : "text-text-primary"
                                        }`}
                                    >
                                        X
                                    </span>
                                </div>
                            </button>
                        </div>

                        {/* Navegação Desktop */}
                        <nav className="hidden items-center space-x-1 lg:flex">
                            {navItems.map((item) => (
                                <button
                                    onClick={() =>
                                        smoothScrollTo(item.href.substring(1))
                                    }
                                    key={item.label}
                                    className="group relative rounded-lg px-4 py-2 text-gray-300 transition-all duration-300 hover:bg-white/5 hover:text-white"
                                >
                                    {item.label}
                                    <span className="bg-primary absolute bottom-1 left-1/2 h-0.5 w-0 transition-all duration-300 group-hover:left-[10%] group-hover:w-4/5" />
                                </button>
                            ))}
                        </nav>

                        {/* Ações Desktop */}
                        <div className="hidden items-center gap-4 lg:flex">
                            <button className="rounded-lg p-2 text-gray-300 transition-colors hover:bg-white/5 hover:text-white">
                                <Search size={20} />
                            </button>
                            <button className="rounded-lg p-2 text-gray-300 transition-colors hover:bg-white/5 hover:text-white">
                                <User size={20} />
                            </button>

                            <Link
                                href="/buy"
                                className="from-primary to-primary/80 hover:shadow-primary/20 ml-4 rounded-lg bg-linear-to-r px-6 py-2.5 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
                            >
                                COMPRAR
                            </Link>
                        </div>

                        {/* Botão Mobile */}
                        <div className="flex items-center gap-4 lg:hidden">
                            <button
                                onClick={toggleMenu}
                                className="p-2 text-gray-300 transition-colors hover:text-white"
                                aria-label="Toggle menu"
                            >
                                {isMenuOpen ? (
                                    <X size={24} />
                                ) : (
                                    <Menu size={24} />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Menu Mobile Overlay */}
            <div
                className={`fixed inset-0 z-40 transition-all duration-300 ease-in-out lg:hidden ${
                    isMenuOpen ? "visible opacity-100" : "invisible opacity-0"
                } ${scrolled ? "top-20" : "top-24"}`}
            >
                {/* Backdrop */}
                <div
                    className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                        isMenuOpen ? "opacity-50" : "opacity-0"
                    }`}
                    onClick={toggleMenu}
                />

                {/* Menu Slide-in */}
                <div
                    className={`bg-background absolute top-0 right-0 h-full w-80 transform border-l border-[#4a3635] transition-transform duration-300 ease-in-out ${
                        isMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                >
                    <div className="flex h-full flex-col p-6">
                        {/* Logo Mobile */}
                        <div className="border-b border-[#4a3635] pb-6">
                            <div className="flex items-center gap-3">
                                <div className="bg-primary flex h-12 w-12 items-center justify-center rounded-full">
                                    <span className="text-2xl font-black text-white">
                                        TX
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-2xl font-bold text-white">
                                        THUNDER
                                    </span>
                                    <span className="text-primary -mt-2 text-2xl font-black">
                                        X
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="overflow-y-auto">
                            {/* Navegação Mobile */}
                            <nav className="flex-1 py-8">
                                <ul className="space-y-1">
                                    {navItems.map((item) => (
                                        <li key={item.label}>
                                            <button
                                                onClick={() => {
                                                    smoothScrollTo(
                                                        item.href.substring(1)
                                                    );
                                                    toggleMenu();
                                                }}
                                                className="group flex w-full items-center gap-3 rounded-lg px-4 py-3 text-gray-300 transition-all duration-300 hover:bg-white/5 hover:text-white"
                                            >
                                                <span className="bg-primary h-8 w-1 scale-y-0 transform rounded-full transition-transform duration-300 group-hover:scale-y-100" />
                                                <span className="text-lg font-medium">
                                                    {item.label}
                                                </span>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                            {/* Ações Mobile */}
                            <div className="space-y-4 border-t border-[#4a3635] pt-6">
                                <div className="flex gap-4">
                                    <button className="flex flex-1 items-center justify-center gap-2 rounded-lg p-3 text-gray-300 transition-colors hover:bg-white/5 hover:text-white">
                                        <User size={20} />
                                        <span>Conta</span>
                                    </button>
                                    <button className="flex flex-1 items-center justify-center gap-2 rounded-lg p-3 text-gray-300 transition-colors hover:bg-white/5 hover:text-white">
                                        <Search size={20} />
                                        <span>Buscar</span>
                                    </button>
                                </div>
                                <Link
                                    href="/buy"
                                    onClick={toggleMenu}
                                    className="from-primary to-primary/80 hover:shadow-primary/20 block w-full rounded-lg bg-linear-to-r py-3.5 text-center font-semibold text-white transition-all duration-300 hover:shadow-lg"
                                >
                                    COMPRAR AGORA
                                </Link>
                                {/* Contato Mobile */}
                                <div className="pt-4 text-center">
                                    <p className="text-sm text-gray-400">
                                        Precisa de ajuda?
                                    </p>
                                    <a
                                        href="tel:+551199999999"
                                        className="font-semibold text-white hover:underline"
                                    >
                                        +55 (11) 9999-9999
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
