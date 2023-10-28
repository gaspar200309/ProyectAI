import React from 'react';
import ImagenesApp from '../assets/ImagenesApp';
import './Becas.css'; // Asegúrate de reemplazar 'nombre-de-tu-archivo' con el nombre real de tu archivo CSS.

export const Becas = () => {
  return (
    <>
        <h1>Becas</h1>
        <div className="cardB">
            <div className="img-cardB">
                <img src={ImagenesApp.imgComunicacion} alt="" />
            </div>
            <div className="contentB">
                <div className="titleB">
                    <h3>Universidad mayor de san simon</h3>
                    <span>hace un dia</span>
                </div>
                <div className="textB">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sint doloribus eos, iste ab, at aspernatur enim quaerat veritatis veniam beatae. Nam deserunt officiis numquam?</p>
                </div>
                <div className="btn-containerB">
                    <button>Visitar</button>
                </div>
            </div>
        </div>
    </>
  );
};
