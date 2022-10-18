import { Navbar } from "./components/navbar/Navbar";
import { Hero } from "./components/hero/Hero";
import { Welcome } from "./components/welcome/Welcome";
import { Services } from "./components/services/Services";
import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact";
import { Experiencia } from "./components/experiencia/Experiencia";
import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { dataServices } from "./data.js";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <Welcome />
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
      <Experiencia />
      <About />
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
