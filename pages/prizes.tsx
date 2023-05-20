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

const Prizes = () => {
	const bubbleTimers = generateRandomNumbers(34 + prizes.length, 10, 30);

	return (
		<div className="w-full px-10 pt-20 md:px-20 lg:px-40 lg:pb-20">
			<h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">
				Prizes
			</h1>
			<div className="bubbles">
				{bubbleTimers.slice(0, -prizes.length).map((t) => (
					<span style={{ animationDuration: `${300 / t}s` }}></span>
				))}
				{prizes.map(
					(p, i) =>
						p && (
							<span
								style={{
									animationDuration: `${
										300 / bubbleTimers[bubbleTimers.length - i]
									}s`,
								}}
							>
								<img
									src={p.image}
									alt={p.title}
									className="h-60 w-60 object-contain"
								/>
							</span>
						),
				)}
			</div>
		</div>
	);
};

export default Prizes;
