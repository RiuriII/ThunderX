"use client";
import { Environment, Bounds } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { SceneLoader } from "../loading/SceneLoader";
import { useState, useEffect } from "react";

const RenderModel = ({ children }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    }, []);

    return (
        <>
            <SceneLoader />
            <Canvas
                className="relative z-10 h-full w-full"
                camera={{ fov: 45 }}
                gl={{ antialias: true }}
                dpr={isMobile ? 1 : [1, 1.4]}
                performance={{ min: 0.5 }}
            >
                <Bounds fit clip observe margin={1.2}>
                    {children}
                </Bounds>

                {isMobile ? (
                    // Simple lighting for mobile
                    <>
                        <ambientLight intensity={1.2} />
                        <directionalLight
                            position={[5, 5, 5]}
                            intensity={1.5}
                            castShadow
                        />
                        <directionalLight
                            position={[-5, 3, -5]}
                            intensity={0.8}
                        />
                        <pointLight position={[0, 5, 0]} intensity={1} />
                        <hemisphereLight
                            skyColor="#ffffff"
                            groundColor="#444444"
                            intensity={0.6}
                        />
                    </>
                ) : (
                    // Full environment for desktop
                    <Environment
                        resolution={256}
                        preset="sunset"
                        background={false}
                    />
                )}
            </Canvas>
        </>
    );
};

export default RenderModel;
