import { useState } from "react";
import { motion } from "framer-motion";
import React from "react";
import Gallery from "@/components/Gallery";

const ourTeam = () => {
    const images = [
        {url: "/ShamsAhson.jpg", name: "Shams Ahson", link:"https://www.linkedin.com/in/shams-ahson-6453ab210/"},
        {url: "/HudaHussaini.jpg", name: "Huda Hussaini", link: "https://www.linkedin.com/in/hussainihuda/"},
        {url: "/FaithLong.jpg", name: "Faith Long", link: "https://www.linkedin.com/in/faith-long-40963b168/"},
        {url: "/EejoyLim.jpg", name: "Eejoy Lim", link: "https://www.linkedin.com/in/eejoylim/"},
        {url: "/shouryanNikam.jpeg", name: "Shouryan Nikam", link: "https://www.linkedin.com/in/shouryannikam/"},
        {url: "/RohitNair.jpg", name: "Rohit Nair", link: "https://www.linkedin.com/in/r-s-nair/"},
        {url: "/ZahraaAlhmood.jpg", name: "Zahraa Alhmood", link: "https://www.linkedin.com/in/zahraa-alhmood/"},
        {url: "/RosyShrestha.jpg", name: "Rosy Shrestha", link: "https://www.linkedin.com/in/rosyshrestha/"},
        {url: "/souadOmar.jpeg", name: "Souad Omar", link: "https://www.linkedin.com/in/souad-omar-0105aa217/"},
        {url: "/Shashanka-Prajapati.jpg", name: "Shashanka Prajapati", link: "https://www.linkedin.com/in/shashanka-prajapati/"},
        //{url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9v8v7NEXwFbm68QdvNkgYtLvsNc3XnveR1tueabEyiCQQym1erVEDl8V_MEvnOgCXyHM&usqp=CAU", name: "Kanika"},
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

    <div className="items-center justify-center">
      <h1 className="text-3xl font-bold text-center my-8">
        Meet Our Team
        </h1>
      <Gallery images = {images} />
    </div>
    
  );
}

export default ourTeam;
