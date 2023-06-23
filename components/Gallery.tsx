import Image from "next/image";
import React from "react";

type ImageType = {
  url: string;
  name: string;
  link: string;
};

const Gallery = ({ images }: any) => {
  return (
    <div className="grid grid-cols-4 gap-1 md:grid-cols-5 md:gap-4">
      {images.map((image: ImageType, index: number) => (
        <div key={index} className="text-center">
          <img
            src={image.url}
            alt={image.name}
            style={{ width: "20vw", height: "18vw" }}
            className="rounded-xl"
          />
          <p>{image.name}</p>
          <button className="w-10 h-10">
            <a href={image.link} target="_blank" rel="noopener noreferrer">
              <Image
                src="/linkedin-logo.png"
                alt="LinkedIn  Profile"
                className="w-full h-full"
                width={100}
                height={100}
              />
            </a>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
