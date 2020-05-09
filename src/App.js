import React, { useState } from "react";

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
    <div>
      <h1> {contador} </h1>
      <input type="button" value="+" onClick={handleIncrease} />
      <input type="button" value="-" onClick={handleDecrease} />
      <input type="button" value="Reset" onClick={() => setContador(0)} />
    </div>
  );
}
