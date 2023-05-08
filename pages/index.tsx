import React, {useEffect, useRef, useState} from "react";
import { Events } from "react-scroll";
import Image from "next/image";




function NavBar({ pages }: { pages: string[] }) {
	return (
		<nav className="navbar">
			<ul className="nav-list">
				{pages.map((page, index) => (
					<li key={index} className="nav-item">
						<a href="#" className="nav-link-normal" data-text={page}>
							{page}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default function Home() {
	const backgroundRef = useRef<HTMLDivElement>(null);
	const pages = ["register", "about", "sponsors", "prizes", "faq", "contact"];

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
			<div
				className="background_normal"
				ref={backgroundRef}
			/>
			<main className="flex min-h-screen flex-col items-center p-24 main-container">
				<div className="logo">
					<Image
						src="/hd_logo.jpeg"
						width={500}
						height={500}
						alt="hackathon logo"
					/>
				</div>
				<h1 className="date">10.22.2023</h1>
				<NavBar pages={pages} />
				<div className="extra-content" style={{ minHeight: "200vh" }}>
				</div>
			</main>
		</>
	);
}
