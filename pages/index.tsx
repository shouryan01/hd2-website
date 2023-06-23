import "react-horizontal-vertical/rhv.css";

import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import React, { useEffect, useRef, useState } from "react";

import About from "@/components/About";
import Apply_Button from '@/components/Apply_Button';
import Contact from "./contact";
import Cover from '@/components/Cover';
import Faq from "@/components/Faq";
import First_Container from "@/components/First_Container";
import Logo from '@/components/Logo';
import MLH_Trust from "../components/MLH_Trust";
import Mobile_Cover from '@/components/Mobile_Cover';
import OurTeam from "@/components/ourteam";
import Prizes from "@/components/Prizes";
import { Rhv } from 'react-horizontal-vertical';
import Sponsors from "@/components/Sponsors";
import Tracks from '@/components/Tracks';
import createScrollSnap from 'scroll-snap'

export default function Home() {
  return (
    // <div>
    //   <First_Container />
    //   <div className="flex flex-col snap-y snap-mandatory h-screen overflow-scroll">
    //     <div className="snap-center">
    //       <About />
    //     </div>
    //     <div className="snap-center h-screen">
    //       <Tracks />
    //     </div>
    //     <div className="snap-center h-screen">
    //       <Prizes />
    //     </div>
    //     <div className="snap-top h-screen">
    //       <Sponsors />
    //     </div>
    //     <div className="snap-center h-screen">
    //       <Faq />
    //     </div>
    //     <div className="snap-center h-screen">
    //       <Contact />
    //     </div>
    //     <div className="snap-center h-screen">
    //       <OurTeam />
    //     </div>
    //   </div>
    // </div>

    <Rhv>
      <div className="flex min-h-screen flex-col items-center main-container">
        <First_Container />
        <About />
        <Tracks />
        <Prizes />
        <Sponsors />
      </div>
      <div className="flex min-h-screen flex-col items-center main-container">
        <Faq />
        <Contact />
        <OurTeam />
      </div>
    </Rhv>
  );
}