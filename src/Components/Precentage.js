import { useState } from "react";
import ReactDOM from "react-dom";
import "./Prorata.css"
function Precentage() {
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [number3, setNumber3] = useState();


  const [total , setTotal] = useState(number1);

  function calculateTotal() {
    const number3 = Math.round((number1 / number2) * 1000)

    setTotal(100 - (100 * (1 - (number3) / 1000)));

  }

  return (
    <div className="Precentage">
      <h1>Calulate Precentage !</h1>

      <div className="number-inputs">
        <input
          type="number"
          value={number1}
          onChange={(e) => setNumber1(+e.target.value)}
          placeholder="Number"
        />
        <input
          type="number"
          value={number2}
          onChange={(e) => setNumber2(+e.target.value)}
          placeholder="Out-of"
        />

      </div>

      <button onClick={calculateTotal}>Calculate!</button>

      <h2 >{total}  </h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Precentage />, rootElement);

export default Precentage