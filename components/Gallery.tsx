import React from "react";
import Image from "next/image";

interface ImageProps {
    url: string;
    name: string;
    link: string;
}

interface GalleryProps {
    images: ImageProps[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-5 gap-4">
      {images.map((image, index) => (
        <div key={index} className="text-center">
            <Image 
                src={image.url} 
                alt={image.name} 
                width={500} 
                height={300} 
                className={`mx-auto transform transition hover:brightness-110 hover:scale-105 ${index % 2 === 0 ? 'neon-pink' : 'neon-blue'}`} 
            />
            <p>{image.name}</p>
            <button className="w-10 h-10">
                <a href={image.link} target="_blank" rel="noopener noreferrer">
                    <Image 
                        src="/linkedin_icon.svg" 
                        alt="LinkedIn  Profile" 
                        width={40} 
                        height={40} 
                        className="w-full h-full"
                    />
                </a>
            </button>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
