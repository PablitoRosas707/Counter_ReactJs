import React from "react";
import { Button } from "@material-ui/core";
import { useCounter } from "./Componets/useCounter";
import "./style.css";

export default function App() {
  const { state, sumar, restar, reset } = useCounter();

  return (
    <div className="contenedor">
      <h2>Contador</h2>
      <hr></hr>
      <input type="text" placeholder="Escribe tu nombre" className="mi-clase" />
      
      <div className="contenedor-2">
        <h4>{state}</h4>
        
      </div>
      <Button onClick={() => sumar(1)} variant="outlined" color="primary">
        Agregar
      </Button>
      <hr></hr>
      <Button onClick={() => restar(1)} variant="outlined" color="secondary">
        Restar
      </Button>
      <hr></hr>
      <Button onClick={reset} variant="outlined" color="secondary">
        Restablecer
      </Button>
    </div>
  );
}
