import React, { useState, useEffect } from 'react';
import Buscador from './components/Buscador';
import { consultarAPI, calcularTotalPaginas } from './services/Image';
import ListadoImagenes from './components/ListadoImagenes';


function App() {

  const [busqueda, guardarBusquedaA] = useState('');
  const [imagenes, guardarImagenes] = useState([]);
  const [paginaActual, guardarPaginaActual] = useState(1);
  const [totalPaginas, guardarTotalPaginas] = useState(1);

  useEffect(() => {

    if (busqueda === '') { return; }

    consultarAPI(busqueda, paginaActual).then(data => {
      guardarImagenes(data.hits);

      //Calcular el total de paginas

      guardarTotalPaginas(calcularTotalPaginas(data.totalHits));
      //Movar la pantalla a la parte superior
      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, [busqueda, paginaActual]);

  const paginaAnterior = () => {

    let nuevaPaginaAnterior = paginaActual - 1;
    guardarPaginaActual(nuevaPaginaAnterior);
  }

  const paginaSiguiente = () => {
    let nuevaPaginaSiguiente = paginaActual + 1;
    guardarPaginaActual(nuevaPaginaSiguiente);
  }

  return (
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imágenes </p>
        <Buscador
          guardarBusquedaA={guardarBusquedaA}
        />
      </div>
      <div className="row justify-content-center">
        <ListadoImagenes
          imagenes={imagenes}
        />
        {(paginaActual === 1) ? null :
          <button type="button" className="btn btn-info mr-1" onClick={paginaAnterior}> Anterior &laquo;</button>}
        {(paginaActual === totalPaginas) ? null :
          <button type="button" className="btn btn-info mr-1" onClick={paginaSiguiente}> Siguiente &raquo;</button>}

      </div>

    </div>
  );
}

export default App;
