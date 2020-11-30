const API_KEY = '13318256-850cb38442cec8c2c5f4096c5';
const imagenesPorPagina = 30;
export const consultarAPI = async (termino, pagina) => {

    
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${termino}&per_page=${imagenesPorPagina}&page=${pagina}`;
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    return resultado;
}

export const calcularTotalPaginas = (totalHits) =>{
    return Math.ceil(totalHits/ imagenesPorPagina);
}