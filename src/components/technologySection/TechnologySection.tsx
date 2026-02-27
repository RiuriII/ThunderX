"use client";
import React from "react";
import Image from "next/image";

import TechSpecsCard from "./TechSpecsCard";
import FeatureHighlight from "./FeatureHighlight";
import TechComparison from "./TechComparison";

const TechnologySection = () => {
    const specs = {
        engine: {
            title: "Motor Criogênico Supercondutor",
            description:
                "Nosso motor opera em baixa temperatura com eficiência de 98,5%, entregando potência máxima constante em toda a faixa de rotação.",
            value: "210 kW / 18.500 RPM",
            icon: "⚡",
        },
        speed: {
            title: "Velocidade Máxima",
            description:
                "Capacidade de atingir 360 km/h com estabilidade total assistida por IA.",
            value: "360 km/h",
            icon: "🚀",
        },
        frame: {
            title: "Quadro Cerâmico",
            description:
                "Estrutura composta por cerâmica avançada, 3x mais resistente que aço e 70% mais leve.",
            value: "Ceramic Box Frame",
            icon: "🛡️",
        },
        brakes: {
            title: "Sistema de Freios",
            description:
                "ABS adaptativo com vetorização de frenagem e regeneração energética em alta velocidade.",
            value: "ABS Adaptativo",
            icon: "⏹️",
        },
    };

    const features = [
        {
            title: "Navegação Automática",
            description:
                "Sistema IA que aprende rotas preferidas e otimiza trajetos em tempo real.",
            image: "/tech/auto-nav.webp",
        },
        {
            title: "Radar Frontal 360°",
            description:
                "Sensores LIDAR que mapeiam o ambiente até 200 metros à frente.",
            image: "/tech/radar.webp",
        },
        {
            title: "Modo de Pilotagem RACE+",
            description:
                "Perfil extremo que libera potência total, reduz assistências e recalibra suspensão, freios e resposta do motor para máxima performance.",
            image: "/tech/race-mode.webp",
        },
        {
            title: "Suspensão Ativa",
            description:
                "Ajusta automaticamente conforme terreno e estilo de pilotagem.",
            image: "/tech/suspension.webp",
        },
    ];

    return (
        <section id="technology" className="bg-background py-20 text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <div className="mb-4 inline-flex items-center gap-2">
                        <div className={`primary h-1 w-12 bg-current`} />
                        <span
                            className={`primary text-sm font-semibold tracking-wider uppercase`}
                        >
                            IGNITION Δ
                        </span>
                        <div className={`primary h-1 w-12 bg-current`} />
                    </div>

                    <h2 className="mb-4 text-4xl font-bold md:text-5xl">
                        Tecnologia Revolucionária
                    </h2>

                    <p className="mx-auto max-w-3xl text-xl text-gray-400">
                        O futuro sobre duas rodas
                    </p>
                </div>

                {/* Bike hero */}
                <div className="relative mb-20">
                    <div className="from-primary/20 absolute inset-0 rounded-3xl bg-linear-to-r to-transparent" />
                    <div className="relative z-10 grid items-center gap-12 px-6 py-4 lg:grid-cols-2">
                        <div>
                            <h3 className="mb-4 text-4xl font-bold">
                                THUNDER<span className="text-primary">X</span>{" "}
                                IGNITION Δ EDITION
                            </h3>
                            <p className="mb-6 text-lg text-gray-300">
                                Inspirada na lendária moto de Kaneda, a ThunderX
                                Ignition Δ Edition redefine os limites da
                                engenharia motociclística com tecnologia que
                                parecia ficção científica.
                            </p>
                            <div className="flex gap-4">
                                <button className="bg-primary hover:bg-primary/90 cursor-pointer rounded-lg px-8 py-3 font-semibold text-white transition-colors">
                                    Especificações Técnicas
                                </button>
                                <button className="border-accent text-accent hover:bg-accent/10 cursor-pointer rounded-lg border-2 px-8 py-3 font-semibold transition-colors">
                                    Agendar Test Ride
                                </button>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="from-primary/10 to-primary/30 flex aspect-square items-center justify-center overflow-hidden rounded-full bg-linear-to-br">
                                <Image
                                    src="/tech/bike.webp"
                                    alt="Bike"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="w-full"
                                    priority={false}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main specs */}
                <div className="mb-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {Object.entries(specs).map(([key, spec], index) => (
                        <TechSpecsCard key={key} {...spec} index={index} />
                    ))}
                </div>

                {/* Technology highlights */}
                <div className="mb-20">
                    <h3 className="mb-12 text-center text-3xl font-bold">
                        Diferenciais Tecnológicos
                    </h3>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {features.map((feature, index) => (
                            <FeatureHighlight
                                key={index}
                                {...feature}
                                index={index}
                            />
                        ))}
                    </div>
                </div>

                {/* Technology comparison */}
                <TechComparison />

                {/* Call to Action */}
                <div className="from-primary/10 to-primary/5 border-primary/20 mt-20 rounded-2xl border bg-linear-to-r p-8 text-center">
                    <h3 className="mb-4 text-3xl font-bold">
                        Experimente o Futuro
                    </h3>
                    <p className="mx-auto mb-8 max-w-2xl text-gray-300">
                        Agende um test ride exclusivo e sinta a potência da
                        tecnologia supercondutora.
                    </p>
                    <button className="from-primary to-primary/80 hover:shadow-primary/20 rounded-lg bg-linear-to-r px-10 py-4 font-bold text-white transition-all duration-300 hover:shadow-xl">
                        AGENDAR TEST RIDE
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TechnologySection;
