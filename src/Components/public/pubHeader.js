import React from 'react'

function PubHeader() {
    
  return (
    <header style={styles.header}>
      <div style={styles.head}>
        <div style={styles.logo}>
          <img style={styles.logo} src={imgLogo} alt="Logo"/>
        </div>
        <div style={styles.navStyles}>
          <nav style={styles.navLinks}>
            <Link to="/" style={styles.navLink}>Inicio</Link>
            <link to="/" style={styles.navLink}>Dispositivo</link>
            <Link to="/productos" style={styles.navLink}>Productos</Link>
            <Link to="/registrarse" style={styles.navLink}>Cerrar Sesion</Link>
            
          </nav>
        </div>
      </div>
    </header>
  );
};

export default PubHeader
