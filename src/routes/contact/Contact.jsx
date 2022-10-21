import styles from "./Contact.module.scss";
import { TbWorld } from "react-icons/tb";
import { GrMail } from "react-icons/gr";
import { AiOutlineUser } from "react-icons/ai";
import { BsFillPencilFill } from 'react-icons/bs';
export const Contact = () => {
  return (
    <div id="contact" className={styles["container"]}>
      <form action="submit">
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Correo" />
        <textarea
          name="Descripción"
          id=""
          placeholder="Descripción"
          cols="40"
          rows="10"
        ></textarea>
      </form>
    </div>
  );
};
