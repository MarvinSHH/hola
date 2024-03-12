// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Inicio from './Components/Inicio';
import Producto from './Components/Producto';
import Login from './Components/Login';
import Formulario from './Components/Formulario';
import Legal from './Components/informacionLegal.js';
// import nombre de la funcion/componente from lugar de donde viene
import styles from './Components/estilos.js'; 

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <div style={styles.body}>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/productos" element={<Producto />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registrarse/*" element={<Formulario />} />
            <Route path="/legal" element={<Legal />} />
            {/* Para poder usar link para navegar se tienen que defiinir aqui 
            usando todo como esta, ponienndo la ruta y el renderizazdo, y definiendolo al principio */}
          </Routes>
        </div>
      </main>
      <Footer />
    </Router>
  );
};

export default App;

// cntrl + k cntrl + c para comentar
// rfce para estructurar el formato react base 