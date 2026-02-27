import React from "react";

const TechComparison = () => {
    const comparisonData = [
        {
            feature: "Potência Máxima",
            thunderX: "210 kW / 286 HP",
            competitors: "65-85 kW",
            advantage: "+247%"
        },
        {
            feature: "0-100 km/h",
            thunderX: "2.1s",
            competitors: "3.5-4.0s",
            advantage: "+66% mais rápida"
        },
        {
            feature: "Autonomia",
            thunderX: "420 km",
            competitors: "250-350 km",
            advantage: "+40%"
        },
        {
            feature: "Tempo de Recarga",
            thunderX: "15 minutos (80%)",
            competitors: "40-60 minutos",
            advantage: "230% mais rápido"
        },
        {
            feature: "Peso",
            thunderX: "185 kg",
            competitors: "220-250 kg",
            advantage: "20% mais leve"
        }
    ];

    return (
        <div className="rounded-2xl border border-[#4a3635] bg-[#3d2b2a]/30 p-8">
            <h3 className="mb-2 text-3xl font-bold">
                Superioridade Tecnológica
            </h3>
            <p className="mb-8 text-gray-400">
                Comparação com motos esportivas convencionais
            </p>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-[#4a3635]">
                            <th className="text-muted font-muted px-2 py-4 text-left">
                                Característica
                            </th>
                            <th className="text-text-primary px-2 py-4 text-left font-bold">
                                Ignition Δ
                            </th>
                            <th className="text-muted px-2 py-4 text-left font-medium">
                                Concorrentes
                            </th>
                            <th className="text-primary-green px-2 py-4 text-left font-bold">
                                Vantagem
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {comparisonData.map((item, index) => (
                            <tr
                                key={index}
                                className="border-b border-[#4a3635]/50 transition-colors hover:bg-white/5"
                            >
                                <td className="px-2 py-4 font-medium text-white">
                                    {item.feature}
                                </td>
                                <td className="text-text-secondary px-2 py-4 font-semibold">
                                    {item.thunderX}
                                </td>
                                <td className="px-2 py-4 text-gray-400">
                                    {item.competitors}
                                </td>
                                <td className="px-2 py-4">
                                    <span className="bg-primary-green/20 text-primary-green inline-block rounded-full px-3 py-1 text-center text-sm font-semibold">
                                        {item.advantage}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TechComparison;
