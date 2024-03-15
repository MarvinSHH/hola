import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function User() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://apibackend-one.vercel.app/api/usuarios"
      );
      if (!response.ok) throw new Error("No se pudieron obtener los usuarios");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: `Error al obtener usuarios: ${error.message}`,
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await fetch(
        `https://apibackend-one.vercel.app/api/usuarios/${id}`,
        { method: "DELETE" }
      );
      if (!response.ok) throw new Error("Error al eliminar usuario");
      Swal.fire(
        "Eliminado",
        "El usuario ha sido eliminado con éxito",
        "success"
      );
      fetchUsers(); // Actualiza la lista después de eliminar
    } catch (error) {
      Swal.fire(
        "Error",
        `No se pudo eliminar el usuario: ${error.message}`,
        "error"
      );
    }
  };

  const showEditModal = (user) => {
    setEditingUser(user);
    setIsEditing(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditingUser((prev) => ({ ...prev, [name]: value }));
  };

  const saveUser = async () => {
    try {
      const response = await fetch(
        `https://apibackend-one.vercel.app/api/usuarios/${editingUser._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editingUser),
        }
      );
      if (!response.ok) throw new Error("Error al actualizar usuario");

      // Asumiendo que la API devuelve el usuario actualizado correctamente
      const updatedUser = await response.json();

      // Actualizamos el estado de `users` de forma que refleje la actualización
      setUsers((currentUsers) =>
        currentUsers.map((user) =>
          user._id === updatedUser._id ? { ...user, ...updatedUser } : user
        )
      );

      Swal.fire(
        "Actualizado",
        "El usuario ha sido actualizado con éxito",
        "success"
      );
      setIsEditing(false);
    } catch (error) {
      Swal.fire(
        "Error",
        `No se pudo actualizar el usuario: ${error.message}`,
        "error"
      );
    }
  };

  return (
    <div>
      <h2>Usuarios</h2>
      <Link to="/InsertUser">
        <button>Agregar usuario</button>
      </Link>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {`${user.nombre} ${user.apellido} - ${user.correo} - ${user.contraseña} - ${user.telefono} - ${user.tipo} - ${user.preguntaRecuperacion} - ${user.respuestaPregunta} - ${user.dispositivo}`}
            <button onClick={() => showEditModal(user)}>Editar</button>
            <button onClick={() => deleteUser(user._id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      {isEditing && (
        <div
          style={{
            position: "fixed",
            top: "20%",
            left: "30%",
            backgroundColor: "white",
            padding: "20px",
            zIndex: 100,
          }}
        >
          <h2>Editar Usuario</h2>
          {/* Aquí, cada campo a editar, asegurándote de que cada input tenga el valor del estado editingUser y onChange maneje los cambios */}
          {/* Ejemplo: */}
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={editingUser.nombre}
            onChange={handleEditChange}
          />
          <label>Apellido:</label>

          <input
            type="texto"
            name="apellido"
            placeholder="Apellido"
            value={editingUser.apellido}
            onChange={handleEditChange}
          />
          <etiqueta>Correo electrónico:</etiqueta>

          <input
            type="correo electrónico"
            name="correo"
            placeholder="Correo"
            value={editingUser.correo}
            onChange={handleEditChange}
          />
          <label>Contraseña:</label>
          <input
            type="contraseña"
            name="contraseña"
            placeholder="contraseña"
            value={editingUser.contraseña}
            onChange={handleEditChange}
          />
          <label>teléfono:</label>

          <input
            type="texto"
            name="telefono"
            placeholder="Teléfono"
            value={editingUser.telefono}
            onChange={handleEditChange}
          />
          <label>Tipo:</label>
          <select
            name="tipo"
            value={editingUser.tipo}
            handleEditChange={handleEditChange}
          >
            <option value="usuario">Usuario</option>
            <option value="administrador">Administrador</option>
          </select>

          <label>Pregunta de Recuperación:</label>
          <select
            name="preguntaRecuperación"
            value={editingUser.preguntaRecuperacion}
            onChange={handleEditChange}
          >
            <option value="colorFavorito">Color favorito</option>
            <option value="nombreMascota">Nombre de tu mascota</option>
            <option value="mejorAmigo">Mejor Amigo</option>
          </select>

          <label>Respuesta:</label>
          <input
            type="texto"
            name="respuestaPregunta"
            placeholder="Respuesta de Pregunta"
            value={editingUser.respuestaPregunta}
            onChange={handleEditChange}
          />
          <label>Dispositivo:</label>

          <input
            type="texto"
            name="dispositivo"
            placeholder="Dispositivo"
            value={editingUser.dispositivo}
            onChange={handleEditChange}
          />
          {/* Repite para los demás campos */}
          <button onClick={saveUser}>Guardar Cambios</button>
          <button onClick={() => setIsEditing(false)}>Cancelar</button>
        </div>
      )}
    </div>
  );
}

export default User;
