
import React, { useState, useEffect } from "react"; // Hooks de React: manejo de estado y efectos secundarios
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // Enrutamiento para navegar entre páginas

// Importación de componentes de las páginas
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Productos from "./pages/Productos";
import Contacto from "./pages/Contacto";
import Carrito from "./pages/Carrito";

// COMPONENTE PRINCIPAL
function App() {
  //  ESTADOS 
  // Estado del carrito de compras (se guarda en localStorage para persistencia)
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart"); // Recupera carrito guardado
    return saved ? JSON.parse(saved) : []; // Si existe, lo convierte a objeto; si no, crea arreglo vacío
  });

  // Estado para mostrar/ocultar el panel flotante del carrito
  const [showCart, setShowCart] = useState(false);

  // EFECTO DE SINCRONIZACIÓN
  // Cada vez que cambia el carrito, se guarda en localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // CALCULO DEL TOTAL DE PRODUCTOS
  // Suma la cantidad de unidades de todos los productos en el carrito
  const cartCount = cart.reduce((total, item) => total + (item.quantity || 0), 0);

  // INTERFAZ DE LA APLICACIÓN
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
          {/* Logo */}
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
          {/* Enlaces de navegación */}
          <Link to="/" style={linkStyle}>
            Inicio
          </Link>
          <Link to="/Nosotros" style={linkStyle}>
            Nosotros
          </Link>
          <Link to="/Productos" style={linkStyle}>
            Productos
          </Link>
          <Link to="/Contacto" style={linkStyle}>
            Contacto
          </Link>
        </nav>

        {/* DEFINICIÓN DE RUTAS */}
        <Routes>
          {/* Página principal: muestra Home y Productos */}
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
          {/* Página “Nosotros” */}
          <Route path="/Nosotros" element={<Nosotros />} />
          {/* Página de productos independiente */}
          <Route
            path="/Productos"
            element={<Productos cart={cart} setCart={setCart} />}
          />
          {/* Página de contacto */}
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>

        {/* BOTÓN FLOTANTE DEL CARRITO */}
        <button
          onClick={() => setShowCart(!showCart)} // Alterna la visibilidad del carrito
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
          // Cambia el color del botón al pasar el mouse
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
        >
          🛒
          {/* Muestra cantidad total de productos si hay algo en el carrito */}
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

        {/* FLOTANTE DEL CARRITO */}
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
            <Carrito cart={cart} setCart={setCart} /> {/* Componente del carrito */}
          </div>
        )}
      </div>
    </Router>
  );
}

// ESTILO REUTILIZABLE PARA LOS ENLACES
const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "16px",
  fontWeight: "600",
  transition: "0.3s", // Transición suave al pasar el cursor
};

// Exporta el componente principal
export default App;
