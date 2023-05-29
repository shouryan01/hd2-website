import React from "react";

const Gallery = ({ images }) => {
  return (
    <div className="grid grid-cols-5 gap-4">
      {images.map((image, index) => (
        <div key={index} className="text-center">
          <div className="glitcheffect">
            <img
              src={image.url}
              alt={image.name}
              onMouseOver={() =>
                document
                  .getElementById(`glitch-${index}`)
                  .classList.add("hover-glitch")
              }
              onMouseOut={() =>
                document
                  .getElementById(`glitch-${index}`)
                  .classList.remove("hover-glitch")
              }
            />
            <div className="glitchlayers" id={`glitch-${index}`}>
              <div
                className="glitch"
                style={{ backgroundImage: `url(${image.url})` }}
              />
              <div
                className="glitch"
                style={{ backgroundImage: `url(${image.url})` }}
              />
              <div
                className="glitch"
                style={{ backgroundImage: `url(${image.url})` }}
              />
            </div>
          </div>
          <p>{image.name}</p>
          <button className="w-10 h-10">
            <a href={image.link} target="_blank" rel="noopener noreferrer">
              <img
                src="https://static.vecteezy.com/system/resources/previews/018/930/587/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png"
                alt="LinkedIn  Profile"
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
