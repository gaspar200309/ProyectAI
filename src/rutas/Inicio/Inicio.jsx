import React from 'react'
import CarRecomendada from '../Carreras/CarRecomendadas'
import UniversidadesRecomendadas from '../Carreras/CarRecomendadas'
import { Contacto } from '../Contacto/Contacto'
import { Informacion } from '../Componentes/Informacion'
import ImagenesApp from '../../assets/ImagenesApp'

export const Inicio = () => {
  return (
    <>
      <img src = {ImagenesApp.imgFondo} className='fondo'></img>
      <Informacion></Informacion>
      <hr></hr>
      <CarRecomendada></CarRecomendada>
      <hr></hr>
      <UniversidadesRecomendadas></UniversidadesRecomendadas>
      <Contacto></Contacto>
    </>
  )
}

