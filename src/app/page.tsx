import { Ignition } from "@/components/models/Ignition";
import RenderModel from "@/components/renderModel/RenderModel";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import TechnologySection from "@/components/technologySection/TechnologySection";
import ContactSection from "@/components/contactSection/ContactSection";
import WarrantySection from "@/components/warrantySection/WarrantySection";

export default function Home() {
    return (
        <>
            <Header />
            <div
                id="home"
                className="bg-primary relative h-screen w-full overflow-hidden overflow-x-hidden lg:min-h-[calc(100vh-6rem)]"
            >
                {/* TEXTO GRANDE POR TRÁS */}
                <h1
                    className="pointer-events-none absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 text-[clamp(3rem,10vw,5rem)] leading-[0.8] font-bold tracking-[0.08em] whitespace-nowrap text-white uppercase opacity-90 select-none max-sm:top-[40%] md:text-[clamp(6rem,8vw,8rem)] lg:text-[clamp(8rem,12vw,14rem)]"
                    aria-hidden="true"
                >
                    IGNITION Δ
                </h1>

                {/* CANVAS / MODELO — fica por cima do texto */}
                <div className="absolute inset-0 z-10">
                    <RenderModel>
                        <Ignition />
                    </RenderModel>
                </div>
            </div>
            <TechnologySection />
            <WarrantySection />
            <ContactSection />
            <Footer />
        </>
    );
}
