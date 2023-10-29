import Gallery from "@/components/Gallery";
import React from "react";

const OurTeam = () => {
  const images = [
    { url: "/ShamsAhson.jpg", name: "Shams Ahson", link: "https://www.linkedin.com/in/shams-ahson-6453ab210/" },
    { url: "/HudaHussaini.jpg", name: "Huda Hussaini", link: "https://www.linkedin.com/in/hussainihuda/" },
    { url: "/FaithLong.jpg", name: "Faith Long", link: "https://www.linkedin.com/in/faith-long-40963b168/" },
    { url: "/EejoyLim.jpg", name: "Eejoy Lim", link: "https://www.linkedin.com/in/eejoylim/" },
    { url: "/shouryanNikam.jpeg", name: "Shouryan Nikam", link: "https://www.linkedin.com/in/shouryannikam/" },
    { url: "/RohitNair.jpg", name: "Rohit Nair", link: "https://www.linkedin.com/in/r-s-nair/" },
    { url: "/ZahraaAlhmood.jpg", name: "Zahraa Alhmood", link: "https://www.linkedin.com/in/zahraa-alhmood/" },
    { url: "/RosyShrestha.jpg", name: "Rosy Shrestha", link: "https://www.linkedin.com/in/rosyshrestha/" },
    { url: "/souadOmar.jpeg", name: "Souad Omar", link: "https://www.linkedin.com/in/souad-omar-0105aa217/" },
    { url: "/Shashanka-Prajapati.jpg", name: "Shashanka Prajapati", link: "https://www.linkedin.com/in/shashanka-prajapati/" },
    { url: "/ali.jpg", name: "Ali Al Zein", link: "https://www.linkedin.com/in/alielzei/" },
    { url: '/sumia.png', name: "Sumia Saleh", link: "https://www.linkedin.com/in/sumia-saleh-163741263/" },
    { url: '/amrit.jpeg', name: "Amrit Minocha", link: "https://www.linkedin.com/in/amrit-minocha/" },
    { url: '/husniyah.jpeg', name: "Husniyah Alam", link: "https://www.linkedin.com/in/husniyah-alam/" },
    { url: '/alyamama.jpeg', name: "Alyamama Abdo", link: "https://www.linkedin.com/in/alyamama-abdo/" }
    //{url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9v8v7NEXwFbm68QdvNkgYtLvsNc3XnveR1tueabEyiCQQym1erVEDl8V_MEvnOgCXyHM&usqp=CAU", name: "Maryam"},
    //{url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9v8v7NEXwFbm68QdvNkgYtLvsNc3XnveR1tueabEyiCQQym1erVEDl8V_MEvnOgCXyHM&usqp=CAU", name: "Regan Maharjan"},
    //{url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9v8v7NEXwFbm68QdvNkgYtLvsNc3XnveR1tueabEyiCQQym1erVEDl8V_MEvnOgCXyHM&usqp=CAU", name: "  "},
    //{url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9v8v7NEXwFbm68QdvNkgYtLvsNc3XnveR1tueabEyiCQQym1erVEDl8V_MEvnOgCXyHM&usqp=CAU", name: "Amirit"},
    //{url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9v8v7NEXwFbm68QdvNkgYtLvsNc3XnveR1tueabEyiCQQym1erVEDl8V_MEvnOgCXyHM&usqp=CAU", name: "Yamama"},
    //{url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9v8v7NEXwFbm68QdvNkgYtLvsNc3XnveR1tueabEyiCQQym1erVEDl8V_MEvnOgCXyHM&usqp=CAU", name: "Sumia"},
    //{url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9v8v7NEXwFbm68QdvNkgYtLvsNc3XnveR1tueabEyiCQQym1erVEDl8V_MEvnOgCXyHM&usqp=CAU", name: "Ali Al Zein"},
    //{url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9v8v7NEXwFbm68QdvNkgYtLvsNc3XnveR1tueabEyiCQQym1erVEDl8V_MEvnOgCXyHM&usqp=CAU", name: "Fatima"},
  ]

  return (
    <div className="container mx-auto min-h-screen">
      <h1 className="font-extrabold leading-none tracking-tight text-4xl md:text-5xl lg:text-6xl pb-5 md:pb-10">
        Meet Our Team
      </h1>
      <Gallery images={images} />
    </div>
  );
}

export default OurTeam;
