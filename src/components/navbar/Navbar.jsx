import styles from "../navbar/Navbar.scss";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const [isActive, setisActive] = useState(false);

  return (
    <div className="nav__content">
      <div className="nav__logo">
        <NavLink to="/">Logo</NavLink>
      </div>
      <nav className="nav__links">
        <ul>
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/about">Nosotros</NavLink>
          </li>
          <li>
            <NavLink to="/experiencia">Experiencia</NavLink>
          </li>
          <li>
            <NavLink to="/services">Servicios</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contacto</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
