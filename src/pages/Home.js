import React from "react";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "50vh",
        backgroundColor: "#e6e9ef", // gris claro
        textAlign: "center",
        color: "#003366",
        borderBottom: "4px solid #007bff",
        boxShadow: "inset 0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h1
        style={{
          fontSize: "36px",
          fontWeight: "bold",
          marginBottom: "10px",
        }}
      >
        ¡Bienvenido a Ferrero Machines!
      </h1>
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
