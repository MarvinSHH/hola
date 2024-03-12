import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import imgLogo from '../../../assets/logoP.png';
import styles from '../../estilos';

function PrivHeader() {
    const [showSubMenu, setShowSubMenu] = useState(false);

    const toggleSubMenu = (e) => {
        // Previene que el evento de clic se propague al header
        e.stopPropagation();
        setShowSubMenu(!showSubMenu);
    };

    // Cierra el submenú si se hace clic fuera de él
    const closeSubMenu = () => {
        if (showSubMenu) {
            setShowSubMenu(false);
        }
    };

    // Agregar el event listener a `window` para cerrar el submenú cuando se haga clic fuera
    React.useEffect(() => {
        window.addEventListener('click', closeSubMenu);

        // Limpiar el event listener al desmontar el componente
        return () => {
            window.removeEventListener('click', closeSubMenu);
        };
    }, [showSubMenu]); // Se ejecutará nuevamente si `showSubMenu` cambia

    return (
        <header style={styles.header} onClick={closeSubMenu}>
            <div style={styles.head}>
                <div style={styles.logo}>
                    <img src={imgLogo} style={styles.logo} alt="Logo" />
                </div>
                <div style={styles.navStyles}>
                    <nav style={styles.navLinks}>
                        <div
                            style={styles.navLink}
                            onClick={toggleSubMenu} // Usar onClick aquí
                        >
                            <Link to="" style={styles.navLink}>Administrador --</Link>

                            {showSubMenu && (
                                <div style={styles.subMenu}>
                                    <Link to="/admin/opcion1" style={styles.subNavLink}>Opción 1</Link>
                                    <Link to="/admin/opcion2" style={styles.subNavLink}>Opción 2</Link>
                                    {/* Más enlaces del submenú */}
                                </div>
                            )}
                        </div>
                        <Link to="/" style={styles.navLink}>Inicio</Link>
                        <Link to="/productos" style={styles.navLink}>Productos</Link>
                        <Link to="/registrarse" style={styles.navLink}>Cerrar Sesion</Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default PrivHeader;


