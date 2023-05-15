import React, { useEffect, useState } from "react";
import { Events } from "react-scroll";
import Image from "next/image";
import Grid from "../components/grid";

const Home: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const pages = [
    { title: "Register", slug: "register" },
    { title: "About", slug: "about" },
    { title: "Sponsors", slug: "sponsors" },
    { title: "Prizes", slug: "prizes" },
    { title: "FAQ", slug: "faq" },
    { title: "Contact", slug: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {};

    Events.scrollEvent.register("begin", handleScroll);
    Events.scrollEvent.register("end", handleScroll);
    window.addEventListener("scroll", handleScroll);

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
	<div className="fixed top-50 left-5 p-4 flex items-center justify-center h-10 w-10 bg-red-500">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM17.78 9.22a.75.75 0 10-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 001.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L20.56 12l1.72-1.72a.75.75 0 00-1.06-1.06l-1.72 1.72-1.72-1.72z" />
            </svg>
          </button>
        </div>
      <div
        className={`min-h-screen transition-colors duration-500 ${
          darkMode ? "bg-dark-background text-white" : "bg-white text-black"
        }`}
      >
        <header className="container mx-auto mb-0 flex justify-center items-center">
          <div className="logo">
            <Image
              src="/hd_logo.jpeg"
              width={500}
              height={500}
              alt="hackathon logo"
            />
          </div>
        </header>
        <main className="container mx-auto -mt-8 px-[22px]">
          <div className="text-center">
            <h1 className="date">10.22.2023</h1>
          </div>
          <Grid pages={pages} />
        </main>
        <a
          id="mlh-trust-badge"
          className="block fixed right-12 top-0 w-20 z-40"
          href="https://mlh.io/na?utm_source=na-hackathon&amp;utm_medium=TrustBadge&amp;utm_campaign=2023-season&amp;utm_content=black"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-black.svg"
            alt="Major League Hacking 2023 Hackathon Season"
            className="w-full"
          />
        </a>
      </div>
    </>
  );
};

export default Home;
