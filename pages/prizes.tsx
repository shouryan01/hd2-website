type Prize = {
	title: string;
	image: string;
};

const prizes: Prize[] = [
	{
		title: "3D Printer",
		image: "/images/prizes/3D Printer.png",
	},
	{
		title: "Arduino Starter Kit",
		image: "/images/prizes/Arduino Starter Kit.png",
	},
	{
		title: "Drone",
		image: "/images/prizes/Drone.png",
	},
	{
		title: "Google Swags",
		image: "/images/prizes/Google Swags.png",
	},
	{
		title: "Instant Camera Kit",
		image: "/images/prizes/Instant Camera Kit.png",
	},
	{
		title: "iPad",
		image: "/images/prizes/iPad.png",
	},
	{
		title: "Noise-Cancelling Headphones",
		image: "/images/prizes/Noise-Cancelling Headphones.png",
	},
	{
		title: "Smart Garden",
		image: "/images/prizes/Smart Garden.png",
	},
	{
		title: "VR Headset",
		image: "/images/prizes/VR Headset.png",
	},
];

const generateRandomNumbers = (
	length: number = 10,
	minNumber: number = 0,
	maxNumber: number = 100,
) => {
	// If min number is greater than max number, swap them
	[minNumber, maxNumber] =
		minNumber > maxNumber ? [maxNumber, minNumber] : [minNumber, maxNumber];

	return Array.from(
		{ length },
		() => Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber,
	);
};

function generateLinearlySpacedNumbers(
	start: number,
	stop: number,
	numItems: number,
) {
	const step = (stop - start) / (numItems - 1);
	const arr = [];
	for (let i = 0; i < numItems; i++) {
		arr.push(start + step * i);
	}
	return arr;
}

const Prizes = () => {
	const bubbleTimers = generateRandomNumbers(34, 10, 30);
	const bubblePositions = generateRandomNumbers(34);
	const prizeTimers = generateRandomNumbers(prizes.length, 10, 30);
	const prizePositions = generateLinearlySpacedNumbers(0, 80, prizes.length);

	return (
		<div className="w-full px-10 pt-20 md:px-20 lg:px-40 lg:pb-20">
			<h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">
				Prizes
			</h1>
			<div className="bubbles">
				{bubbleTimers.map((t, i) => (
					<span
						style={{
							animationDuration: `${300 / t}s`,
							left: `${bubblePositions[i]}%`,
						}}
					></span>
				))}
				{prizes.map(
					(p, i) =>
						p && (
							<span
								style={{
									animationDuration: `${300 / prizeTimers[i]}s`,
									left: `${prizePositions[i]}%`,
								}}
							>
								<img
									src={p.image}
									alt={p.title}
									className="h-20 w-20 object-contain md:h-40 md:w-40 lg:h-60 lg:w-60"
								/>
							</span>
						),
				)}
			</div>
		</div>
	);
};

export default Prizes;
