import { useState } from "react";

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

	const numbers = [];

	let previousNumber = null;
	let twoPreviousNumber = null;

	for (let i = 0; i < length; i++) {
		let randomNumber =
			Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber; // Generate a random number between 10 and 30

		while (
			randomNumber === previousNumber ||
			randomNumber === twoPreviousNumber
		) {
			randomNumber =
				Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
		}

		numbers.push(randomNumber);
		twoPreviousNumber = previousNumber;
		previousNumber = randomNumber;
	}

	return numbers;
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

const bubbleTimers = generateRandomNumbers(34, 10, 30);
const bubblePositions = generateRandomNumbers(34);
const prizeTimers = generateRandomNumbers(prizes.length, 10, 30);
const prizePositions = generateLinearlySpacedNumbers(0, 80, prizes.length);

const Prizes = () => {
	const [hoverIndex, setHoverIndex] = useState<Number | null>(null);

	return (
		<div className="my-5 w-full px-5 md:my-10 md:px-10 lg:my-20 lg:px-20">
			<h1 className="mb-4 px-5 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:px-20 lg:text-6xl">
				Prizes
			</h1>
			<div className="bubble-container">
				{bubbleTimers.map((t, i) => (
					<span
						style={{
							animationDuration: `${300 / t}s`,
							left: `${bubblePositions[i]}%`,
						}}
						className={`bubble ${hoverIndex !== null ? "blur" : ""}`}
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
								className={`bubble prize-bubble ${
									hoverIndex !== null && hoverIndex !== i ? "blur" : ""
								}`}
								onMouseEnter={() => setHoverIndex(i)}
								onMouseLeave={() => setHoverIndex(null)}
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
