import styles from "../services/Services.module.scss";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { MdRealEstateAgent } from "react-icons/md";
import { GiDiploma } from "react-icons/gi";

export const Services = ({
  primerServicio,
  segundoServicio,
  tercerServicio,
}) => {
  return (
    <div className={styles["container"]} id="services">
      <div className={styles["secction__one"]}>
        <div className={styles["titulo__container"]}>
          <span>{<FaUserAlt />}</span>
          <h3 className={styles["titulo"]}>{primerServicio.titulo}</h3>
          <p>{primerServicio.texto}</p>
        </div>
        <div className={styles["text__container"]}>
          <p>{primerServicio.textoPrincipal}</p>
        </div>
      </div>
      <div className={styles["secction__two"]}>
        <div className={styles["titulo__container"]}>
          <span>{<MdRealEstateAgent />}</span>
          <h3 className={styles["titulo"]}>{segundoServicio.titulo}i</h3>
          <p>{segundoServicio.texto}</p>
        </div>
        <div className={styles["text__container"]}>
          <p>{segundoServicio.textoPrincipal}</p>
        </div>
      </div>
      <div className={styles["secction__three"]}>
        <div className={styles["titulo__container"]}>
          <span>{<GiDiploma />}</span>
          <h3 className={styles["titulo"]}>{tercerServicio.titulo}.</h3>
          <p>{tercerServicio.texto}</p>
        </div>
        <div className={styles["text__container"]}>
          <p>{tercerServicio.textoPrincipal}</p>
        </div>
      </div>
    </div>
  );
};
