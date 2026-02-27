"use client";
import React from "react";
import { motion } from "framer-motion";

interface TechSpecsCardProps {
    title: string;
    description: string;
    value: string;
    icon: string;
    index: number;
}

const TechSpecsCard = ({
    title,
    description,
    value,
    icon,
    index,
}: TechSpecsCardProps) => {
    return (
        <motion.div
            className="group relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.5,
                delay: index * 0.1, // Each card appears with progressive delay
                ease: "easeOut",
            }}
            whileHover={{ y: -16 }}
        >
            <div className="group border-surface-soft/60 hover:border-accent/50 hover:bg-background relative rounded-xl border border-[#4a3635] bg-[#26201f]/70 p-6 transition-all duration-300 hover:scale-[1.02]">
                <div className="absolute top-4 right-4 text-2xl opacity-20 transition-opacity group-hover:opacity-40">
                    {icon}
                </div>

                <div className="mb-4">
                    <div className="mb-2 text-sm font-semibold tracking-wider text-[#f4f4f5] uppercase">
                        {title}
                    </div>
                    <p className="text-text-muted text-sm">{description}</p>
                </div>

                <div className="border-t border-[#4a3635] pt-4">
                    <div className="text-2xl font-bold text-white">{value}</div>
                </div>
            </div>
        </motion.div>
    );
};

export default TechSpecsCard;
