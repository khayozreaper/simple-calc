import { useState } from "react";
import ReactDOM from "react-dom";
import "./Prorata.css";

function Prorata() {
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [number3, setNumber3] = useState();
  const [number4, setNumber4] = useState();
  const [total, setTotal] = useState(number1);

  function calculateTotal() {
    const number4 = Math.round((number2/number3 )*100)
    setTotal(number1 - (number1 * (1-(number4)/100)));
 
  }

  return (
    <div className="Prorata">
      <h1>Calulate Prorata !</h1>

      <div className="number-inputs">
        <input
          type="number"
          value={number1}
          onChange={(e) => setNumber1(+e.target.value)}
          placeholder="Rate"
        />
        <input
          type="number"
          value={number2}
          onChange={(e) => setNumber2(+e.target.value)}
          placeholder="Month"
        />
        <input
          type="number"
          value={number3}
          onChange={(e) => setNumber3(+e.target.value)}
          placeholder="Warranty"
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