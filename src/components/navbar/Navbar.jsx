import styles from "../navbar/Navbar.module.scss";
import { Link } from "react-scroll";

export const Navbar = () => {


  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  };


  return (
    <div className={styles["nav__content"]} id='navbar'>
      <div className={styles["nav__logo"]}>
        <Link to="hero" smooth={true} duration={1500}>
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
              duration={1500}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              smooth={true}
              offset={-380}
              duration={1500}
            >
              Nosotros
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="experiencia"
              smooth={true}
              offset={-380}
              duration={1500}
            >
              Experiencia
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="services"
              smooth={true}
              offset={-300}
              duration={1500}
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
              duration={1500}
            >
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
