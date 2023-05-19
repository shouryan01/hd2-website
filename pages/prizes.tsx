import React from "react";

const generateRandomNumbers = (
	length: number = 34,
	minNumber: number = 10,
	maxNumber: number = 30,
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
	return (
		<div className="w-full px-10 pt-20 md:px-20 lg:px-40 lg:pb-20">
			<h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">
				Prizes
			</h1>
			<div className="bubbles">
				{generateRandomNumbers().map((n) => (
					<span style={{ animationDuration: `${300 / n}s` }}></span>
				))}
			</div>
		</div>
	);
};

export default Prizes;
