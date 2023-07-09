import "react-horizontal-vertical/rhv.css";

import About from "@/components/About";
import Apply_Button from "@/components/Apply_Button";
import Contact from "./contact";
import Faq from "@/components/Faq";
import First_Container from "@/components/First_Container";
import Link from "next/link";
import OurTeam from "@/components/ourteam";
import Prizes from "@/components/Prizes";
import React from "react";
import Sponsors from "@/components/Sponsors";
import Tracks from '@/components/Tracks';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center main-container">
      <First_Container />
      <About />
      <Tracks />
      <Prizes />
      <Sponsors />
      <Faq />
      <Contact />
      <OurTeam />
      <Link href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank" className="mt-20">Code of Conduct</Link>
    </div>
  );
}