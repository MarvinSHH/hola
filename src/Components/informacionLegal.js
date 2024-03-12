import React from 'react'
import styles from "./estilos";
import imgHome from '../assets/imgHome2.jpg';
import colores from './paletaColores.js'; // Ajusta la ruta de importación según tu estructura de directorios


function Legal() {

  return (
    <div style={{...styles.home, backgroundColor: colores.fondoPrincipal}}>
      

      <header style={{ ...styles.hero, backgroundImage: `url(${imgHome})` }}>
        <h1 >Información Legal</h1>
        <p>Conoce más sobre las políticas de nuestra empresa.</p>
      </header>

      <section style={styles.textDesc}>
        <h3 style={{ color: colores.negro }}>Políticas de la Empresa</h3>
        <p style={{ color: colores.negro }}>
          Aquí podrás encontrar toda la información relacionada con las políticas de Planeta Mascotas, 
          incluyendo términos y condiciones, políticas de privacidad, políticas de devolución y más.
          Es importante que nuestros clientes y usuarios entiendan las normativas que rigen nuestros 
          servicios y productos.
        </p>
        {/* Ejemplo de subsecciones para diferentes políticas */}
        <h4 style={{ color: colores.negro }}>Términos y Condiciones</h4>
        <p style={{ color: colores.negro }}>
          Los términos y condiciones son... (texto largo).
        </p>
        <h4 style={{ color: colores.negro }}>Política de Privacidad</h4>
        <p style={{ color: colores.negro }}>
          Nuestra política de privacidad establece... (texto largo).
        </p>
        <h4 style={{ color: colores.negro }}>Política de Devoluciones</h4>
        <p style={{ color: colores.negro }}>
          Si necesitas devolver un producto... (texto largo).
        </p>
      </section>

      {/* Otras secciones legales como FAQ, contacto legal, etc. */}
      <section style={styles.features}>
        <h2 style={{ color: colores.negro }}>Otras Informaciones Legales</h2>
        {/* Contenido adicional */}
      </section>

    </div>
  );
};

export default Legal

