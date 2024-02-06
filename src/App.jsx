import React, { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import  NavBar  from "./rutas/Componentes/NavBar";
import { Inicio } from "./rutas/Inicio/Inicio";
import Facultad from "./rutas/Universidades/Universides";
import Carrera from "./rutas/Carreras/Carrera";
import { Contacto } from "./rutas/Contacto/Contacto";
import Chat from "./chatApp/chat";
import Becas from "./rutas/Becas/Becas";
import InformacionCarrera from "./rutas/Carreras/InformacionCarreras/InformacionCarreras";

export const App2 = () => {

  return (
    <>
      <Chat></Chat>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/carrera" element={<Carrera />} />
        {/* <Route path="/carrera/:area" element={<Carrera />} /> */}
        <Route path="/facultad" element={<Facultad />} />
        <Route path="/contacto" element={<Contacto/>} />
        
        <Route path="/becas" element={<Becas />} />

        <Route path="/carrera/:idCar" element={<InformacionCarrera />} />

        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
