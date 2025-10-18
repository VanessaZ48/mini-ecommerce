import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Ferrero Machines header", () => {
  render(<App />);
  const headerElements = screen.getAllByText(/Ferrero Machines/i);
  expect(headerElements[0]).toBeInTheDocument();
});

test("renders floating cart button", () => {
  render(<App />);
  // Busca todos los botones
  const buttons = screen.getAllByRole("button");
  // Encuentra el que solo contiene el emoji "🛒"
  const floatingButton = buttons.find(btn => btn.textContent.trim() === "🛒");
  expect(floatingButton).toBeInTheDocument();
});