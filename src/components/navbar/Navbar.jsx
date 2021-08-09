import React, { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { links } from "./NavbarData";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const closeNavLinkOnMobileView = () => setShowLinks(false);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  return (
    <>
      <nav>
        <div className="navbar-container">
          <div className="nav-header">
            <NavLink className="logo" exact to="/">
              App<span>Lab</span>
            </NavLink>
            <button className="nav-toggle" onClick={toggleLinks}>
              <FaBars />
            </button>
          </div>
          <div className="links-container" ref={linksContainerRef}>
            <ul className="links" ref={linksRef}>
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <NavLink exact to={url} onClick={closeNavLinkOnMobileView}>
                      {text}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <Link class="btn nav-button" to="/" role="button">
            try for free
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
