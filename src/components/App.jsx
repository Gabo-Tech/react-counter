import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function increase() {
    setCount(count + parseInt(step));
  }

  function decrease() {
    setCount(count - step);
  }

  function reset() {
    setCount(count - count);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <br />
      <br />
      <br />
      <br />
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
      <br />
      <br />
      <p>
        Count by:
        <input onChange={(event) => setStep(event.target.value)} />
      </p>
      <br />
      <br />
      <br />
      <p onClick={reset}>Reset</p>
    </div>
  );
}

export default App;
