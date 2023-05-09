import React, {useEffect,useState} from "react";
import { Events } from "react-scroll";
import Image from "next/image";
import Grid from "../components/grid";


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
					<Grid pages={pages}/>
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
