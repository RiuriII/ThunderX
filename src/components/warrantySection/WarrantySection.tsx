"use client";
import React from "react";
import { Shield, Clock, Wrench, Zap, CheckCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";

const WarrantySection = () => {
    const warrantyFeatures = [
        {
            icon: Shield,
            title: "Garantia Estendida",
            description: "5 anos ou 100.000 km",
            details:
                "Cobertura total para motor criogênico e componentes eletrônicos",
            color: "text-blue-400",
        },
        {
            icon: Zap,
            title: "Motor Supercondutor",
            description: "Garantia vitalícia",
            details:
                "Substituição completa em caso de falha do sistema criogênico",
            color: "text-purple-400",
        },
        {
            icon: Wrench,
            title: "Manutenção Premium",
            description: "3 anos inclusos",
            details:
                "Revisões programadas sem custo em rede autorizada ThunderX",
            color: "text-orange-400",
        },
        {
            icon: Clock,
            title: "Assistência 24/7",
            description: "Suporte ilimitado",
            details:
                "Guincho especializado e atendimento técnico em todo território nacional",
            color: "text-green-400",
        },
    ];

    const coverageItems = [
        "Sistema criogênico completo",
        "Bateria de alta performance",
        "Eletrônica embarcada e IA",
        "Quadro cerâmico estrutural",
        "Suspensão ativa adaptativa",
        "Sistema de freios ABS+",
        "Sensores LIDAR e radar",
        "Software e atualizações OTA",
    ];

    return (
        <section id="warranty" className="bg-background py-20 text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-16 text-center">
                    <div className="mb-4 inline-flex items-center gap-2">
                        <div className="primary h-1 w-12 bg-current" />
                        <span className="primary text-sm font-semibold tracking-wider uppercase">
                            Proteção que Acompanha Sua Jornada
                        </span>
                        <div className="primary h-1 w-12 bg-current" />
                    </div>

                    <h2 className="mb-4 text-4xl font-bold md:text-5xl">
                        Garantia e Proteção Total
                    </h2>

                    <p className="mx-auto max-w-3xl text-xl text-gray-400">
                        Tecnologia de ponta merece uma garantia à altura.
                        Proteja seu investimento com a cobertura mais completa
                        do mercado.
                    </p>
                </div>

                {/* Main Warranty Features */}
                <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {warrantyFeatures.map((feature, index) => (
                        <motion.div
                            className="group relative"
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1, // Each card appears with a progressive delay
                                ease: "easeOut",
                            }}
                            whileHover={{ y: -16 }}
                            key={index}
                        >
                            <div
                                key={index}
                                className="group hover:border-primary/50 hover:shadow-primary/20 relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-lg"
                            >
                                <div className="mb-4">
                                    <feature.icon
                                        className={`h-12 w-12 ${feature.color}`}
                                        strokeWidth={1.5}
                                    />
                                </div>
                                <h3 className="mb-2 text-xl font-bold">
                                    {feature.title}
                                </h3>
                                <p className="text-text-primary mb-3 text-2xl font-bold">
                                    {feature.description}
                                </p>
                                <p className="text-sm text-gray-400">
                                    {feature.details}
                                </p>

                                {/* Hover Effect */}
                                <div className="from-primary/0 to-primary/0 group-hover:from-primary/5 absolute inset-0 -z-10 bg-linear-to-br transition-all duration-300 group-hover:to-purple-500/5" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Coverage Details */}
                <div className="mb-16 grid gap-8 lg:grid-cols-2">
                    {/* What's Covered */}
                    <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-8 backdrop-blur-sm">
                        <div className="mb-6 flex items-center gap-3">
                            <Shield className="text-primary-green h-8 w-8" />
                            <h3 className="text-2xl font-bold">
                                Cobertura Completa
                            </h3>
                        </div>
                        <div className="grid gap-3">
                            {coverageItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3"
                                >
                                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-green-400" />
                                    <span className="text-gray-300">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Additional Benefits */}
                    <div className="from-primary/10 rounded-2xl border border-gray-800 bg-linear-to-br to-purple-500/5 p-8 backdrop-blur-sm">
                        <div className="mb-6">
                            <h3 className="mb-2 text-2xl font-bold">
                                Benefícios Exclusivos
                            </h3>
                            <p className="text-text-secondary">
                                Vantagens para proprietários ThunderX
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-primary-green mb-2 font-semibold">
                                    Atualizações OTA Vitalícias
                                </h4>
                                <p className="text-sm text-gray-400">
                                    Novos recursos e melhorias de performance
                                    via software, sem custo adicional
                                </p>
                            </div>

                            <div>
                                <h4 className="text-primary-green mb-2 font-semibold">
                                    Moto Reserva Premium
                                </h4>
                                <p className="text-sm text-gray-400">
                                    Durante manutenções ou reparos, utilize uma
                                    ThunderX equivalente gratuitamente
                                </p>
                            </div>

                            <div>
                                <h4 className="text-primary-green mb-2 font-semibold">
                                    Programa de Proteção Cerâmica
                                </h4>
                                <p className="text-sm text-gray-400">
                                    Reparo especializado do quadro cerâmico em
                                    caso de danos acidentais
                                </p>
                            </div>

                            <div>
                                <h4 className="text-primary-green mb-2 font-semibold">
                                    Clube de Proprietários
                                </h4>
                                <p className="text-sm text-gray-400">
                                    Acesso a eventos exclusivos, test rides de
                                    novos modelos e descontos em acessórios
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Banner */}
                <div className="border-primary/20 from-primary/10 relative overflow-hidden rounded-2xl border bg-linear-to-r to-purple-500/10 p-8">
                    <div className="relative z-10 text-center">
                        <Phone className="text-text-primary mx-auto mb-4 h-12 w-12" />
                        <h3 className="mb-4 text-3xl font-bold">
                            Dúvidas sobre a garantia?
                        </h3>
                        <p className="mx-auto mb-6 max-w-2xl text-gray-300">
                            Nossa equipe especializada está pronta para
                            esclarecer todos os detalhes da cobertura ThunderX
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="bg-primary-green hover:shadow-primary-green/30 cursor-pointer rounded-lg bg-linear-to-r px-8 py-3 font-semibold text-white transition-all duration-300 hover:shadow-lg">
                                Falar com Especialista
                            </button>
                            <button className="border-accent/50 text-accent hover:border-accent hover:bg-accent/10 cursor-pointer rounded-lg border-2 px-8 py-3 font-semibold transition-all duration-300">
                                Baixar Manual Completo
                            </button>
                        </div>
                    </div>

                    {/* Background decoration */}
                    <div className="from-primary/5 absolute top-0 right-0 h-full w-1/3 bg-linear-to-l to-transparent" />
                </div>
            </div>
        </section>
    );
};

export default WarrantySection;
