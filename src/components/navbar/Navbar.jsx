import styles from "../navbar/Navbar.module.scss";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

export const Navbar = () => {
  return (
    <div className={styles["nav__content"]}>
      <div className={styles["nav__logo"]}>
        <Link to="hero" smooth={true} duration={2000}>
          Logo
        </Link>
      </div>
      <nav className={styles["nav__links"]}>
        <ul>
          <li>
            <Link
              activeClass="active"
              to="hero"
              smooth={true}
              offset={-150}
              duration={2000}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              smooth={true}
              offset={-180}
              duration={2000}
            >
              Nosotros
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="experiencia"
              smooth={true}
              offset={-180}
              duration={2000}
            >
              Experiencia
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="services"
              smooth={true}
              offset={-200}
              duration={2000}
            >
              Servicios
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact"
              smooth={true}
              offset={50}
              duration={2000}
            >
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
