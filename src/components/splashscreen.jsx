import { useEffect, useState } from "react";
import icon from "../assets/icon.png";

export default function SplashScreen() {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 1800); // fade-out at 1.8 sec
    const removeTimer = setTimeout(() => {
      const splash = document.getElementById("splash-screen");
      if (splash) splash.style.display = "none";
    }, 2500); // fully remove after 2.5 sec

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <div
      id="splash-screen"
      className={`
        fixed inset-0 z-[9999] 
        flex flex-col items-center justify-center
        bg-[#0B3D2E]
        transition-opacity duration-700
        ${fadeOut ? "opacity-0" : "opacity-100"}
      `}
    >
      <img
        src={icon}
        alt="logo"
        className="w-28 h-28 animate-zoomFade mb-4"
      />

      <h1 className="text-[#F1EBDC] text-3xl font-extrabold tracking-wide">
        Babuji <span className="text-[#D6A756]">Chaay</span>
      </h1>

      <p className="text-[#D6A756] mt-3 tracking-widest text-sm">
        Brewing Happiness
      </p>
    </div>
  );
}
