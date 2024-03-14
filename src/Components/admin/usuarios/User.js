import React from "react";
import { Link } from "react-router-dom"; // Importa el componente Link de React Router

function User() {
  return (
    <div>
      Usuarios
      <Link to="/InsertUser">
        <button> Agregar usuario</button>
      </Link>
    </div>
  );
}

export default User;
