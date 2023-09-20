import './botones.css';

import React, { useState } from 'react';

const Botonera = () => {
  const [contador, setContador] = useState(0);
  const [contador2, setContador2] = useState(0);
  const [date, setDate] = useState(new Date());

  const masContador = () => {
    setContador(contador + 1);
  };

  const menosContador = () => {
    setContador(contador - 1);
  };
  const masContador2 = () => {
    setContador2(contador2 + contador);
  };

  const menosContador2 = () => {
    setContador2(contador2 - contador);
  };

  const sumarDia = () => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + contador);
    setDate(newDate);
  };

  const restarDia = () => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() - contador);
    setDate(newDate);
  };

  const español = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('es-ES', options);
  };

  return (
    <>
    <div className="botonesfila1">
    <button className="boton" onClick={menosContador}>Atrás</button>
    <p>Cantidad de dias: {contador}</p>
    <button className="boton"onClick={masContador}>Adelante</button>
    </div>

    <div className="botonesfila2">
    <button className="boton" onClick={() => { menosContador2(); restarDia(); }}>atras</button>
    <p>Cantidad de dias: {contador2}</p>
    <button className="boton" onClick={() => { masContador2(); sumarDia(); }}>adelante</button>

    </div>
    <p>{español(date)}</p>
    </>
  );
};


export default Botonera;


