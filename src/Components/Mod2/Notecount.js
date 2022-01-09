import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import '../Mod1/styleset1.css';
class Notecount extends React.Component {

  state = {

    //2000
    result1: 0,
    num1: 0,
    numr1: 2000,
    //500
    result2: 0,
    num2: 0,
    numr2: 500,
    //200
    result3: 0,
    num3: 0,
    numr3: 200,
    //100
    result4: 0,
    num4: 0,
    numr4: 100,
    //50
    result5: 0,
    num5: 0,
    numr5: 50,
    //20
    result6: 0,
    num6: 0,
    numr6: 20,
    //10
    result7: 0,
    num7: 0,
    numr7: 10,
    //5
    result8: 0,
    num8: 0,
    numr8: 5,
    //2
    result9: 0,
    num9: 0,
    numr9: 2,
    //1
    result10: 0,
    num10: 0,
    numr10: 1,

    fnresult: 0,
    nresult: 0,
    fcresult: 0,
    cresult: 0
  };

  //2000
  handlenum1Change = evt => {
    const num1 = Number(evt.target.value);
    this.setState(prevState => ({
      num1,
      result1: num1 * prevState.numr1,
      nresult: num1 + prevState.num2 + prevState.num3 + prevState.num4 + prevState.num5 + prevState.num6 + prevState.num7,
      fnresult: (num1 * prevState.numr1) + prevState.result2 + prevState.result3 + prevState.result4 + prevState.result5 + prevState.result6 + prevState.result7
    }));
  };
  //500
  handlenum2Change = evt => {
    const num2 = Number(evt.target.value);
    this.setState(prevState => ({
      num2,
      result2: num2 * prevState.numr2,
      nresult: prevState.num1 + num2 + prevState.num3 + prevState.num4 + prevState.num5 + prevState.num6 + prevState.num7,
      fnresult: prevState.result1 + (num2 * prevState.numr2) + prevState.result3 + prevState.result4 + prevState.result5 + prevState.result6 + prevState.result7
    }));
  };
  //200
  handlenum3Change = evt => {
    const num3 = Number(evt.target.value);
    this.setState(prevState => ({
      num3,
      result3: num3 * prevState.numr3,
      nresult: prevState.num1 + prevState.num2 + num3 + prevState.num4 + prevState.num5 + prevState.num6 + prevState.num7,
      fnresult: prevState.result1 + prevState.result2 + (num3 * prevState.numr3) + prevState.result4 + prevState.result5 + prevState.result6 + prevState.result7
    }));
  };
  //100
  handlenum4Change = evt => {
    const num4 = Number(evt.target.value);
    this.setState(prevState => ({
      num4,
      result4: num4 * prevState.numr4,
      nresult: prevState.num1 + prevState.num2 + prevState.num3 + num4 + prevState.num5 + prevState.num6 + prevState.num7,
      fnresult: prevState.result1 + prevState.result2 + prevState.result3 + (num4 * prevState.numr4) + prevState.result5 + prevState.result6 + prevState.result7
    }));
  };
  //50
  handlenum5Change = evt => {
    const num5 = Number(evt.target.value);
    this.setState(prevState => ({
      num5,
      result5: num5 * prevState.numr5,
      nresult: prevState.num1 + prevState.num2 + prevState.num3 + prevState.num4 + num5 + prevState.num6 + prevState.num7,
      fnresult: prevState.result1 + prevState.result2 + prevState.result3 + prevState.result4 + (num5 * prevState.numr5) + prevState.result6 + prevState.result7
    }));
  };
  //20
  handlenum6Change = evt => {
    const num6 = Number(evt.target.value);
    this.setState(prevState => ({
      num6,
      result6: num6 * prevState.numr6,
      nresult: prevState.num1 + prevState.num2 + prevState.num3 + prevState.num4 + prevState.num5 + num6 + prevState.num7,
      fnresult: prevState.result1 + prevState.result2 + prevState.result3 + prevState.result4 + prevState.result5 + (num6 * prevState.numr6) + prevState.result7
    }));
  };
  //10
  handlenum7Change = evt => {
    const num7 = Number(evt.target.value);
    this.setState(prevState => ({
      num7,
      result7: num7 * prevState.numr7,
      nresult: prevState.num1 + prevState.num2 + prevState.num3 + prevState.num4 + prevState.num5 + prevState.num6 + num7,
      fnresult: prevState.result1 + prevState.result2 + prevState.result3 + prevState.result4 + prevState.result5 + prevState.result6 + (num7 * prevState.numr7)
    }));
  };
  //5
  handlenum8Change = evt => {
    const num8 = Number(evt.target.value);
    this.setState(prevState => ({
      num8,
      result8: num8 * prevState.numr8,
      cresult: num8 + prevState.num9 + prevState.num10,
      fcresult: (num8 * prevState.numr8) + prevState.result9 + prevState.result10
    }));
  };
  //2
  handlenum9Change = evt => {
    const num9 = Number(evt.target.value);
    this.setState(prevState => ({
      num9,
      result9: num9 * prevState.numr9,
      cresult: prevState.num8 + num9 + prevState.num10,
      fcresult: prevState.result8 + (num9 * prevState.numr9) + prevState.result10
    }));
  };
  //1
  handlenum10Change = evt => {
    const num10 = Number(evt.target.value);
    this.setState(prevState => ({
      num10,
      result10: num10 * prevState.numr10,
      cresult: prevState.num8 + prevState.num9 + num10,
      fcresult: prevState.result8 + prevState.result9 + (num10 * prevState.numr10)
    }));
  };






