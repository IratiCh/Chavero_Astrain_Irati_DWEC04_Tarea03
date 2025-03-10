import React from "react"; // Importamos react
import ReactDOM from "react-dom/client";
import App from "./App"; // Importamos el componente principal del otro archivo
import "./index.css"; // Importamos los estilos visuales

// Obtenemos el div correspondiente con id root
const div = document.getElementById("root");

// Creamos el div con react
const r = ReactDOM.createRoot(div);

// Renderizamos el resto del html ubicado en app dentro del div root
r.render(<App />);
