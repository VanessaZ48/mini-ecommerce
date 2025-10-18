import React from "react"; // Importa React para poder usar JSX

// Componente principal de la página de inicio
export default function Home() {
  return (
    // Estilos
    <div
      style={{
        display: "flex", // Usa flexbox para centrar el contenido
        justifyContent: "center", // Centra horizontalmente
        alignItems: "center", // Centra verticalmente
        flexDirection: "column", // Ordena los elementos en columna
        height: "50vh", // Ocupa la mitad de la altura de la pantalla
        backgroundColor: "#e6e9ef", // Fondo gris claro
        textAlign: "center", // Centra el texto
        color: "#003366", // Azul oscuro para el texto
        borderBottom: "4px solid #007bff", // Línea azul decorativa inferior
        boxShadow: "inset 0 2px 10px rgba(0,0,0,0.1)", // Sombra interior suave
      }}
    >
      {/* Título principal de bienvenida */}
      <h1
        style={{
          fontSize: "36px",
          fontWeight: "bold",
          marginBottom: "10px",
        }}
      >
        ¡Bienvenido a Ferrero Machines!
      </h1>

      {/* Texto descriptivo de la empresa */}
      <p
        style={{
          fontSize: "18px",
          maxWidth: "700px",
          color: "#333",
        }}
      >
        Somos líderes en la fabricación de maquinaria innovadora para la
        producción de empanadas y arepas. ¡Haz crecer tu negocio con la mejor
        tecnología!
      </p>
    </div>
  );
}
