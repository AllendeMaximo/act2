import './App.css';
import Botones from './components/botonera';
import Horadia from './components/hora';

function App() {
  return (
    <>
    <div className="container">
      <h1 className="titulo">ENCUENTRA TU DIA Y HORA EXACTA</h1>
      <Botones/>
    <Horadia/>
    </div>
    </>
  );
}

export default App;
