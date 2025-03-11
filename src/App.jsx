import { useState } from "react";
import data from "./data"; // Importamos los datos de los tours

// Primer componente para mostrar el título y el subtítulo, con la categoría de la imagen correspondiente
function Titulo({ categoria }) {
  return (
    <div className="title">
      <h2>slider DWEC</h2>
      <div className="underline"></div>
      <h3>{categoria}</h3>
    </div>
  );
}

// Segundo componente para mostrar los paisajes en slide
function Paisajes({ paisajes, id }) {
  /* Recorremos array
    Indicamos las tres posiciones del slide, por defecto la siguiente 'nextSlide'
    Si el id real (paisaje.id) coincide con el id actual, se convierte en activeSlide
    Si el id es uno menos que el id actual se convierte en el anterior 'lastSlide'
   */
  return (
    <>
      {paisajes.map((paisaje) => {
        let posicion = "nextSlide";
        if (paisaje.id == id) {
          posicion = "activeSlide";
        } else if (paisaje.id == id - 1) {
          posicion = "lastSlide";
        }

        return (
          <article key={paisaje.id} className={posicion}>
            <img src={paisaje.src} alt={paisaje.img} className="person-img" />
            <h4>{paisaje.img}</h4>
          </article>
        );
      })}
    </>
  );
}

// Componente principal al que le pasamos los datos necesarios para el resto de componentes
export default function App() {
  // Datos de los paisajes
  const [paisajes] = useState(data);

  // Slide actual, empieza por 1 ya que el primer id en data.js es 1
  const [id, setId] = useState(1);

    // Incrementamos el slide cada dos segundos
  setTimeout(() => {
    // Si llegamos al último slide volvemos a empezar
    if (id == paisajes.length) {
      setId(1);
    } else {
      // Sino se avanza al siguiente +1
      setId(id + 1);
    }
  }, 2000);

  // Obtenemos la categoría del slide actual, restamos 1 ya que al ser array empieza por 0
  const categoria = paisajes[id - 1].categoria;

  // Devolvemos todo el html con los componentes
  return (
    <section className="section">
      <Titulo categoria={categoria} />
      <div className="section-center">
        <Paisajes paisajes={paisajes} id={id} />
      </div>
    </section>
  );
}
