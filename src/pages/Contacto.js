import React from "react";

export default function Contacto() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>📞 Contáctanos</h2>
      <p>
        Si deseas más información sobre nuestras máquinas o servicios, por favor completa el formulario.
      </p>
      <form style={{ maxWidth: "400px" }}>
        <label>Nombre:</label><br />
        <input type="text" style={{ width: "100%", marginBottom: "10px" }} /><br />
        <label>Correo:</label><br />
        <input type="email" style={{ width: "100%", marginBottom: "10px" }} /><br />
        <label>Mensaje:</label><br />
        <textarea rows="4" style={{ width: "100%", marginBottom: "10px" }}></textarea><br />
        <button
          type="submit"
          style={{
            backgroundColor: "#0d6efd",
            color: "white",
            border: "none",
            padding: "10px 15px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
