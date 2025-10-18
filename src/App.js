import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Productos from "./pages/Productos";
import Carrito from "./pages/Carrito";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";

export default function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <nav
        style={{
          backgroundColor: "#002b5b",
          color: "white",
          padding: "10px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>🧰 Ferrero Machines</h2>
        <div style={{ display: "flex", gap: "20px" }}>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Productos
          </Link>
          <Link to="/carrito" style={{ color: "white", textDecoration: "none" }}>
            Carrito ({cart.reduce((sum, i) => sum + i.quantity, 0)})
          </Link>
          <Link to="/nosotros" style={{ color: "white", textDecoration: "none" }}>
            Nosotros
          </Link>
          <Link to="/contacto" style={{ color: "white", textDecoration: "none" }}>
            Contacto
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Productos cart={cart} setCart={setCart} />} />
        <Route path="/carrito" element={<Carrito cart={cart} setCart={setCart} />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}
