import styles from "../titulo/Title.module.scss";

const Title = ({ texto , icon}) => {
  return (
    <div className={styles["container"]}>
        <span className={styles['icon-styles']}>{icon}</span>
      <h2 className={styles["titulo"]}>{texto}</h2>
      <span></span>
    </div>
  );
};

export default Title;
