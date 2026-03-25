import { useState } from "react";

function CounterApp() {
  const [count, setCount] = useState(0);

  
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  const reset = () => {
    setCount(0);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Counter App</h2>
      <h2>{count}</h2>


      <button onClick={increment}>Increment</button>
      <button onClick={decrement} style={{ marginLeft: "10px" }} >Decrement</button>
      <button onClick={reset} style={{ marginLeft: "10px" }}>Reset</button>
    </div>
  )
}

export default CounterApp