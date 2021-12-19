import { useState } from "react";
import ReactDOM from "react-dom";
import "./Prorata.css";

function Prorata() {
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [total, setTotal] = useState(number1);

  function calculateTotal() {
    setTotal(number1 - (number1 * (number2/100)));
  }

  return (
    <div className="Prorata">
      <h1>Prorata</h1>

      <div className="number-inputs">
        <input
          type="number"
          value={number1}
          onChange={(e) => setNumber1(+e.target.value)}
          placeholder="0"
        />
        <input
          type="number"
          value={number2}
          onChange={(e) => setNumber2(+e.target.value)}
          placeholder="0"
        />
      </div>

      <button onClick={calculateTotal}>Calculate!</button>

      <h2>{total}</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Prorata />, rootElement);

export default Prorata