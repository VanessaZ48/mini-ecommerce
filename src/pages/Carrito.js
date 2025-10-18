import React from "react";

// Definimos el componente funcional "Carrito" 
// cart: el arreglo con los productos del carrito
// setCart: la función para actualizar el estado del carrito
export default function Carrito({ cart, setCart }) {

  // Elimina un producto del carrito por su ID
  const removeItem = (id) => setCart(cart.filter((i) => i.id !== id));

  // Actualiza la cantidad de un producto
  // Si el valor ingresado no es válido o menor que 1, no hace nada
  const updateQuantity = (id, qty) => {
    const q = parseInt(qty, 10); // Convertimos el valor a número entero
    if (isNaN(q) || q < 1) return; // Validamos que sea un número positivo
    // Recorremos el carrito y actualizamos solo el producto que coincide con el id
    setCart(cart.map((i) => (i.id === id ? { ...i, quantity: q } : i)));
  };

  // Calcula el total de la compra
  // Multiplica el precio por la cantidad de cada producto y los suma todos
  const getTotal = () => cart.reduce((s, i) => s + i.price * (i.quantity || 0), 0);

  // Simula el proceso de pago
  // Muestra un mensaje de agradecimiento, limpia el carrito y el localStorage
  const handlePay = () => {
    alert("Gracias por tu compra. ¡Ferrero Machines aprecia tu preferencia!");
    setCart([]); // Vaciamos el carrito 
    localStorage.removeItem("cart"); // Borramos los datos guardados
  };

  // Retorno del componente (interfaz visual del carrito)
  return (
    <div style={{ padding: 12, width: 350 }}>
      <h3 style={{ marginTop: 0 }}>🛒 Carrito</h3>

      {/* Si el carrito está vacío mostramos un mensaje */}
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          {/* Lista de productos en el carrito */}
          <div style={{ maxHeight: 300, overflowY: "auto" }}>
            {cart.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "8px 0",
                  borderBottom: "1px solid #eee",
                }}
              >
                {/* Información del producto */}
                <div style={{ maxWidth: 190 }}>
                  <strong style={{ display: "block" }}>{item.name}</strong>
                  <small>${item.price.toLocaleString()}</small>
                </div>

                {/* Controles: cantidad y botón de eliminar */}
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, e.target.value)}
                    style={{ width: 60, textAlign: "center" }}
                  />

                  <button
                    onClick={() => removeItem(item.id)}
                    style={{
                      background: "#dc3545",
                      color: "white",
                      border: "none",
                      padding: "6px 8px",
                      borderRadius: 6,
                      cursor: "pointer",
                    }}
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Total de la compra y botón de pago */}
          <div style={{ marginTop: 10 }}>
            <h4 style={{ textAlign: "right", margin: "10px 0" }}>
              Total: ${getTotal().toLocaleString()}
            </h4>

            <button
              onClick={handlePay}
              style={{
                width: "100%",
                background: "#28a745",
                color: "white",
                border: "none",
                padding: "10px",
                borderRadius: 6,
                cursor: "pointer",
              }}
            >
              Pagar
            </button>
          </div>
        </>
      )}
    </div>
  );
}
