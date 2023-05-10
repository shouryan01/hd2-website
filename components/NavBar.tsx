import React from "react";

function NavBar({ pages }: { pages: string[] }) {
  return (
    <nav className="navbar">
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

export default NavBar;
