import styles from "../navbar/Navbar.module.scss";
import { NavLink } from "react-router-dom";


export const Navbar = () => {

  return (
    <div className={styles["nav__content"]}>
      <div className={styles["nav__logo"]}>
        <NavLink to="/">Logo</NavLink>
      </div>
      <nav className={styles["nav__links"]}>
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
