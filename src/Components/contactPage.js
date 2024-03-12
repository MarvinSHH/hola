import React from "react";

const mapURL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1327.4641905758356!2d-98.41780097519809!3d21.14451916710501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d7268fc840682f%3A0x9d5b1123cf856c9b!2sClínica%20y%20Farmacia%20Veterinaria%20Salud%20Animal!5e0!3m2!1ses-419!2smx!4v1710225006458!5m2!1ses-419!2smx";

const contactStyles = {
  contactContainer: {
    padding: "2rem",
    backgroundColor: "#daebff",
    minHeight: "100vh",
  },
  contactHeader: {
    fontSize: "2rem",
    color: "#001449",
    marginBottom: "1rem",
  },
  contactContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "2rem",
  },
  contactInfo: {
    backgroundColor: "#fafafa",
    borderRadius: "0.5rem",
    padding: "2rem",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    flex: "1",
    marginRight: "1rem",
    minWidth: "300px",
  },
  contactMap: {
    border: "0",
    borderRadius: "0.5rem",
    overflow: "hidden",
    height: "300px",
    width: "650px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    flex: "1",
    minWidth: "300px",
  },
  contactList: {
    listStyle: "none",
    padding: "0",
  },
  contactListItem: {
    marginBottom: "0.5rem",
  },
  contactLink: {
    color: "#0CB7F2",
    textDecoration: "none",
  },
};

const ContactPage = () => {
  return (
    <div style={contactStyles.contactContainer}>
      <h1 style={contactStyles.contactHeader}>Información de Contacto</h1>
      <div style={contactStyles.contactContent}>
        <div style={contactStyles.contactInfo}>
          <h2>Planeta Mascotas</h2>
          <ul style={contactStyles.contactList}>
            <li style={contactStyles.contactListItem}>123 Mascota Feliz, Ciudad Animal, PA 101010</li>
            <li style={contactStyles.contactListItem}>Teléfono: (123) 456-7890</li>
            <li style={contactStyles.contactListItem}>Email: contacto@planetamascotas.com</li>
            <li style={contactStyles.contactListItem}>
              Web: <a style={contactStyles.contactLink} href="https://www.planetamascotas.com">www.planetamascotas.com</a>
            </li>
          </ul>
        </div>
        <iframe
          src={mapURL}
          style={contactStyles.contactMap}
          allowFullScreen
          loading="lazy"
          title="Ubicación de Planeta Mascotas"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
