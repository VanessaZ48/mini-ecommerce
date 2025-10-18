import React from "react";

export default function Carrito({ cart, setCart }) {
  const removeItem = (id) => setCart(cart.filter((i) => i.id !== id));

  const updateQuantity = (id, qty) => {
    const q = parseInt(qty, 10);
    if (isNaN(q) || q < 1) return;
    setCart(cart.map((i) => (i.id === id ? { ...i, quantity: q } : i)));
  };

  const getTotal = () => cart.reduce((s, i) => s + i.price * (i.quantity || 0), 0);

  const handlePay = () => {
    alert(" Gracias por tu compra. ¡Ferrero Machines aprecia tu preferencia!");
    setCart([]);
    localStorage.removeItem("cart"); // Limpia el almacenamiento
  };

  return (
    <div style={{ padding: 12, width: 350 }}>
      <h3 style={{ marginTop: 0 }}>🛒 Carrito</h3>

      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <div style={{ maxHeight: 300, overflowY: "auto" }}>
            {cart.map((item) => (
              <div key={item.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", borderBottom: "1px solid #eee" }}>
                <div style={{ maxWidth: 190 }}>
                  <strong style={{ display: "block" }}>{item.name}</strong>
                  <small>${item.price.toLocaleString()}</small>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, e.target.value)}
                    style={{ width: 60, textAlign: "center" }}
                  />
                  <button onClick={() => removeItem(item.id)} style={{ background: "#dc3545", color: "white", border: "none", padding: "6px 8px", borderRadius: 6, cursor: "pointer" }}>
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 10 }}>
            <h4 style={{ textAlign: "right", margin: "10px 0" }}>Total: ${getTotal().toLocaleString()}</h4>
            <button onClick={handlePay} style={{ width: "100%", background: "#28a745", color: "white", border: "none", padding: "10px", borderRadius: 6, cursor: "pointer" }}>
              Pagar
            </button>
          </div>
        </>
      )}
    </div>
  );
}
