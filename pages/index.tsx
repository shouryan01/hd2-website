import React, {useEffect, useRef, useState} from "react";
import { Events } from "react-scroll";
import dynamic from "next/dynamic";
import Image from "next/image";
import laptopSvg from "../public/laptop.svg";

const Rain = dynamic(() => import("../components/Rain"), { ssr: false });


function NavBar({ pages }: { pages: string[] }) {
	return (
		<nav className="navbar">
			<ul className="nav-list">
				{pages.map((page, index) => (
					<li key={index} className="nav-item">
						<a href="#" className="nav-link" data-text={page}>
							{page}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
}

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
		  
		Events.scrollEvent.register("begin",handleScroll);
		Events.scrollEvent.register("end",handleScroll);
		window.addEventListener("scroll", handleScroll);

		return () => {
			Events.scrollEvent.remove("begin");
			Events.scrollEvent.remove("end");
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<div
				className="background"
				ref={backgroundRef}
				style={{
					zIndex: bgZIndex,
					transform: `scale(${bgImageScale})`,
					transition: "transform 0.5s ease",
				}}
			/>

			<div 
				className="rain-layer"
				style={{
					zIndex: rainZIndex,
				}}
			>
				<Rain />
			</div>
			<main className="flex min-h-screen flex-col items-center p-24 main-container">
				<h1 className="d3">hack dearborn 2</h1>
				<div className="relative">
				<h3 className="d4">Disrupt Reality</h3>
				<h5 className="d5">10.22.2023</h5>
				</div>
				<NavBar pages={pages} />
				<div className="extra-content" style={{ minHeight: "200vh" }}>
				</div>
				<div className="laptop-wrapper">
				<div className="laptop-container">
					<Image src={laptopSvg} alt="Laptop" />
				</div>
				</div>
			</main>
		</>
	);
}
