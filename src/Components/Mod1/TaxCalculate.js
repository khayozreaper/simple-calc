import { useState } from "react";
import ReactDOM from "react-dom";
import './styleset1.css';


function Taxcalculate() {
  const [orgicost, setOrgicost] = useState();
  const [gst, setGst] = useState();
  const [amount, setAmount] = useState();
  

  const [total, setTotal] = useState();

  function calculateAftertax() {
   
    setTotal((orgicost*(gst/100))+(orgicost));
 
  }
  function calculateBeforetax() {
   
    setTotal((orgicost*(100/(100+(gst)))));
 
  }

  return (
    <div className="Taxcalculate">
      <h1>Calulate Tax !</h1>

      <div className="number-inputs">
        <input
          type="number"
          value={orgicost}
          onChange={(e) => setOrgicost(+e.target.value)}
          placeholder="Rate"
        />
        <input
          type="number"
          value={gst}
          onChange={(e) => setGst(+e.target.value)}
          placeholder="Tax"
        />
      
      </div>

     <button onClick={calculateBeforetax}>Before Tax!</button>
      <button onClick={calculateAftertax}>After Tax!</button>

      <h2>{total}</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Taxcalculate />, rootElement);

export default Taxcalculate