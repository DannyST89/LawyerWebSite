import React from "react";
import styles from "../about/About.module.scss";
import {
  about_img01,
  about_img02,
  about_img03,
  about_img04,
} from "../../assets/Images/images";
export const About = () => {
  return (
    <div className={styles["container"]} id="about">
      <div className={styles["info"]}>
        <h2 className={styles["main__titule"]}>sobre nosotros</h2>
        <p className={styles["main__text"]}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod ratione
          consectetur rem voluptatibus dolores! Deleniti officia sit corrupti
          voluptas numquam! Blanditiis fuga quaerat suscipit voluptates
          provident iusto doloremque officia ullam deleniti fugiat ratione quia
          reprehenderit ut excepturi modi aliquam cupiditate laboriosam sapiente
          sequi dolores beatae esse, quam nemo consequuntur. Perferendis?
        </p>
      </div>
      <div className={styles["img__style"]}>
        <img src={about_img01} alt="" />
        <p className={styles["textoImg"]}>lorem ipsum</p>
      </div>
      <div className={styles["img__style"]}>
        <img src={about_img02} alt="" />
        <p className={styles["textoImg"]}>lorem ipsum</p>
      </div>
      <div className={styles["img__style"]}>
        <img src={about_img03} alt="" />
        <p className={styles["textoImg"]}>lorem ipsum</p>
      </div>
      <div className={styles["img__style"]}>
        <img src={about_img04} alt="" />
        <p className={styles["textoImg"]}>lorem ipsum</p>
      </div>
    </div>
  );
};
