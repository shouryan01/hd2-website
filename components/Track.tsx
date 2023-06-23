type TrackProps = {
    title: string;
    description: string;
    image: string;
};

export default function Track({ title, description, image }: TrackProps) {
    return (
        <div className="flex flex-wrap justify-start items-center">
            <div className="w-full md:w-1/2 lg:w-1/3">
                <img
                    src={image}
                    width={250}
                    height={250}
                    alt="HackDearborn Logo"
                />
            </div>
            <div className="w-full md:w-1/2 lg:w-2/3">
                <p className="text-2xl text-left mb-2 font-bold">
                    {title}
                </p>
                <p className="text-left">
                    {description}
                </p>

            </div>
        </div>
    );
}