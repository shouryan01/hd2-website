type Sponsor = {
	name: string;
	logo: string;
	url?: string;
	tier: string;
};

const sponsors: Sponsor[] = [
	{
		name: "Ford",
		logo: "/images/sponsors/Ford.svg",
		url: "https://www.ford.com/",
		tier: "Platinum",
	},
	{
		name: "Amazon",
		logo: "/images/sponsors/Amazon.svg",
		url: "https://www.aboutamazon.com/",
		tier: "Platinum",
	},
	{
		name: "Bosch",
		logo: "/images/sponsors/Bosch.svg",
		url: "https://www.bosch.us/",
		tier: "Platinum",
	},
	{
		name: "Forvia",
		logo: "/images/sponsors/Forvia.svg",
		url: "https://www.forvia.com/",
		tier: "Gold",
	},
	{
		name: "Little Caesars",
		logo: "/images/sponsors/Little Caesars.svg",
		url: "https://littlecaesars.com/en-us/",
		tier: "Gold",
	},
	{
		name: "eTAS",
		logo: "/images/sponsors/eTAS.svg",
		url: "https://www.etas.com/en/",
		tier: "Gold",
	},
	{
		name: "Stand Out Stickers",
		logo: "/images/sponsors/StandOut Stickers.svg",
		url: "https://www.standoutstickers.com/",
		tier: "Silver",
	},
	{
		name: "GitHub",
		logo: "/images/sponsors/GitHub.svg",
		url: "http://github.com/",
		tier: "Silver",
	},
	{
		name: "University of Michigan Dearborn | College of Engineering and Computer Science",
		logo: "/images/sponsors/UMD - CECS.png",
		url: "https://umdearborn.edu/cecs",
		tier: "Silver",
	},
	{
		name: "AI Futures",
		logo: "/images/sponsors/AI Futures.svg",
		url: "https://aifutures.us/",
		tier: "Bronze",
	},
	{
		name: "echo3D",
		logo: "/images/sponsors/echo3D.png",
		url: "https://www.echo3d.com/",
		tier: "Bronze",
	},
	{
		name: "Verbwire",
		logo: "/images/sponsors/Verbwire.png",
		url: "https://www.verbwire.com/",
		tier: "Bronze",
	},
];

const SponsorContent = ({ sponsor }: { sponsor: Sponsor }) => {
	const { name, logo, url, tier } = sponsor;
	const tierMaps: { [key: string]: any } = {
		Platinum: "from-slate-50 via-sky-200 to-slate-700",
		Gold: "from-yellow-100 via-yellow-300 to-amber-500",
		Silver: "from-zinc-200 via-zinc-50 to-zinc-400",
		Bronze: "from-amber-900 via-rose-100 to-amber-700",
	};

	return (
		<a href={url} target="_blank" rel="noreferrer">
			<div
				className={`group relative flex h-40 w-full justify-center rounded-md border-2 ${tierMaps[tier]} p-4 hover:bg-gradient-to-br md:p-6 lg:p-8`}
			>
				<img
					src={logo}
					alt={name}
					className="transform object-contain transition-transform duration-200 group-hover:scale-110"
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
					className={`${
						sponsors.length > numLastRow && "mt-2"
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
