import React from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { Hero } from "../../routes/hero/Hero";
import { Welcome } from "../../routes/welcome/Welcome";
import { Services } from "../../routes/services/Services";
import { About } from "../../routes/about/About";
import { Contact } from "../../routes/contact/Contact";
import { Experiencia } from "../../routes/experiencia/Experiencia";
import { dataServices } from "../../data.js";
import Title from "../../components/titulo/Title";
import { GoLaw } from "react-icons/go";
import { FaGavel } from "react-icons/fa";
import { RiTeamLine } from "react-icons/ri";
import { MdContactMail } from "react-icons/md";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Welcome />
      <Title texto="Nuestros Servicios" icon={<GoLaw />} />
      <Services
        primerServicio={dataServices.primerServicio}
        segundoServicio={dataServices.segundoServicio}
        tercerServicio={dataServices.tercerServicio}
      />
      <Services
        primerServicio={dataServices.cuartoServicio}
        segundoServicio={dataServices.quintoServicio}
        tercerServicio={dataServices.sextoServicio}
      />
      <Title texto="Nuestros Trabajos" icon={<FaGavel />} />
      <Experiencia />
      <Title texto="Sobre Nosotros" icon={<RiTeamLine />} />
      <About />
      <Title texto="Contactenos" icon={<MdContactMail />} />
      <Contact />
    </>
  );
};

export default Home;
