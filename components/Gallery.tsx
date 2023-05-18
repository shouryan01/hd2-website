import React from "react";

const Gallery = ({ images }) => {
  return (
    <div className="grid grid-cols-5 gap-4">
      {images.map((image, index) => (
        <div key={index} className="text-center">
            <img src={image.url} alt={image.name} className= {`mx-auto transform transition hover:brightness-110 hover:scale-105 ${index % 2 === 0 ? 'neon-pink' : 'neon-blue'}`} />
            <p>{image.name}</p>
            <button className="w-10 h-10">
                <a href={image.link} target="_blank" rel = "noopener noreferrer">
                    <img src="https://static.vecteezy.com/system/resources/previews/018/930/587/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png" alt="LinkedIn  Profile" className="w-full h-full"/>
                </a>
            </button>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
