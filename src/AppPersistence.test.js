
// render: monta el componente en un entorno de prueba
// screen: permite acceder a los elementos renderizados
// fireEvent: simula interacciones del usuario (clics, etc.)
import { render, screen, fireEvent } from "@testing-library/react";

// Importa el componente principal de la aplicación
import App from "./App";

/* GRUPO DE PRUEBAS: Persistencia del carrito de compras */
describe("Cart persistence", () => {

  // Se ejecuta antes de cada prueba individual
  beforeEach(() => {
    // Limpia el localStorage para comenzar cada test desde cero
    localStorage.clear();
  });

  /* TEST: Verificar que el carrito mantiene los productos después de una "recarga" (persistencia) */
  test("mantiene los productos del carrito después de recargar (persistencia)", () => {
    // Renderiza el componente principal
    render(<App />);

    // Busca todos los botones que contienen el texto "Agregar al carrito"
    const addButtons = screen.getAllByText(/agregar al carrito/i);

    // Simula un clic en el primer botón encontrado
    fireEvent.click(addButtons[0]);

    // Obtiene el contenido del carrito desde localStorage
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    // Verifica que el carrito tenga al menos un producto guardado
    expect(cartItems.length).toBeGreaterThan(0);

    // Simula recargar la página (vuelve a renderizar App)
    render(<App />);

    // Vuelve a obtener el carrito desde localStorage
    const persistedCart = JSON.parse(localStorage.getItem("cart")) || [];

    // Comprueba que los productos siguen presentes tras el "reload"
    expect(persistedCart.length).toBeGreaterThan(0);
  });
});
