import { m } from "framer-motion";
import { useState } from "react";

type Sponsor = {
	name: string;
	logo: string;
	hoverLogo?: string;
	url?: string;
	tier: string;
};

const sponsors: Sponsor[] = [
	{
		name: "Carhartt",
		logo: "/static/images/sponsors/carhartt-light.svg",
		hoverLogo: "/static/images/sponsors/carhartt-dark.svg",
		url: "https://www.carhartt.com/",
		tier: "Gold",
	},
	// {
	// 	name: "Amazon",
	// 	logo: "/static/images/sponsors/Amazon.svg",
	// 	hoverLogo: "/static/images/sponsors/Amazon - Dark.svg",
	// 	url: "https://www.aboutamazon.com/",
	// 	tier: "Gold",
	// },
	// {
	// 	name: "Forvia",
	// 	logo: "/static/images/sponsors/Forvia.svg",
	// 	url: "https://www.forvia.com/",
	// 	tier: "Gold",
	// },
	{
		name: "Little Caesars",
		logo: "/static/images/sponsors/Little Caesar's.svg",
		url: "https://littlecaesars.com/en-us/",
		tier: "Gold",
	},
	{
		name: "Epitec",
		logo: "/static/images/sponsors/epitec.png",
		url: "https://www.epitec.com/",
		tier: "Bronze",
	},
	{
		name: "Rocket Central",
		logo: "/static/images/sponsors/rocket2.png",
		url: "https://rocketcentral.com/",
		tier: "Bronze",
	},
	// {
	// 	name: "Denso",
	// 	logo: "/static/images/sponsors/denso.png",
	// 	url: "https://www.denso.com/us-ca/en/",
	// 	tier: "Bronze",
	// },
	{
		name: "Magna",
		logo: "/static/images/sponsors/magna.png",
		url: "https://www.magna.com/",
		tier: "Bronze",
	},
	{
		name: "Grand Circus",
		logo: "/static/images/sponsors/grand.png",
		url: "https://www.grandcircus.co/",
		tier: "Bronze",
	},
	{
		name: "ZF",
		logo: "/static/images/sponsors/zf1.png",
		url: "https://www.zf.com/mobile/en/homepage/homepage.html",
		tier: "Gold",
	},
	{
		name: "AI Futures",
		logo: "/static/images/sponsors/AI Futures.svg",
		hoverLogo: "/static/images/sponsors/AI Futures - Dark.svg",
		url: "https://aifutures.us/",
		tier: "Silver",
	},
	{
		name: "Ford",
		logo: "/static/images/sponsors/Ford.svg",
		url: "https://www.ford.com/",
		tier: "Silver",
	},
	{
		name: "Bosch",
		logo: "/static/images/sponsors/Bosch.svg",
		hoverLogo: "/static/images/sponsors/Bosch - Dark.svg",
		url: "https://www.bosch.us/",
		tier: "Gold",
	},
	{
		name: "Vision Jiu-Jitsu",
		logo: "/static/images/sponsors/jiu.png",
		tier: "Bronze",
	},
	{
		name: "Kyndryl",
		logo: "/static/images/sponsors/kyndryl.png",
		url: "https://umdearborn.edu/cecs",
		tier: "Silver",
	},
	{
		name: "University of Michigan Dearborn | College of Engineering and Computer Science",
		logo: "/static/images/sponsors/UMD - CECS.png",
		hoverLogo: "/static/images/sponsors/UMD - CECS - Dark.png",
		url: "https://umdearborn.edu/cecs",
		tier: "Silver",
	},
	{
		name: "Stand Out Stickers",
		logo: "/static/images/sponsors/StandOut Stickers.svg",
		hoverLogo: "/static/images/sponsors/StandOut Stickers - Dark.svg",
		url: "http://hackp.ac/mlh-StandOutStickers-hackathons",
		tier: "Bronze",
	},
];

const SponsorContent = ({ sponsor }: { sponsor: Sponsor }) => {
	const { name, logo, hoverLogo, url, tier } = sponsor;
	const tierMaps: { [key: string]: any } = {
		Platinum: "from-slate-50 via-sky-200 to-slate-700",
		Gold: "from-yellow-100 via-yellow-300 to-amber-500",
		Silver: "from-slate-400 via-slate-100 to-slate-700",
		Bronze: "from-amber-700 via-rose-100 to-amber-900",
	};

	const [isHovered, setIsHovered] = useState(false);
	const handleMouseEnter = () => setIsHovered(true);
	const handleMouseExit = () => setIsHovered(false);

	return (
		<a
			href={url}
			target="_blank"
			rel="noreferrer"
			className="flex rounded-md bg-transparent backdrop-blur-sm border-transparent  border-4 hover:bg-gradient-to-br"
		>
			<div
				className={`sponsor-card group border-white border-b-2 border-r-2 border-t-2 border-l-2 border-l-transparent border-t-transparent hover:border-b-pink-500 hover:border-r-pink-500 hover:border-b-8 hover:border-r-8 hover:border-t-8 hover:border-l-8 hover:border-t-blue-500 hover:border-l-blue-500 ${tierMaps[tier]} hover:bg-gradient-to-br`}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseExit}
			>
				<img
					src={isHovered && hoverLogo ? hoverLogo : logo}
					alt={name}
					className="object-contain duration-200 group-hover:scale-110"

				/>
			</div>
		</a>
	);
};

const SponsorsContainer = ({
	sponsors,
	tier,
}: {
	sponsors: Sponsor[];
	tier: string;
}) => {
	const tierMaps: { [key: string]: any } = {
		grid: {
			Platinum: 1,
			Gold: 1,
			Silver: 2,
			Bronze: 3,
		},
		flex: {
			Platinum: "lg:w-12/12",
			Gold: "lg:w-6/12",
			Silver: "lg:w-4/12",
			Bronze: "lg:w-3/12",
		},
	};
	const numLastRow = sponsors.length % tierMaps.grid[tier];

	return (
		<div className="flex flex-col">
			<div
				// Dynamically loaded tailwind classes must be previously mentioned to safelist them
				// Grid can have lg:grid-cols-1 lg:grid-cols-2 lg:grid-cols-3 lg:grid-cols-4
				className={`grid grid-cols-1 gap-2 lg:grid-cols-${tierMaps.grid[tier]}`}
			>
				{sponsors
					.slice(0, numLastRow ? -numLastRow : sponsors.length)
					.map((sponsor, index) => (
						<SponsorContent key={index} sponsor={sponsor} />
					))}
			</div>
			{Boolean(numLastRow) && (
				<div
					className={`${sponsors.length > numLastRow && "mt-2"
						} flex justify-center lg:space-x-2`}
				>
					{sponsors.slice(-numLastRow).map((sponsor, index) => (
						<div className={`w-full ${tierMaps.flex[tier]}`}>
							<SponsorContent key={index} sponsor={sponsor} />
						</div>
					))}
				</div>
			)}
		</div>
	);
};

const Sponsors = () => {
	const tiers = ["Platinum", "Gold", "Silver", "Bronze"];

	return (
		<div className="w-full px-10 pt-20 md:px-20 lg:px-40 lg:pb-20">
			<h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">
				Sponsors
			</h1>
			<div className="mb-4 grid grid-cols-1 gap-2">
				{tiers.map((tier) => (
					<SponsorsContainer
						sponsors={sponsors.filter((sponsor) => sponsor.tier === tier)}
						tier={tier}
					/>
				))}
			</div>
		</div>
	);
};

export default Sponsors;
