import React, {useEffect, useRef, useState} from "react";
import { Events } from "react-scroll";
import dynamic from "next/dynamic";
import Image from "next/image";
import laptopSvg from "../public/static/images/laptop.svg";
import useSound from 'use-sound';
import { delay } from "framer-motion";

const Rain = dynamic(() => import("../components/Rain"), { ssr: false });
const NavBar = dynamic(() => import("../components/NavBar"), { ssr: true });
import React, {useEffect,useState} from "react";
import { Events } from "react-scroll";
import Image from "next/image";

const Home: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };	
  
  const pages = [
	{ title: 'Register', slug: 'register' },
	{ title: 'About', slug: 'about' },
	{ title: 'Sponsors', slug: 'sponsors' },
	{ title: 'Prizes', slug: 'prizes' },
	{ title: 'FAQ', slug: 'faq' },
	{ title: 'Contact', slug: 'contact' },
	];

	useEffect(() => {
		const handleScroll = () => {};
		  
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
			<div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-dark-background text-white' : 'bg-white text-black'}`}>
				<header className="container mx-auto mb-0 flex justify-center items-center">
					<div className="logo">
						<Image
							src="/hd_logo.jpeg"
							width={500}
							height={500}
							alt="hackathon logo"
						/>
					</div>
				</header>
				<main className="container mx-auto -mt-8 px-[22px]">
					<div className="text-center">
						<h1 className="date">10.22.2023</h1>
					</div>
					<div className="container mx-auto p-4 flex justify-center">
						<div className="w-2/3 grid grid-cols-2 md:grid-cols-3 gap-6">
							{pages.map((page, index) => (
							<a
								key={index}
								href={`${page.slug}`}
								className="p-6 border-2 border-white rounded-lg dark:border-white hover:bg-blue-custom hover:border-blue-custom transition-all"
							>
								<div className="flex justify-between items-center">
								<h4 className="text-xl font-bold mb-2">{page.title}</h4>
								<span className="text-xl font-bold mb-2">➤</span>
								</div>
							</a>
							))}
						</div>
					</div>
				</main>
				<a
				id="mlh-trust-badge"
				className="block fixed right-12 top-0 w-20 z-40"
				href="https://mlh.io/na?utm_source=na-hackathon&amp;utm_medium=TrustBadge&amp;utm_campaign=2023-season&amp;utm_content=black"
				target="_blank"
				rel="noopener noreferrer"
				>
				<img
					src="https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-black.svg"
					alt="Major League Hacking 2023 Hackathon Season"
					className="w-full"
				/>
				</a>
    		</div>
		</>
  );
};

export default Home;
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

	const [play, { stop }] = useSound('/static/sounds/cyberpunk_cut.mp3');
	const [startRain, setStartRain] = useState(false);
	const [disrupt, startDisrupt] = useState(false);

	if(disrupt) {
		var backgroundImage = "background_city"
	} else {
		var backgroundImage = "background_cute"
	}

	if(disrupt) {
		var style1 = "d3"
	} else {
		var style1 = "normal"
	}

	if(disrupt) {
		var style2 = "d4"
	} else {
		var style2 = "normal"
	}

	if(disrupt) {
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
				<h1 className={style1}>hack dearborn 2</h1>
				<div className="relative">
				<h3 className={style2}>Disrupt Reality</h3>

				<button
					className="py-4 text-xl text-white bg-gray-800 px-7 hover:bg-gray-700 rounded-xl"
					onClick={async () => {
						play()
						await new Promise(resolve => setTimeout(resolve, 2000));
						setStartRain(true)
						startDisrupt(true)
					}}
				>
					Disrupt Reality
				</button>	
				<button
					className="py-4 text-xl text-white bg-gray-800 px-7 hover:bg-gray-700 rounded-xl"
					onClick={async () => {
						stop()
						setStartRain(false)
						startDisrupt(false)
					}}
				>
					Back to Reality
				</button>

				<h5 className={style3}>10.22.2023</h5>
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
