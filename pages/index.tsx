import React from "react";
import Image from "next/image";
import disrupt from "../public/disrupt.svg";

function NavBar({ pages }) {
  return (
    <nav>
      <ul className="nav-list">
        {pages.map((page, index) => (
          <li key={index} className="nav-item">
            <a href="#" className="nav-link" data-text={page}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Home() {
  const pages = ["register", "about", "sponsors", "prizes", "faq", "contact"];

  return (
    <>
      <main className="flex min-h-screen flex-col items-center p-24">
        <h1 className="d4">hack dearborn 2</h1>
        <div className="relative">
          <Image src={disrupt} alt="Disrupt Reality" />
        </div>
        <NavBar pages={pages} />
      </main>
    </>
  );
}
