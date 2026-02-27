"use client";

import { useProgress } from "@react-three/drei";
import { Loading } from "./Loading";

export const SceneLoader = () => {
    const { active } = useProgress();
    return active ? <Loading /> : null;
};
