import { useState } from "react";

import ReactDOM from "react-dom";
import './styleset1.css';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
function Prorata() {

  const [selectedDate, setSelecetedDate] = useState(null)
  const [selectedDate2, setSelecetedDate2] = useState(new Date())
  const [month, setMonth] = useState()


  const [number1, setNumber1] = useState();
  const [number3, setNumber3] = useState();

  const [total, setTotal] = useState();
  const [discount, setDiscount] = useState();

  function calculateTotal() {
    const number2 = ((selectedDate2 - selectedDate) / ((100 * 60 * 60 * 24 * 30) * 10));

    const number4 = Math.round((number2 / number3) * 100)
    setTotal(number1 - (number1 * (1 - (number4) / 100)));
    setDiscount(Math.round((1 - (number2 / number3)) * 100));


  }

  function calculateMonth() {
    setMonth(Math.round((selectedDate2 - selectedDate) / ((100 * 60 * 60 * 24 * 30) * 10)));

  }

  return (
    <div className="Prorata">
      <h1>Calulate Prorata !</h1>


      <div className="date-entry" >

        <DatePicker
          selected={selectedDate2}
          todayButton="Today"
          onChange={date => setSelecetedDate2(date)}
          dateFormat={'d-MM-yyyy'}
          maxDate={new Date()}

        />

        <br />
        <h4>Date of sale  </h4>

        <DatePicker
          selected={selectedDate}
          onChange={date => setSelecetedDate(date)}
          dateFormat={'d-MM-yyyy'}
          showYearDropdown
          showMonthDropdown
          maxDate={new Date()}

        />

        <h3>Battery has lasted {month} Months  </h3>

      </div>

      <br />
      <br />
      <br />
      <div className="number-inputs">
        <h4>Price  </h4>

        <input
          type="number"
          value={number1}
          onChange={(e) => setNumber1(+e.target.value)}
          placeholder="Rate"
          onBeforeInput={calculateMonth}


        />
        {/* <input
          type="number"
          value={number2}
          onChange={(e) => setNumber2(+e.target.value)}
          placeholder="Month"
        /> */}
        <h4>Total Warranty  </h4>

        <input
          type="number"
          value={number3}
          onChange={(e) => setNumber3(+e.target.value)}
          placeholder="Warranty"
          onBeforeInput={calculateMonth}
        />
      </div>
      <br />

      <button onClick={calculateTotal} onBeforeInput={calculateMonth}>Calculate!</button>

      <h2>{total}</h2>
      <div>Discount : {discount} %</div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Prorata />, rootElement);

export default Prorata