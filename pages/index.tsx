import React, { useEffect, useRef, useState } from "react";

import Disrupt_Reality_Button from "@/components/Disrupt_Reality_Button";
import { Events } from "react-scroll";
import Image from "next/image";
import MLH_Trust from "../components/MLH_Trust";
import { delay } from "framer-motion";
import dynamic from "next/dynamic";
import laptopSvg from "../public/static/images/laptop.svg";
import useSound from 'use-sound';

const Rain = dynamic(() => import("../components/Rain"), { ssr: false });
const NavBar = dynamic(() => import("../components/NavBar"), { ssr: true });

export default function Home() {
  const [bgImageScale, setBgImageScale] = useState(1);
  const [rainZIndex, setRainZIndex] = useState(2);
  const [bgZIndex, setBgZIndex] = useState(2);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const pages = ["register", "about", "sponsors", "prizes", "faq", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      if (backgroundRef.current) {
        const scrollPosition = window.scrollY;
        const newScale = Math.max(0.1, 1 - scrollPosition / 1000);
        setBgImageScale(newScale);

        // Update rainZIndex based on scroll position
        if (scrollPosition > 300) {
          setRainZIndex(0);
          setBgZIndex(1);
        } else {
          setRainZIndex(1);
          setBgZIndex(0);
        }
      }
    };

    Events.scrollEvent.register("begin", handleScroll);
    Events.scrollEvent.register("end", handleScroll);
    window.addEventListener("scroll", handleScroll);

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [play, { stop }] = useSound('/static/sounds/cyberpunk_cut.mp3');
  const [startRain, setStartRain] = useState(false);
  const [disrupt, startDisrupt] = useState(false);

  if (disrupt) {
    var backgroundImage = "background_city"
  } else {
    var backgroundImage = "background_cute"
  }

  if (disrupt) {
    var style1 = "d3"
  } else {
    var style1 = "normal"
  }

  if (disrupt) {
    var style2 = "d4"
  } else {
    var style2 = "normal"
  }

  if (disrupt) {
    var style3 = "d5"
  } else {
    var style3 = "normal"
  }

  return (
    <>
      <div
        className={backgroundImage}
        ref={backgroundRef}
        style={{
          zIndex: bgZIndex,
          transform: `scale(${bgImageScale})`,
          transition: "transform 0.5s ease",
        }}
      />

      {startRain && (
        <div
          className="rain-layer"
          style={{
            zIndex: rainZIndex,
          }}
        >
          <Rain />
        </div>
      )}

      <main className="flex min-h-screen flex-col items-center p-24 main-container">
        <MLH_Trust />
        <h1 className="font-Chalkduster text-7xl sm:text-8xl mt-36 text-center">Hack Dearborn2</h1>
        <div className="relative">
          {disrupt && <h3 className={style2}>Disrupt Reality</h3>}

          <div className="flex justify-center gap-4">
            {startRain && (
              <button
                className="py-4 text-xl text-white bg-gray-800 px-7 hover:bg-gray-700"
                onClick={async () => {
                  stop();
                  setStartRain(false);
                  startDisrupt(false);
                }}
              >
                Back to Reality
              </button>
            )}
          </div>

          <h5 className="font-Papyrus text-5xl sm:text-7xl">10.22.2023</h5>
        </div>

        {!disrupt && <button
          onClick={async () => {
            play();
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setStartRain(true);
            startDisrupt(true);
          }}
        >
          <Disrupt_Reality_Button />
        </button>}



        {disrupt && <NavBar pages={pages} />}

        <div className="extra-content" style={{ minHeight: "100vh" }}></div>
        <div className="laptop-wrapper">
          <div className="laptop-container">
            <Image src={laptopSvg} alt="Laptop" />
          </div>
        </div>
      </main>
    </>
  );
}