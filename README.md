Mini Ecommerce - Ferrero Machines

Este proyecto es una aplicación web desarrollada con React que simula una tienda online para la venta de maquinaria para empanadas y arepas. Permite visualizar productos, agregarlos al carrito y conservarlos incluso después de recargar la página gracias al uso de localStorage.

Tecnologías utilizadas

React JS (con Create React App): Biblioteca para construir la interfaz dinámica y modular.
Jest: Framework para ejecutar pruebas automatizadas.
React Testing Library: Permite simular interacciones de usuario en los componentes.
LocalStorage: Se usa para mantener la persistencia del carrito al recargar la página.
Node.js y npm: Entorno y gestor de paquetes para ejecutar y administrar dependencias del proyecto.
HTML: Define la estructura base de la aplicación.
CSS: Da estilo y diseño visual al carrito y sus componentes.

Instalación y ejecución

Clona este repositorio:

git clone https://github.com/VanessaZ48/mini-ecommerce.git


Entra al proyecto:

cd mini-ecommerce


Instala las dependencias:

npm install


Ejecuta el proyecto:

npm start


Luego abre http://localhost:3000
 en tu navegador.

Funcionalidades principales

Visualización de productos con descripción y precio.

Agregar productos al carrito.

Persistencia del carrito usando localStorage (los productos se mantienen tras recargar la página).

Interfaz moderna y responsiva.

Botón flotante 🛒 para acceder rápidamente al carrito.

Pruebas

El proyecto incluye pruebas unitarias y de integración:

App.test.js : Verifica elementos principales de la interfaz (como encabezado y botón del carrito).

AppPersistence.test.js : Comprueba la persistencia del carrito en localStorage.

Ejecuta todas las pruebas con:

npm test


O prueba un archivo específico, por ejemplo:

npm test AppPersistence


Autor
Vanessa Zapata Yate
