import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@700&family=IBM+Plex+Sans:wght@400;700&family=Rubik+Glitch&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body className="font-anka">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
