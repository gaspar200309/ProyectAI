import React, { useState } from 'react';
import servicios from '../Carreras/CarreraApp'; // Asegúrate de importar servicios desde el archivo adecuado

const Buscador = ({ updateFilteredCarreras }) => {
  const [search, setSearch] = useState('');

  const showData2 = () => {
    // Filtrar las carreras basadas en la búsqueda
    const filteredCarreras = servicios.filter((carrera) =>
      carrera.titulo.toLowerCase().includes(search.toLowerCase())
    );

    // Llama a la función para actualizar las carreras filtradas en Carrera
    updateFilteredCarreras(filteredCarreras);
  };

  const searcher = (e) => {
    setSearch(e.target.value);
    showData2(); // Llama a showData2 al cambiar la búsqueda
  };

  return (
    <>
      <input
        value={search}
        onChange={searcher}
        type="text"
        placeholder="Search"
        className="Si"
      ></input>
    </>
  );
};

export default Buscador;
