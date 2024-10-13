import { Link } from "react-scroll";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "projects",
    },
  ];
  const [nav, setNav] = useState(false);
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <h1 className="title">Suyash</h1>
        </div>
        <ul className="nav-links">
          {links.map(({ id, link }) => (
            <li key={id} className="nav-item">
              <Link spy={true} smooth={true} duration={500} to={link}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hamburger" onClick={() => setNav(!nav)}>
          ☰
        </div>
      </div>
      {nav && (
        <ul className="nav-dropdown">
          {links.map(({ id, link }) => (
            <li key={id}>
              <Link
                to={link}
                offset={link!=="projects"?-900:-640}
                onClick={() => setNav(!nav)}
                smooth
                duration={1000}
              >
                {link}
              </Link>
            </li>
          ))}
          <div className="hamburger" onClick={() => setNav(!nav)}>
            ✖
          </div>
        </ul>
      )}
    </>
  );
};

export default Navbar;
