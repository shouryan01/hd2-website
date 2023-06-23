import { Parallax, ParallaxBanner, ParallaxBannerLayer, ParallaxProvider, useParallax } from 'react-scroll-parallax';
import React, { useEffect, useRef, useState } from "react";

import About from "@/components/About";
import Apply_Button from "@/components/Apply_Button";
import Contact from "./contact";
import Cover from '@/components/Cover';
import Faq from "@/components/Faq";
import Logo from '@/components/Logo';
import MLH_Trust from "../components/MLH_Trust";
import Mobile_Cover from '@/components/Mobile_Cover';
import OurTeam from "@/components/ourteam";
import Prizes from "@/components/Prizes";
import Sponsors from "@/components/Sponsors";
import Tracks from '@/components/Tracks';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center main-container">

      {/* <RSP pages={6}>
        <ParallaxLayer offset={0} factor={2}>
          hi
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.8} sticky={{ start: 1.5, end: 2.5 }}>
          <About />
        </ParallaxLayer>
      </RSP> */}
      {/* <ParallaxProvider>
        <Parallax scale={[0.5, 1]} className='h-screen'>
          <About />
        </Parallax>
        
        <Parallax scale={[0.5, 1.5]} className='h-screen'>
          <Prizes />
        </Parallax>
        <Parallax scale={[0.5, 1.5]} className='mb-48'>
          <Sponsors />
        </Parallax>
        <Parallax scale={[0.5, 1.5]} className='h-screen'>
          <Faq />
        </Parallax>
        <Parallax scale={[0.5, 1.5]} className='h-screen'>
          <Contact />
        </Parallax>
        
        <Parallax scale={[0.5, 1]} className='h-screen'>
          <OurTeam />
        </Parallax>

        <Parallax scale={[0.5, 1]}>
          <Sponsors />
        </Parallax>
        <Parallax scale={[0.5, 1]}>
          <Faq />
        </Parallax>

      </ParallaxProvider> */}
      <MLH_Trust />
      <Logo />
      <Cover />
      <Mobile_Cover />

      <About />
      <Tracks />
      <Prizes />
      <Sponsors />
      <Faq />
      <Apply_Button glitch={true} />
      <Contact />
      <OurTeam />
    </div >
  );
}