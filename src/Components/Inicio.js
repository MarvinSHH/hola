import React from "react";
import styles from "./estilos";
import imgHome from '../assets/imgHome2.jpg';


const MainContent = () => {
  return (
    <div style={styles.home}>

      <header style={{ ...styles.hero, backgroundImage: `url(${imgHome})` }}>
        <h1>Bienvenido a Planeta Mascotas</h1>
        <p>Descubre nuestros servicios y cómo podemos ayudarte a crecer.</p>
      </header>
      
{/* Para esta seccion que sigue en teoria tiene que traer los datos desde la base de datos, entonces se tiene que modificar 
para que se traigan todos los datos desde la base */}

      <section style={styles.textDesc}>
        <h3>Descripcion de la empresa</h3>
        <p>

          Planeta Mascotas es una empresa líder en el mercado
          de productos para mascotas, dedicada a ofrecer una amplia
          gama de accesorios de alta calidad y diseño innovador para
          el mejor amigo del hombre. Fundada en 2023, Planeta Mascotas
          ha crecido rápidamente para convertirse en una marca de confianza entre
          los dueños de mascotas que buscan productos que no solo satisfagan las necesidades
          de sus animales, sino que también complementen su estilo de vida moderno.
          <br />
          <br />
          Nuestro catálogo incluye una variedad de productos, desde collares y correas
          con diseños exclusivos, hasta camas cómodas y juguetes interactivos que promueven la
          actividad física y mental de las mascotas. Con un fuerte compromiso hacia la innovación,
          Planeta Mascotas está constantemente explorando nuevos materiales y tecnologías para
          garantizar que cada producto no solo sea estéticamente atractivo, sino también
          funcional y duradero.
        </p>
      </section>

      <section style={styles.features}>
        <h2>Nuestros Productos más Vendidos</h2>
        <div style={styles.featureContainer}>
          <div style={styles.feature}>
            <h3>Producto #1</h3>
            <p>Descripción breve del producto ofrecido.</p>
            <button style={styles.featureBoton}>Ver detalles</button>
          </div>
          <div style={styles.feature}>
            <h3>Producto #2</h3>
            <p>Descripción breve del producto ofrecido.</p>
            <button style={styles.featureBoton}>Ver detalles</button>
          </div>
          <div style={styles.feature}>
            <h3>Producto #3</h3>
            <p>Descripción breve del producto ofrecido.</p>
            <button style={styles.featureBoton}>Ver detalles</button>
          </div>
          <div style={styles.featureImg}></div>
        </div>
      </section>

    </div>
  );
};
export default MainContent;
