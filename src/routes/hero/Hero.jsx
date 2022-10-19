import styles from "./Hero.module.scss";
import { hero_img } from "../../assets/Images/images";
import { Link } from "react-scroll";
export const Hero = () => {
  return (
    <div className={styles["container"]} id="hero">
      <div className={styles["hero__text"]}>
        <h1 className={styles["titulo"]}>Mi texto Principal</h1>
        <p className={styles["texto"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eum
          aliquid neque minima saepe in, incidunt iusto fugiat beatae. qui
          maiores iusto at aperiam repudiandae ipsum architecto iste.
        </p>
        <div className={styles["hero__btn"]}>
          <Link to="welcome" smooth={true} offset={0} duration={2000}>
            Leer mas...
          </Link>
        </div>
      </div>
      <div className={styles["hero__img"]}>
        <img src={hero_img} alt="abogados de costa rica" />
      </div>
    </div>
  );
};
