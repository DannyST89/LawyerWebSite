import { Navbar } from "./components/navbar/Navbar";
import { Hero } from "./routes/hero/Hero";
import { Welcome } from "./routes/welcome/Welcome";
import { Services } from "./routes/services/Services";
import { About } from "./routes/about/About";
import { Contact } from "./routes/contact/Contact";
import { Experiencia } from "./routes/experiencia/Experiencia";
import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { dataServices } from "./data.js";
import Title from "./components/titulo/Title";
import { GoLaw } from "react-icons/go";
import { FaGavel } from "react-icons/fa";
import { RiTeamLine } from "react-icons/ri";
import { MdContactMail } from "react-icons/md";
function App() {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <Welcome />
      <Title texto='Nuestros Servicios' icon={<GoLaw />}/>
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
      <Title texto='Nuestros trabajos nos representan' icon={<FaGavel />}/>
      <Experiencia />
      <Title texto='Sobre Nosotros' icon={<RiTeamLine  />}/>
      <About />
      <Title texto='Contactanos' icon={<MdContactMail />}/>
      <Contact />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/experiencia" element={<Experiencia />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Fragment>
  );
}

export default App;
