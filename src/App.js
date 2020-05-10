import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [contador, setContador] = useState(0);

  function handleIncrease() {
    if (contador >= 99) {
      setContador(0);
    } else {
      setContador(contador + 1);
    }
  }

  function handleDecrease() {
    if (contador <= 0) {
      setContador(0);
    } else {
      setContador(contador - 1);
    }
  }

  return (
    <div className="container">
      <div className="numero">
        <h1> {contador} </h1>
      </div>

      <div className="botoes">
        <input type="button" value="+" onClick={handleIncrease} />
        <input
          className="input-ml"
          type="button"
          value="-"
          onClick={handleDecrease}
        />
        <input
          className="input-ml"
          type="button"
          value="Reset"
          onClick={() => setContador(0)}
        />
      </div>
    </div>
  );
}
