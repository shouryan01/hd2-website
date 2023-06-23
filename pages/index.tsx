import About from "@/components/About";
import Contact from "./contact";
import Faq from "@/components/Faq";
import First_Container from "@/components/First_Container";
import OurTeam from "@/components/ourteam";
import Prizes from "@/components/Prizes";
import React from "react";
import { Rhv } from 'react-horizontal-vertical';
import Sponsors from "@/components/Sponsors";
import Tracks from '@/components/Tracks';

export default function Home() {
  return (
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