import { useState } from "react";
import ReactDOM from "react-dom";
import './styleset1.css';


function Taxcalculate() {
  const [orgicost, setOrgicost] = useState();
  const [gst, setGst] = useState();
  const [output, setOutput] = useState();
  

  const [total, setTotal] = useState();

  
  const handleClick1 = () => {

   setTotal((orgicost*(100/(100+(gst)))));
    
    setOutput('Before Tax:  ')

  }
  const handleClick2 = () => {

     setTotal((orgicost*(gst/100))+(orgicost));

    setOutput('After TAx:  ')
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

     <button onClick={handleClick1}>Before Tax!</button>
      <button onClick={handleClick2}>After Tax!</button>

      <h2>{output+ total}</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Taxcalculate />, rootElement);

export default Taxcalculate