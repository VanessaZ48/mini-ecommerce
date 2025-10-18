import React, { useState } from "react";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Gracias ${formData.nombre}, tu mensaje ha sido enviado con éxito.`);
    setFormData({ nombre: "", correo: "", mensaje: "" });
  };

  return (
    <div
      style={{
        backgroundColor: "#e9eef3",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "15px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
          padding: "40px",
          maxWidth: "500px",
          width: "100%",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#003366",
            marginBottom: "25px",
          }}
        >
          📩 Contáctanos
        </h2>

        <form onSubmit={handleSubmit}>
          <label style={labelStyle}>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            style={inputStyle}
            required
          />

          <label style={labelStyle}>Correo electrónico:</label>
          <input
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            style={inputStyle}
            required
          />

          <label style={labelStyle}>Mensaje:</label>
          <textarea
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            style={{ ...inputStyle, height: "120px", resize: "none" }}
            required
          />

          <button type="submit" style={buttonStyle}>
            Enviar mensaje
          </button>
        </form>
      </div>
    </div>
  );
}

// 🔹 Estilos reutilizables
const labelStyle = {
  display: "block",
  fontWeight: "bold",
  color: "#003366",
  marginBottom: "6px",
  marginTop: "12px",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  fontSize: "15px",
  outline: "none",
};

const buttonStyle = {
  backgroundColor: "#004080",
  color: "white",
  border: "none",
  padding: "12px 20px",
  borderRadius: "8px",
  fontWeight: "bold",
  width: "100%",
  marginTop: "20px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
};
