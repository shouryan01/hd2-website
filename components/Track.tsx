type TrackProps = {
    title: string;
    description: string;
    image: string;
};

export default function Track({ title, description, image }: TrackProps) {
    return (
        <div className="flex flex-wrap justify-start items-center mt-14">
            <div className="w-full md:w-1/2 lg:w-1/3">
                <img
                    src={image}
                    width={150}
                    height={150}
                    alt="HackDearborn Logo"
                />
            </div>
            <div className="w-full md:w-1/2 lg:w-2/3 mt-2">
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