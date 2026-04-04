import { Link } from "react-scroll";
import "./Navbar.css";
import { useState } from "react";
import { useTheme } from "../../ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

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
    {
      id: 4,
      link: "contact",
    },
  ];
  const [nav, setNav] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <Link spy={true} smooth={true} duration={500} to="home">
            <h1 className="title">Suyash</h1>
          </Link>
        </div>
        <ul className="nav-links">
          {links.map(({ id, link }) => (
            <li key={id} className="nav-item">
              <Link spy={true} smooth={true} duration={500} to={link} offset={0}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-actions">
          <div className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? <FaMoon size={18} /> : <FaSun size={18} color="#fcd34d" />}
          </div>
          <div className="hamburger" onClick={() => setNav(!nav)}>
            {nav ? '✖' : '☰'}
          </div>
        </div>
      </div>
      {nav && (
        <ul className="nav-dropdown">
          {links.map(({ id, link }) => (
            <li key={id}>
              <Link
                to={link}
                offset={0}
                onClick={() => setNav(!nav)}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Navbar;
