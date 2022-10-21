import styles from "./Contact.module.scss";
import { TbWorld } from "react-icons/tb";
import { GrMail } from "react-icons/gr";
import { AiOutlineUser } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import { about_img04 } from "../../assets/Images/images";
export const Contact = () => {
  return (
    <div id="contact" className={styles["container"]}>
      <div className={styles["img__container"]}>
        <img src={about_img04} alt="" />
      </div>
      <div className={styles["form__container"]}>
        <form action="submit">
          <input
            type="text"
            className={styles["iconUser"]}
            placeholder="Nombre"
          />
          <input
            type="text"
            className={styles["iconMail"]}
            placeholder="Correo"
          />
          <textarea
            className={styles["iconDescription"]}
            name="Descripción"
            id=""
            placeholder="Descripción"
            cols="40"
            rows="10"
          ></textarea>
          <a href="">Enviar</a>
        </form>
      </div>
    </div>
  );
};
