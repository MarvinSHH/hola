// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Vistas de la parte libre a los usuarios
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Inicio from "./Components/Inicio";
import Producto from "./Components/Producto";
import Login from "./Components/Login";
import Formulario from "./Components/Formulario";

//Carga las visatas del footer
import Legal from "./Components/informacionLegal.js";
import AboutUs from "./Components/aboutUs.js";
import ContactPage from "./Components/contactPage.js";
// import nombre de la funcion/componente from lugar de donde viene
import styles from "./Components/estilos.js";

// Estos van a ser las vistas para la parte privada
import PrivHeader from "./Components/admin/views/PrivHeader.js";

//Esto va para las vistas de la parte publica, del usuario
import PubHeader from "./Components/public/pubHeader.js";

//admin
import Product from "./Components/admin/productos/Product.js";
import InsertProduct from "./Components/admin/productos/InsertProduct.js";
import User from "./Components/admin/usuarios/User.js";
import InsertUser from "./Components/admin/usuarios/InsertUser.js";

const App = () => {
  return (
    <Router>
      {/* <Header /> */}
      <PrivHeader />
      {/* <PubHeader /> */}
      <main>
        <div style={styles.body}>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/productos" element={<Producto />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registrarse/*" element={<Formulario />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/product" element={<Product />} />
            <Route path="/user" element={<User />} />
            <Route path="/insert-product" element={<InsertProduct />} />;
            <Route path="/InsertUser" element={<InsertUser />} />;
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
