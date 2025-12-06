"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function CursorGlow() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Smooth spring animation for the cursor
    const springConfig = { damping: 25, stiffness: 100, mass: 0.5 };
    const x = useSpring(0, springConfig);
    const y = useSpring(0, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            x.set(e.clientX - 150); // Center the 300px glow
            y.set(e.clientY - 150);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [x, y]);

    return (
        <motion.div
            className="pointer-events-none fixed inset-0 z-0 overflow-hidden mix-blend-screen"
            style={{ x: 0, y: 0 }} // Just a container
        >
            <motion.div
                style={{ x, y }}
                className="absolute top-0 left-0 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px] opacity-50"
            />
        </motion.div>
    );
}
