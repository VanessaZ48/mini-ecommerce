import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import Contacto from "./pages/Contacto";
import Carrito from "./pages/Carrito";

  function App() {
  // ✅ Estado inicial con persistencia directa
    const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  const [showCart, setShowCart] = useState(false);

  // ✅ Guardar carrito cada vez que cambia
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Calcular cantidad total en el carrito
  const cartCount = cart.reduce((total, item) => total + (item.quantity || 0), 0);

  return (
    <Router>
      <div
        style={{
          fontFamily: "'Poppins', sans-serif",
          backgroundColor: "#f4f6f8",
          minHeight: "100vh",
        }}
      >
        {/* ENCABEZADO PRINCIPAL */}
        <header
          style={{
            backgroundColor: "#003366",
            color: "white",
            textAlign: "center",
            padding: "20px 0",
            position: "relative",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <img
            src="/logo192.png"
            alt="Logo Ferrero Machines"
            style={{
              width: "60px",
              position: "absolute",
              left: "20px",
              top: "15px",
            }}
          />
          <h1 style={{ margin: "0", fontWeight: "bold", fontSize: "28px" }}>
            Ferrero Machines
          </h1>
          <p style={{ margin: "0", fontSize: "15px", color: "#dbe4ee" }}>
            Las máquinas perfectas para tu empresa de empanadas y arepas
          </p>
        </header>

        {/* BARRA DE NAVEGACIÓN */}
        <nav
          style={{
            backgroundColor: "#00509e",
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            padding: "14px 0",
            fontWeight: "bold",
            borderBottom: "4px solid #007bff",
          }}
        >
          <Link to="/" style={linkStyle}>
            Inicio
          </Link>
          <Link to="/Productos" style={linkStyle}>
            Productos
          </Link>
          <Link to="/Contacto" style={linkStyle}>
            Contacto
          </Link>
        </nav>

        {/* RUTAS */}
        <Routes>
          {/* Página principal con Home + Productos */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <div style={{ marginTop: "40px" }}>
                  <Productos cart={cart} setCart={setCart} />
                </div>
              </>
            }
          />
          <Route
            path="/Productos"
            element={<Productos cart={cart} setCart={setCart} />}
          />
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>

        {/* BOTÓN FLOTANTE DEL CARRITO */}
        <button
          onClick={() => setShowCart(!showCart)}
          style={{
            position: "fixed",
            bottom: "25px",
            right: "25px",
            backgroundColor: "#007bff",
            border: "none",
            borderRadius: "50%",
            width: "65px",
            height: "65px",
            fontSize: "30px",
            color: "white",
            cursor: "pointer",
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
            zIndex: 999,
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
        >
          🛒
          {cartCount > 0 && (
            <span
              style={{
                position: "absolute",
                top: "-5px",
                right: "-5px",
                backgroundColor: "#ffcc00",
                color: "black",
                borderRadius: "50%",
                padding: "3px 7px",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              {cartCount}
            </span>
          )}
        </button>

        {/* PANEL FLOTANTE DEL CARRITO */}
        {showCart && (
          <div
            style={{
              position: "fixed",
              bottom: "100px",
              right: "25px",
              backgroundColor: "white",
              border: "3px solid #007bff",
              borderRadius: "15px",
              padding: "20px",
              width: "350px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
              zIndex: 1000,
              animation: "fadeIn 0.3s ease",
            }}
          >
            <Carrito cart={cart} setCart={setCart} />
          </div>
        )}
      </div>
    </Router>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "16px",
  fontWeight: "600",
  transition: "0.3s",
};

export default App;
