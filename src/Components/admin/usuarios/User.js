import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function User() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null); // Cambiado a null para manejar mejor el estado inicial

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch(
      "https://apibackend-one.vercel.app/api/usuarios"
    );
    const data = await response.json();
    setUsers(data);
  };

  const deleteUser = async (id) => {
    await fetch(`https://apibackend-one.vercel.app/api/usuarios/${id}`, {
      method: "DELETE",
    });
    Swal.fire("Eliminado!", "El usuario ha sido eliminado.", "success");
    fetchUsers(); // Recargar la lista de usuarios después de eliminar
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditingUser({ ...editingUser, [name]: value });
  };

  const saveUser = async () => {
    await fetch(
      `https://apibackend-one.vercel.app/api/usuarios/${editingUser._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editingUser),
      }
    );
    Swal.fire(
      "Actualizado",
      "El usuario ha sido actualizado con éxito",
      "success"
    );
    setEditingUser(null); // Cerrar el modal de edición
    fetchUsers(); // Recargar la lista de usuarios para reflejar los cambios
  };

  return (
    <div>
      <h2>Usuarios</h2>
      <Link to="/insert-user">
        <button>Agregar Usuario</button>
      </Link>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.nombre} - {user.apellido} - {user.correo} - {user.contraseña}{" "}
            - {user.telefono} - {user.tipo} - {user.preguntaRecuperacion} -{" "}
            {user.respuestaPregunta} - {user.dispositivo}
            <button onClick={() => setEditingUser(user)}>Editar</button>
            <button onClick={() => deleteUser(user._id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      {editingUser && (
        <div>
          <h2>Editar Usuario</h2>
          <input
            name="nombre"
            value={editingUser.nombre || ""}
            onChange={handleEditChange}
          />
          <input
            name="apellido"
            value={editingUser.apellido || ""}
            onChange={handleEditChange}
          />
          <input
            name="correo"
            value={editingUser.correo || ""}
            onChange={handleEditChange}
          />
          <input
            name="contraseña"
            value={editingUser.contraseña || ""}
            onChange={handleEditChange}
          />
          <input
            name="telefono"
            value={editingUser.telefono || ""}
            onChange={handleEditChange}
          />
          <input
            name="tipo"
            value={editingUser.tipo || ""}
            onChange={handleEditChange}
          />
          <input
            name="preguntaRecuperacion"
            value={editingUser.preguntaRecuperacion || ""}
            onChange={handleEditChange}
          />
          <input
            name="respuestaPregunta"
            value={editingUser.respuestaPregunta || ""}
            onChange={handleEditChange}
          />
          <input
            name="dispositivo"
            value={editingUser.dispositivo || ""}
            onChange={handleEditChange}
          />
          {/* Incluye aquí los demás campos que necesitas editar */}
          <button onClick={saveUser}>Guardar Cambios</button>
          <button onClick={() => setEditingUser(null)}>Cancelar</button>
        </div>
      )}
    </div>
  );
}

export default User;
