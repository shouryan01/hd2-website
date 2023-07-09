import Track from '@/components/Track';

const tracks = [
    {
        title: 'Automotive Future',
        description: 'Create a solution to a futuristic automotive issue: self-driving vehicles, smart mobility, and connectivity.',
        image: '/car.png',
    },
    {
        title: 'Financial Inclusion',
        description: 'Hackers will address the issue of inequitable access to financial services. Topics include: financial literacy, consumer protection, inclusivity and affordability.',
        image: '/finance.png',
    },
    {
        title: 'Education',
        description: 'Hackers will create a project that they think improves education. Possible issues are the digital divide, learning inequalities, and much more.',
        image: '/education.png',
    },
    {
        title: 'Health and Wellness',
        description: 'To address issues such as healthy food consumption and mental health, hackers will develop digital solutions.',
        image: '/health.png',
    },
];

const Tracks = () => {
    return (
        <div className="container mx-auto mb-80">
            <h1 className="font-extrabold leading-none tracking-tight text-4xl md:text-5xl lg:text-6xl pb-5 md:pb-10">
                Tracks
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                {tracks.map((track, index) => (
                    <Track key={index} title={track.title} description={track.description} image={track.image} />
                ))}
            </div>
        </div>
    );
}

export default Tracks;
