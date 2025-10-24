import "./About.css";
import React from "react";

const About = () => {
  return (
    <div>
      <div className="about">
        <h2>
          En KF Premium Coffee,{" "}
          <strong>nos apasiona el café tanto como a ti</strong>.
        </h2>
        <p>
          Por eso, ofrecemos una amplia selección de suministros de alta calidad
          para que disfrutes de una experiencia cafetera excepcional en todo
          momento. Desde granos de café premium, pasando por equipos de
          preparación de última tecnología, hasta accesorios exclusivos para
          baristas y amantes del café.
        </p>

        <h3>Nuestros productos incluyen:</h3>
        <ul>
          <li>
            <strong>Granos de café:</strong> De las mejores fincas,
            seleccionados cuidadosamente para brindarte un sabor único en cada
            taza.
          </li>
          <li>
            <strong>Máquinas de café:</strong> Para todos los gustos y
            necesidades, desde pequeñas cafeteras domésticas hasta equipos
            profesionales.
          </li>
          <li>
            <strong>Accesorios:</strong> Molinillos, filtros, tazas
            personalizadas y mucho más, para que tengas todo lo necesario en tu
            ritual cafetera.
          </li>
          <li>
            <strong>Equipos de barista:</strong> Si eres un profesional, tenemos
            todo lo que necesitas para llevar tus habilidades al siguiente
            nivel.
          </li>
        </ul>

        <h3>¿Por qué elegirnos?</h3>
        <ul>
          <li>Productos de alta calidad seleccionados con cuidado.</li>
          <li>Envíos rápidos y seguros.</li>
          <li>
            Asesoramiento especializado para que encuentres exactamente lo que
            buscas.
          </li>
        </ul>

        <p>
          Explora nuestro catálogo y lleva tu pasión por el café a nuevas
          alturas. ¡Tu próxima taza perfecta te espera!
        </p>
      </div>
    </div>
  );
};

export default About;
