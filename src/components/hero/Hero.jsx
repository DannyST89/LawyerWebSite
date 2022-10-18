import styles from "../hero/Hero.module.scss";
import { hero_img } from "../../assets/Images/images";

export const Hero = () => {
  return (
    <div className={styles["container"]} id="hero">
      <div className={styles["hero__text"]}>
        <h1>Mi texto Principal</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eum
          aliquid neque minima saepe in, incidunt iusto fugiat beatae. qui
          maiores iusto at aperiam repudiandae ipsum architecto iste.
        </p>
        <div className={styles["hero__btn"]}>
          <button>Leer mas...</button>
        </div>
      </div>
      <div className={styles["hero__img"]}>
        <img src={hero_img} alt="abogados de costa rica" />
      </div>
    </div>
  );
};
