"use client";

import { useTheme } from "next-themes";
import { Particles } from "@/components/magicui/particles";
import { useEffect, useState } from "react";

export default function ParticlesWrapper() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Higher contrast + neon-style colors for visibility
  const particleColor =
    resolvedTheme === "dark" ? "#ffffff" : "#1E40AF"; // Light blue vs navy

  if (!mounted) return null;

  return (
    <Particles
      className="fixed inset-0 -z-10 pointer-events-none"
      color={particleColor}
      quantity={150} // feel free to increase this for denser particles
    />
  );
}
