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
