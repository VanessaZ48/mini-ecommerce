import React from "react";

// Importa las herramientas de prueba de React Testing Library
import { render, screen } from "@testing-library/react";

// Importa el componente principal de la aplicación
import App from "./App";

/* TEST 1: Verificar encabezado */

test("renders Ferrero Machines header", () => {
  // Renderiza el componente App en un entorno de prueba
  render(<App />);

  // Busca todos los elementos que contengan el texto "Ferrero Machines" (sin importar mayúsculas/minúsculas)
  const headerElements = screen.getAllByText(/Ferrero Machines/i);

  // Verifica que el primer elemento encontrado esté presente en el documento
  expect(headerElements[0]).toBeInTheDocument();
});

/* TEST 2: Verificar botón flotante carrito */

test("renders floating cart button", () => {
  // Renderiza el componente App en un entorno de prueba
  render(<App />);

  // Obtiene todos los elementos con rol "button"
  const buttons = screen.getAllByRole("button");

  // Busca el botón cuyo texto sea únicamente el emoji del carrito 🛒
  const floatingButton = buttons.find(btn => btn.textContent.trim() === "🛒");

  // Verifica que el botón del carrito esté presente en el documento
  expect(floatingButton).toBeInTheDocument();
});
