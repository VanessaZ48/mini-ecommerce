import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("Cart persistence", () => {
  beforeEach(() => {
    localStorage.clear(); // Limpia antes de cada prueba
  });

  test("mantiene los productos del carrito después de recargar (persistencia)", () => {
    render(<App />);

    // Buscar y hacer clic en el primer botón "Agregar al carrito"
    const addButtons = screen.getAllByText(/agregar al carrito/i);
    fireEvent.click(addButtons[0]);

    // Verificar que el carrito se haya guardado en localStorage
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    expect(cartItems.length).toBeGreaterThan(0);

    // Simular un "reload" del componente
    render(<App />);

    // Verificar que los productos sigan estando después del "reload"
    const persistedCart = JSON.parse(localStorage.getItem("cart")) || [];
    expect(persistedCart.length).toBeGreaterThan(0);
  });
});
