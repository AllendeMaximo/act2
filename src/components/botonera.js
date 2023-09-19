import '../botones.css';
import React, { useState } from 'react';

function Botones() {
    const [contador, setContador] = useState(0);
  
    const aumentarContador = () => {
      setContador(contador + 1);
    };
  
    const disminuirContador = () => {
      setContador(contador - 1);
    };
  
    return (
      <div className="botones">
        <button onClick={disminuirContador}>Atrás</button>
        <p>Valor del contador: {contador}</p>
        <button onClick={aumentarContador}>Adelante</button>
        
      </div>
    );
  }
  
  export default Botones;