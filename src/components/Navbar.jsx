import { useState, useEffect } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHidden, setIsHidden] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // Se o scroll está indo para baixo
      setIsHidden(true);
    } else {
      // Se o scroll está indo para cima
      setIsHidden(false);
    }

    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${isHidden ? "hidden" : ""}`}>
      <div className="navbar-logo">
        <a href="/" className="navbar-logo">FlowerPower</a>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="/" className="navbar-link">Home</a>
        </li>
        <li>
          <a href="/plants/register" className="navbar-link">Cadastrar Plantas</a>
        </li>
        <li>
          <a href="/types/register" className="navbar-link">Cadastrar Tipos</a>
        </li>
        <li>
          <a href="/plants" className="navbar-link">Plantas</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
