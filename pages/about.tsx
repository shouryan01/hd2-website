import { useState } from 'react';
import Image from 'next/image';

const About = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`${darkMode ? 'bg-dark-background text-white' : 'bg-white text-black'}`}>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl text-left mb-2">
	        	About
        </h1>
        <div className="flex flex-wrap justify-start items-center">
          <div className="w-full md:w-1/2 lg:w-1/3">
            <Image
              src="/hd_logo.jpeg"
              width={500}
              height={500}
              alt="hackathon logo"
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-2/3">
            <p className="text-2xl text-left mb-2 font-bold">
            What is Hack Dearborn?
            </p>
		          Hack Dearborn is an upcoming annual hackathon in southeast Michigan. Hack Dearborn will be hosted at the University of Michigan Dearborn by the Google Developer Student Clubs chapter at the University. Hack Dearborn aims to provide students with a creative space to solve problems and create real world solutions using technology.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;