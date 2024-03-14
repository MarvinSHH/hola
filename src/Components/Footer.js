import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styles from "./estilos";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div style={styles.footerDatos}>
        <div style={styles.datos}>
          <Link to={'/about'}>¿Quienes Somos?</Link>
          {/* aqui se define a donde te lleva el enlace nombrandolo desde como esta registrado en appjs */}
          <Link to={'/legal'}>Informacion Legal</Link>
          <Link to={'/contact'}>Contactanos</Link>
        </div>
        <div style={styles.redes}>
          Redes Sociales<br />
          <div style={styles.icons}>
            <a>[  ]</a>
            <a>[  ]</a>
            <a>[  ]</a>
            <a>[  ]</a>
          </div>
        </div>
        <div style={styles.datos}>
          <a>Contactanos</a>
          Direccion: Av.Mexico<br />
          Telefono:7711223344<br />
          Correo:worldPet@gmail.com<br />

        </div>
      </div>

      <div style={styles.footer}>
        &copy; Sitio desarrollado por PM-Planeta-Mascotas 2024
      </div>
    </footer>

  );
};


export default Footer;
