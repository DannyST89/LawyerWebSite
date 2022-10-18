
import styles from "../welcome/Welcome.module.scss";
export const Welcome = () => {
  return (
    <div className={styles["main-container"]} id="welcome">
      <div className={styles["info"]}>
        <h2 className={styles["titulo"]}>welcome to our site</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quo
          illo ipsa in sapiente, iste excepturi harum distinctio quod obcaecati.
          Neque labore quaerat debitis repudiandae laboriosam quibusdam
          architecto alias incidunt.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quo
          illo ipsa in sapiente, iste excepturi harum distinctio quod obcaecati.
          Neque labore quaerat debitis repudiandae laboriosam quibusdam
          architecto alias incidunt.
        </p>
      </div>
      <div className={styles["horario"]}>
        <div className={styles["entrada"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
          impedit?
        </div>
        <div className={styles["salida"]}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </div>
      </div>
    </div>
  );
};