  render() {
    return (

      <form>
        <div className="cashcount"
          >
          {/* 2000 START */}
          <div><h1>Notes</h1></div>
          
          <label 
         
          >
            <input
              type="number"
              name="num1"
              value={this.state.num1}
              onChange={this.handlenum1Change}
            />
            <input
              type="number"
              name="numr1"
              readOnly
              placeholder="× 2000 ="
            />
            <input type="text" value={this.state.result1} readOnly />
            {/* 2000 END */}
          </label> <br />
          <label>
            {/* 500 START */}
            <input
              type="number"
              name="num2"
              value={this.state.num2}
              onChange={this.handlenum2Change}
            />
            <input
              type="number"
              name="numr2"
              readOnly
              placeholder="× 500 ="

            />
            <input type="text" value={this.state.result2} readOnly />
            {/* 500 END */}
          </label> <br />
          <label>
            {/* 200 START */}
            <input
              type="number"
              name="num3"
              value={this.state.num3}
              onChange={this.handlenum3Change}
            />
            <input
              type="number"
              name="numr3"
              readOnly
              placeholder="× 200 ="

            />
            <input type="text" value={this.state.result3} readOnly />
            {/* 200 END */}
          </label> <br />
          <label>
            {/* 100 START */}
            <input
              type="number"
              name="num4"
              value={this.state.num4}
              onChange={this.handlenum4Change}
            />
            <input
              type="number"
              name="numr4"
              readOnly
              placeholder="× 100 ="

            />
            <input type="text" value={this.state.result4} readOnly />
            {/* 100 END */}
          </label> <br />
          <label>
            {/* 50 START */}
            <input
              type="number"
              name="num5"
              value={this.state.num5}
              onChange={this.handlenum5Change}
            />
            <input
              type="number"
              name="numr5"
              readOnly
              placeholder="× 50 ="

            />
            <input type="text" value={this.state.result5} readOnly />
            {/* 50 END */}
          </label> <br />
          <label>
            {/* 20 START */}
            <input
              type="number"
              name="num6"
              value={this.state.num6}
              onChange={this.handlenum6Change}
            />
            <input
              type="number"
              name="numr6"
              readOnly
              placeholder="× 20 ="

            />
            <input type="text" value={this.state.result6} readOnly />
            {/* 20 END */}
          </label> <br />

          <label>
            {/* 10 START */}
            <input
              type="number"
              name="num7"
              value={this.state.num7}
              onChange={this.handlenum7Change}
            />
            <input
              type="number"
              name="numr7"
              readOnly
              placeholder="× 10 ="

            />
            <input type="text" value={this.state.result7} readOnly />
            {/* 10 END */}
          </label> <br />

          <br />



          <br />
          <div> <label> Total Notes <input type="text" value={this.state.nresult} readOnly /> </label> <br /></div>
          <br />

          <div> <label> Total Amount <input type="text" value={this.state.fnresult} readOnly /> </label> <br /></div>


          <div><h1>Coins</h1></div>
          <label>
            {/* 5 START */}
            <input
              type="number"
              name="num8"
              value={this.state.num8}
              onChange={this.handlenum8Change}
            />
            <input
              type="number"
              name="numr8"
              readOnly
              placeholder="× 5 ="

            />
            <input type="text" value={this.state.result8} readOnly />
            {/* 5 END */}
          </label> <br />

          <label>
            {/* 2 START */}
            <input
              type="number"
              name="num9"
              value={this.state.num9}
              onChange={this.handlenum9Change}
            />
            <input
              type="number"
              name="numr9"
              readOnly
              placeholder="× 2 ="

            />
            <input type="text" value={this.state.result9} readOnly />
            {/* 2 END */}
          </label> <br />

          <label>
            {/* 1 START */}
            <input
              type="number"
              name="num10"
              value={this.state.num10}
              onChange={this.handlenum10Change}
            />
            <input
              type="number"
              name="numr10"
              readOnly
              placeholder="× 1 ="


            />
            <input type="text" value={this.state.result10} readOnly />
            {/* 1 END */}

            <br />



            <br />
            <div> <label> Total Coins<input type="text" value={this.state.cresult} readOnly /> </label> <br /></div>
            <br />

            <div> <label> Total Amount <input type="text" value={this.state.fcresult} readOnly /> </label> <br /></div>
          </label>
        </div>
      </form>

    );
  }

}







ReactDOM.render(<Notecount />, document.getElementById("root"));

export default Notecount; 