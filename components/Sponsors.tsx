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
		name: "Ford",
		logo: "/static/images/sponsors/Ford.svg",
		url: "https://www.ford.com/",
		tier: "Platinum",
	},
	{
		name: "Amazon",
		logo: "/static/images/sponsors/Amazon.svg",
		hoverLogo: "/static/images/sponsors/Amazon - Dark.svg",
		url: "https://www.aboutamazon.com/",
		tier: "Platinum",
	},
	{
		name: "Bosch",
		logo: "/static/images/sponsors/Bosch.svg",
		hoverLogo: "/static/images/sponsors/Bosch - Dark.svg",
		url: "https://www.bosch.us/",
		tier: "Platinum",
	},
	{
		name: "Forvia",
		logo: "/static/images/sponsors/Forvia.svg",
		url: "https://www.forvia.com/",
		tier: "Gold",
	},
	{
		name: "Little Caesars",
		logo: "/static/images/sponsors/Little Caesar's.svg",
		url: "https://littlecaesars.com/en-us/",
		tier: "Gold",
	},
	{
		name: "eTAS",
		logo: "/static/images/sponsors/eTAS.svg",
		url: "https://www.etas.com/en/",
		tier: "Gold",
	},
	{
		name: "Stand Out Stickers",
		logo: "/static/images/sponsors/StandOut Stickers.svg",
		hoverLogo: "/static/images/sponsors/StandOut Stickers - Dark.svg",
		url: "https://www.standoutstickers.com/",
		tier: "Silver",
	},
	{
		name: "GitHub",
		logo: "/static/images/sponsors/GitHub.svg",
		hoverLogo: "/static/images/sponsors/GitHub - Dark.svg",
		url: "http://github.com/",
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
		name: "AI Futures",
		logo: "/static/images/sponsors/AI Futures.svg",
		hoverLogo: "/static/images/sponsors/AI Futures - Dark.svg",
		url: "https://aifutures.us/",
		tier: "Bronze",
	},
	{
		name: "echo3D",
		logo: "/static/images/sponsors/echo3D.png",
		hoverLogo: "/static/images/sponsors/echo3D - Dark.png",
		url: "https://www.echo3d.com/",
		tier: "Bronze",
	},
	{
		name: "Verbwire",
		logo: "/static/images/sponsors/Verbwire.svg",
		hoverLogo: "/static/images/sponsors/Verbwire - Dark.svg",
		url: "https://www.verbwire.com/",
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
			className="flex rounded-md bg-white p-0.5 hover:bg-gradient-to-br"
		>
			<div
				className={`sponsor-card group bg-black ${tierMaps[tier]} hover:bg-gradient-to-br`}
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
			Gold: 2,
			Silver: 3,
			Bronze: 4,
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
