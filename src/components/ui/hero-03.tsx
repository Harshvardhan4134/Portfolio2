"use client";

import { Separator } from "@/components/ui/separator";
import { BadgeHelp } from "lucide-react";
import { SiInstagram, SiX, SiLinkedin } from "react-icons/si";
import React, { useState, useEffect } from "react";
import { config } from "@/data/config";
import Link from "next/link";

// Hyper Text Component that cycles through font images
function HyperText({ text }: { text: string }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const hyperTextImages = [
    "/hyper text/text-1761150613096.png",
    "/hyper text/text-1761150617458.png",
    "/hyper text/text-1761150642738.png",
    "/hyper text/text-1761150803281.png",
    "/hyper text/text-1761150813222.png",
    "/hyper text/text-1761151054355.png",
    "/hyper text/text-1761151100861.png",
    "/hyper text/text-1761151105326.png",
    "/hyper text/text-1761151112534.png",
    "/hyper text/text-1761151160203.png",
    "/hyper text/text-1761151190542.png",
    "/hyper text/text-1761151222651.png",
    "/hyper text/text-1761151283535.png",
    "/hyper text/text-1761151296810.png",
    "/hyper text/text-1761151345075.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % hyperTextImages.length);
    }, 150); // Slightly faster cycling for more dynamic effect

    return () => clearInterval(interval);
  }, [hyperTextImages.length]);

  return (
    <div className="hyper-text-container relative inline-block w-32 md:w-36 lg:w-40 xl:w-44 2xl:w-48 h-16 md:h-18 lg:h-20 xl:h-22 2xl:h-24 pl-3 pr-2">
      <img
        src={hyperTextImages[currentImageIndex]}
        alt={text}
        className="hyper-text-image h-8 md:h-10 lg:h-12 xl:h-14 2xl:h-16 w-auto block"
        style={{ 
          filter: 'brightness(1.3) contrast(1.2) saturate(1.1)',
          imageRendering: 'pixelated',
          maxWidth: 'none',
          verticalAlign: 'baseline',
          width: 'auto',
          height: 'auto',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(calc(-50% + 2px), calc(-50% + 2px))'
        }}
        onError={(e) => {
          console.log('Image failed to load:', hyperTextImages[currentImageIndex]);
        }}
      />
    </div>
  );
}

export function HeroSection03() {
  return (
    <div className="min-h-screen relative bg-black text-white overflow-hidden w-full">
      <header className="flex justify-between items-center px-4 sm:px-6 md:px-8 pt-4 sm:pt-6 relative z-10">
        <div className="text-xl sm:text-2xl font-bold italic text-white">Harsh</div>
      </header>

      <main className="relative pt-4 sm:pt-6 md:pt-8 pb-8 px-4 sm:px-6 w-full overflow-hidden min-h-[calc(100vh-120px)] flex flex-col">
        <div className="flex-1 flex relative gap-1 md:gap-2 w-full flex-col justify-center items-center">
          {/* Line 1: AI-WRANGLING | AUTOMATION */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-center justify-center w-full max-w-6xl">
            <p className="text-xs md:text-sm text-gray-400 leading-5 max-w-[180px] md:max-w-[220px] order-2 md:order-1 text-center md:text-right">
              AI-WRANGLING | CLOUD JUGGLER
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-light leading-none tracking-wider text-white order-1 md:order-2 text-center">
              AUTOMATION
            </h1>
          </div>

          {/* Line 2: ALCHEMIST with icon */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-center justify-center w-full max-w-6xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl flex font-light leading-none tracking-wider text-white order-1 justify-center">
              <span>ALCHE</span>
              <BadgeHelp className="lg:size-28 size-12 md:size-14 text-orange-600" />
              <span>MIST</span>
            </h1>
            <p className="text-xs md:text-sm leading-5 max-w-[250px] md:max-w-[180px] order-2 text-center md:text-left">
              Building robots when I&apos;m not smashing the ukulele 🎸
            </p>
          </div>

          {/* Line 3: FUTURE CRAFTER */}
          <div className="flex justify-center w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-light leading-none tracking-wider text-white text-center">
              FUTURE CRAFTER
            </h1>
          </div>

          {/* Line 4: PRODUCT ❤ MAKER */}
          <div className="flex justify-center w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl flex font-light leading-none tracking-wider text-white justify-center">
              <span>PRODUCT</span>
              <div className="hidden lg:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 24 24"
                  fill="#f43f5e"
                >
                  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
                </svg>
              </div>
              <div className="block lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="#f43f5e"
                >
                  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
                </svg>
              </div>
              <span>MAKER</span>
            </h1>
          </div>
        </div>

        {/* Bottom section with separator, location, and image */}
        <div className="mt-auto space-y-4">
          {/* Separator and location info */}
          <div className="mx-auto max-w-7xl w-full">
            <div className="md:flex md:mx-8 grid md:justify-end items-center gap-3">
              <Separator className="w-full my-4 mx-auto max-w-3xl bg-gray-700" />
              <div className="text-xs whitespace-nowrap md:text-sm text-gray-400">
                INDIA 🚀 PLANET EARTH 🌏 ANYWHERE
              </div>
              <div className="flex w-full items-center gap-2">
                <span className="text-2xl md:text-4xl font-thin text-white">ALCHEMIST</span>
                <HyperText text="Harsh" />
              </div>
            </div>
          </div>

          {/* Image and description */}
          <div className="flex flex-col md:flex-row gap-4 sm:gap-6 items-start md:items-end pt-2 sm:pt-4 max-w-7xl mx-auto">
            <div className="w-full max-w-sm md:w-80 h-40 sm:h-44 md:h-48 shadow-lg border border-gray-800 rounded-md overflow-hidden">
              <img
                src="/assets/me.jpg"
                alt="Harshvardhan - Automation Alchemist"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-xs sm:text-sm md:text-sm text-gray-400 leading-5 md:pt-8 max-w-full md:max-w-md">
              Shipping code, breaking rules, making machines smarter (and people happier) 🚀
            </p>
          </div>
        </div>


        {/* Vertical text - hidden on small screens */}
        <div className="hidden md:flex fixed right-0 top-1/2 h-36 items-center transform -translate-y-1/2 z-10">
          <div className="bg-white text-black py-6 px-3 text-xs sm:text-sm font-bold">
            <span className="rotate-180 [writing-mode:vertical-rl]">
              Code Alchemist
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}

