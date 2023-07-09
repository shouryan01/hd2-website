import Image from 'next/image';

const About = () => {
  return (
    <div className="container mx-auto h-screen">
      <h1 className="font-extrabold leading-none tracking-tight text-4xl md:text-5xl lg:text-6xl">
        About
      </h1>
      <div className="flex flex-wrap justify-center items-center">
        <div className="w-full md:w-1/2 lg:w-1/2">
          <Image
            src="/HD2_logo_transparent.png"
            width={500}
            height={500}
            alt="HackDearborn Logo"
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2">
          <p className="text-2xl text-left mb-2 font-bold ml-8">
            What is Hack Dearborn?
          </p>
          <p className='ml-8 max-w-lg text-lg font-anca'>
            Hack Dearborn is an upcoming annual hackathon in southeast Michigan. Hack Dearborn will be hosted at the University of Michigan Dearborn by the Google Developer Student Clubs chapter at the University. Hack Dearborn aims to provide students with a creative space to solve problems and create real world solutions using technology.
          </p>

        </div>
      </div>
    </div>
  );
};

export default About;