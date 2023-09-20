import React, { useState, useEffect } from 'react';
import './hora.css';

import mañana from '../img/mañana.jpg';
import tarde from '../img/tarde.jpg';
import noche from '../img/noche.jpg';

function Horadia() {
  const [horaDelDia, setHoraDelDia] = useState('');
  const [imagen, setImagen] = useState(null);

  useEffect(() => {
    const horaActual = new Date().getHours();

    if (horaActual >= 5 && horaActual < 12) {
      setHoraDelDia('MAÑANA');
      setImagen(mañana);
    } else if (horaActual >= 12 && horaActual < 18) {
      setHoraDelDia('TARDE');
      setImagen(tarde);
    } else {
      setHoraDelDia('NOCHE');
      setImagen(noche);
    }
  }, []);

  return (
    <div className="Hora">
      <h1>Horario del dia</h1>
      <p>{horaDelDia}</p>
      {imagen && <img className= "fotitos" src={imagen} alt={`Imagen de la ${horaDelDia}`} />}
    </div>
  );
}

export default Horadia;