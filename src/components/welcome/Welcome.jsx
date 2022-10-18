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
          architecto alias incidunt. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Vitae quo illo ipsa in sapiente, iste excepturi
          harum distinctio quod obcaecati. Neque labore quaerat debitis
          repudiandae laboriosam quibusdam architecto alias incidunt.
        </p>
      </div>
      <div className={styles["horario"]}>
        <div className={styles["horario__entrada__servicio"]}>
          <h2 className={styles["horario__titulo"]}>
            Horario de Servicio
          </h2>
          <p>lunes a viernes </p>
          <span>8 am - 5 pm</span>
          <hr/>
          <h4>
            Modo de atension
          </h4>
          <p>Virtual</p>
          <p>Medios</p>
          <span>Teams - Zoom - Movil - Google Meet</span>
        </div>
      </div>
    </div>
  );
};
