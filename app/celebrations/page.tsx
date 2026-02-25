"use client";

import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import Image from "next/image";

export default function CelebrationPage() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Open curtains after mount
    setTimeout(() => setOpen(true), 300);

    // Sound
    const cheer = new Audio("/sounds/celebration.mp3");
    setTimeout(() => cheer.play().catch(() => {}), 1000);

    // Confetti
    const duration = 9000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 20,
        startVelocity: 45,
        gravity: 0.8,
        scalar: 1.2,
        spread: 120,
        origin: { x: Math.random(), y: 0 },
      });

      if (Date.now() < end) requestAnimationFrame(frame);
    };

    frame();

    const timer = setTimeout(() => {
      window.location.href =
        process.env.NEXT_PUBLIC_REDIRECT_URL ||
        "http://devhrmssapt.vercel.app/";
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="stage">
      {/* CURTAINS */}
      <div className={`curtain left ${open ? "curtain-open left" : ""}`} />

      <div className={`curtain right ${open ? "curtain-open right" : ""}`} />
      <div className="spotlight" />
      {/* CONTENT */}
      <div className="celebration-screen">
        <Image
          src="/saptarishi.png"
          alt="logo"
          width={200}
          height={200}
          className="mb-6"
        />

        <h1 className="title">{process.env.NEXT_PUBLIC_APP_TITLE}</h1>

        <p className="subtitle">{process.env.NEXT_PUBLIC_APP_SUBTITLE}</p>

        <p className="tagline">{process.env.NEXT_PUBLIC_APP_TAGLINE}</p>
      </div>
    </div>
  );
}
