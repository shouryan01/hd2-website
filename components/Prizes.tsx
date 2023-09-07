import { useState } from "react";

type Prize = {
	title: string;
	image: string;
};

const prizes: Prize[] = [
	{
		title: "Coffee Maker\n(Education)",
		image: "/static/images/prizes/coffee maker (education).svg",
	},
	{
		title: "Hoverboard\n(Automotive)",
		image: "/static/images/prizes/hoverboard (automotive).svg",
	},
	{
		title: "Smartwatch\n(Health)",
		image: "/static/images/prizes/smartwatch (health).svg",
	},
	{
		title: "Switch\n(3rd Place)",
		image: "/static/images/prizes/switch (third prize).svg",
	},
	{
		title: "iPad\n(1st Prize)",
		image: "/static/images/prizes/ipad (first prize).svg",
	},
	{
		title: "Bose Headphones\n(2nd Place)",
		image: "/static/images/prizes/bose (second prize).svg",
	},
	{
		title: "Mechanical Keyboard\n(Beginner)",
		image: "/static/images/prizes/keyboard (beginner).svg",
	},
	{
		title: "Yeti Mic\n(Finance)",
		image: "/static/images/prizes/mic (finance).svg",
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
		<div className="container mx-auto h-screen">
			<h1 className="font-extrabold leading-none tracking-tight text-4xl md:text-5xl lg:text-6xl">
				Prizes
			</h1>
			<h5 className="hidden lg:block">(Hover over a bubble to learn more!)</h5>
			<h5 className="block lg:hidden">(Tap a bubble to learn more!)</h5>
			<div className="bubble-container">
				{bubbleTimers.map((t, i) => (
					<span
						key={i}
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
								key={`prize_${i}`}
								style={{
									animationDuration: `${300 / prizeTimers[i]}s`,
									left: `${prizePositions[i]}%`,
								}}
								className={`bubble prize-bubble ${hoverIndex !== null && hoverIndex !== i ? "blur" : ""
									}`}
								onMouseEnter={() => setHoverIndex(i)}
								onMouseLeave={() => setHoverIndex(null)}
							>
								<img
									src={p.image}
									alt={p.title}
									className="h-28 w-28 object-contain md:h-40 md:w-40 lg:h-60 lg:w-60"
								/>
								<div
									className={`${hoverIndex === i ? "visible" : "invisible"
										} absolute inset-0 flex items-center justify-center`}
								>
									<div className="bg-black bg-opacity-10 p-2 backdrop-blur">
										<p className="text-center text-sm font-bold text-white md:text-lg lg:text-2xl">
											{p.title}
										</p>
									</div>
								</div>
							</span>
						),
				)}
			</div>
		</div>
	);
};

export default Prizes;
