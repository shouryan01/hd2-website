// Desc: Grid component for displaying pages
import Link from "next/link";
import { SliderButton } from "@typeform/embed-react";

type Page = {
	title: string;
	slug: string;
};

const Grid = ({ pages }: { pages: Array<Page> }) => {
	return (
		<div className="container mx-auto p-4 flex justify-center">
			<div className="w-2/3 grid grid-cols-2 md:grid-cols-3 gap-6">
				{pages.map((page, index) =>
					page.slug === "register" ? (
						<SliderButton
							id={"oNcQNjvg"}
							width={5000}
							className=" p-6 border-2 border-white rounded-lg dark:border-white hover:bg-blue-custom hover:border-blue-custom transition-all"
						>
							<div className="flex justify-between items-center">
								<h4 className="text-xl font-bold mb-2">{page.title}</h4>
								<span className="text-xl font-bold mb-2">➤</span>
							</div>
						</SliderButton>
					) : (
						<Link
							key={index}
							href={`${page.slug}`}
							className="p-6 border-2 border-white rounded-lg dark:border-white hover:bg-blue-custom hover:border-blue-custom transition-all"
						>
							<div className="flex justify-between items-center">
								<h4 className="text-xl font-bold mb-2">{page.title}</h4>
								<span className="text-xl font-bold mb-2">➤</span>
							</div>
						</Link>
					),
				)}
			</div>
		</div>
	);
};

export default Grid;
