import React, { useState } from 'react';
import Error from './Error';
const Buscador = ({ guardarBusquedaA }) => {

    const [terminoBusqueda, guardarBusqueda] = useState('');
    const [error, guardarError] = useState(false);

    const buscarImagen = e => {
        e.preventDefault();

        //Validar
        if (terminoBusqueda === '') {
            guardarError(true);
            return;
        }

        //Enviar el formulario
        guardarBusquedaA(terminoBusqueda);
        guardarError(false);
    }

    return (
        <form
            onSubmit={buscarImagen}
        >
            <div className="row">
                <div className="form-group col-md-8">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Busca una imagen, ejemplo: Futbol o Café"
                        onChange={e => guardarBusqueda(e.target.value)}
                    />
                </div>
                <div className="form-group col-md-4">
                    <input
                        type="submit"
                        className="btn btn-lg btn-danger btn-block"
                        value="Buscar"
                    />
                </div>
                {error ? <Error mensaje="Agrega un término de busqueda" /> : null}
            </div>

        </form>
    );
};

export default Buscador;