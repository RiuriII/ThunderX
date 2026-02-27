"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface FeatureHighlightProps {
    title: string;
    description: string;
    image?: string;
    index: number;
}

const FeatureHighlight = ({
    title,
    description,
    image,
    index,
}: FeatureHighlightProps) => {
    return (
        <motion.div
            className="group relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.5,
                delay: index * 0.1, // Each card appears with progressive delay
                ease: "easeOut",
            }}
            whileHover={{ y: -16 }}
        >
            <div className="group relative">
                <div className="from-primary to-accent absolute -inset-1 rounded-xl bg-linear-to-r opacity-0 blur transition duration-500 group-hover:opacity-10" />

                <div className="hover:border-primary/30 bg-surface relative rounded-xl border border-[#4a3635] p-6 transition-all duration-300">
                    <div className="flex items-start gap-4">
                        <div className="shrink-0">
                            <div className="from-primary/20 to-primary/10 flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br">
                                <span className="text-accent text-xl font-bold">
                                    {index + 1}
                                </span>
                            </div>
                        </div>

                        <div>
                            <h4 className="mb-2 text-lg font-semibold text-white">
                                {title}
                            </h4>
                            <p className="text-sm text-gray-400">
                                {description}
                            </p>
                        </div>
                    </div>

                    {image && (
                        <div className="from-primary/10 mt-4 aspect-video overflow-hidden rounded-lg bg-linear-to-br to-transparent">
                            <Image
                                src={image}
                                alt={title}
                                className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                                width={0}
                                height={0}
                                sizes="100vw"
                                priority={false}
                            />
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default FeatureHighlight;
