import styles from "../experiencia/Experiencia.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { carouselData } from "../../data.js";

export const Experiencia = () => {
  const settings = {
    dots: true,
    infinite: true,
    adaptiveHeight: true,
    //focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 8000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={styles["container"]} id="experiencia">
      <div>
        <Slider {...settings}>
          <div className={styles["slide__container"]}>
            <h2>{carouselData.slide01.anio}</h2>
            <h3>{carouselData.slide01.titulo}</h3>
            <p>{carouselData.slide01.text}</p>
          </div>
          <div className={styles["slide__container"]}>
            <h2>{carouselData.slide02.anio}</h2>
            <h3>{carouselData.slide02.titulo}</h3>
            <p>{carouselData.slide02.text}</p>
          </div>
          <div className={styles["slide__container"]}>
            <h2>{carouselData.slide03.anio}</h2>
            <h3>{carouselData.slide03.titulo}</h3>
            <p>{carouselData.slide03.text}</p>
          </div>
          <div className={styles["slide__container"]}>
            <h2>{carouselData.slide04.anio}</h2>
            <h3>{carouselData.slide04.titulo}</h3>
            <p>{carouselData.slide04.text}</p>
          </div>
          <div className={styles["slide__container"]}>
            <h2>{carouselData.slide05.anio}</h2>
            <h3>{carouselData.slide05.titulo}</h3>
            <p>{carouselData.slide05.text}</p>
          </div>
          <div className={styles["slide__container"]}>
            <h2>{carouselData.slide06.anio}</h2>
            <h3>{carouselData.slide06.titulo}</h3>
            <p>{carouselData.slide06.text}</p>
          </div>
        </Slider>
      </div>
    </div>
  );
};
