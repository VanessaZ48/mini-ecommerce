import React, { useState } from "react";

export default function Carrito({ cart, setCart }) {
  const [visible, setVisible] = useState(false);

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const getTotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const handlePay = () => {
    alert("🎉 Gracias por tu compra. ¡Ferrero Machines aprecia tu preferencia!");
    setCart([]);
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: parseInt(quantity) } : item
      )
    );
  };

  return (
    <>
      {/* 🛒 Botón flotante del carrito */}
      <button
        onClick={() => setVisible(!visible)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#0d6efd",
          color: "white",
          border: "none",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
          cursor: "pointer",
          fontSize: "26px",
        }}
      >
        🛒
      </button>

      {/* 🧾 Contenedor del carrito (solo visible si se abre) */}
      {visible && (
        <div
          style={{
            position: "fixed",
            bottom: "90px",
            right: "20px",
            width: "300px",
            maxHeight: "400px",
            overflowY: "auto",
            backgroundColor: "white",
            border: "1px solid #ddd",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            padding: "15px",
            zIndex: 1000,
          }}
        >
          <h3 style={{ textAlign: "center" }}>Carrito</h3>

          {cart.length === 0 ? (
            <p>Tu carrito está vacío.</p>
          ) : (
            <div>
              {cart.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderBottom: "1px solid #eee",
                    padding: "8px 0",
                  }}
                >
                  <div>
                    <h5 style={{ margin: "0" }}>{item.name}</h5>
                    <p style={{ margin: "0", fontSize: "14px" }}>
                      ${item.price.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) =>
                        updateQuantity(item.id, e.target.value)
                      }
                      style={{
                        width: "45px",
                        marginRight: "5px",
                        textAlign: "center",
                      }}
                    />
                    <button
                      onClick={() => removeItem(item.id)}
                      style={{
                        backgroundColor: "#dc3545",
                        color: "white",
                        border: "none",
                        padding: "3px 6px",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}

              <h4 style={{ textAlign: "right" }}>
                Total: ${getTotal().toLocaleString()}
              </h4>
              <button
                onClick={handlePay}
                style={{
                  width: "100%",
                  backgroundColor: "#28a745",
                  color: "white",
                  border: "none",
                  padding: "10px 0",
                  borderRadius: "5px",
                  cursor: "pointer",
                  marginTop: "10px",
                }}
              >
                Pagar
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
