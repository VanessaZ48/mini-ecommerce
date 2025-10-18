import React from "react";

export default function Nosotros() {
  return (
    <div
      style={{
        backgroundColor: "#e9eef3", // Fondo gris claro para resaltar el texto
        padding: "50px 20px", // Espaciado interno
        textAlign: "center", // Centra todo el contenido
        color: "#003366", // Azul oscuro para los títulos
        minHeight: "60vh", // Ocupa buena parte de la pantalla
      }}
    >
      {/* Título principal */}
      <h2
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          marginBottom: "20px",
          borderBottom: "4px solid #007bff", // Línea decorativa azul
          display: "inline-block",
          paddingBottom: "8px",
        }}
      >
        Sobre Nosotros
      </h2>

      {/* Contenedor del texto en formato más ancho */}
      <div
        style={{
          maxWidth: "800px", // Ancho máximo para mejorar lectura
          margin: "0 auto", // Centra el bloque
          color: "#333", // Color de texto más suave
          fontSize: "18px",
          lineHeight: "1.6", // Espaciado entre líneas
        }}
      >
        <p>
          En <strong>Ferrero Machines</strong> combinamos ingeniería, innovación y precisión
          para ofrecer maquinaria de alto rendimiento para la industria alimentaria.
        </p>
        <p>
          Nuestro compromiso es mejorar la eficiencia de producción con tecnología confiable,
          diseñada y fabricada bajo los más altos estándares de calidad.
        </p>
        <p>
          Cada una de nuestras máquinas está pensada para optimizar procesos, reducir costos
          y garantizar productos de excelente calidad. Apostamos por la innovación para
          impulsar el crecimiento de tu negocio.
        </p>
      </div>

      {/* Imagen ilustrativa */}
      <img
        src="/OPTI Patty Maker.jpg" 
        alt="Equipo Ferrero Machines"
        style={{
          marginTop: "30px",
          width: "80%",
          maxWidth: "600px",
          borderRadius: "15px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        }}
      />
    </div>
  );
}
