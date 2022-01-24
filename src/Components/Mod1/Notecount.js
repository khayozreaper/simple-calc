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
      fnresult: (num1 * prevState.numr1) + prevState.result2 + prevState.result3 + prevState.result4 + prevState.result5 + prevState.result6 + prevState.result7,
      
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
          
          <div 
         
          >
            <input
              type="number"
              name="num1"
              value={this.state.num1}
              onChange={this.handlenum1Change}
            />
          × 2000 = {this.state.result1} 
            {/* 2000 END */}
          </div> <br />
          <div>
            {/* 500 START */}
            <input
              type="number"
              name="num2"
              value={this.state.num2}
              onChange={this.handlenum2Change}
            />
            × 500 ={this.state.result2}
            {/* 500 END */}
          </div> <br />
          <div>
            {/* 200 START */}
            <input
              type="number"
              name="num3"
              value={this.state.num3}
              onChange={this.handlenum3Change}
            />
            × 200 ={this.state.result3} 
            {/* 200 END */}
          </div> <br />
          <div>
            {/* 100 START */}
            <input
              type="number"
              name="num4"
              value={this.state.num4}
              onChange={this.handlenum4Change}
            />
            
            × 100 ={this.state.result4} 
            {/* 100 END */}
          </div> <br />
          <div>
            {/* 50 START */}
            <input
              type="number"
              name="num5"
              value={this.state.num5}
              onChange={this.handlenum5Change}
            />
           × 50 ={this.state.result5}
            {/* 50 END */}
          </div> <br />
          <div>
            {/* 20 START */}
            <input
              type="number"
              name="num6"
              value={this.state.num6}
              onChange={this.handlenum6Change}
            />
           × 20 ={this.state.result6}
            {/* 20 END */}
          </div> <br />

          <div>
            {/* 10 START */}
            <input
              type="number"
              name="num7"
              value={this.state.num7}
              onChange={this.handlenum7Change}
            />
           × 10 ={this.state.result7} 
            {/* 10 END */}
          </div> <br />

          <br />



          <br />
          <div> <h3> Total Note {this.state.nresult}</h3> </div> 
          <br />

          <div> <h3> Total Amount {this.state.fnresult}</h3></div>  


          <div><h1>Coins</h1></div>
          <div>
            {/* 5 START */}
            <input
              type="number"
              name="num8"
              value={this.state.num8}
              onChange={this.handlenum8Change}
            />
            × 5 = {this.state.result8}
            {/* 5 END */}
          </div> <br />

          <div>
            {/* 2 START */}
            <input
              type="number"
              name="num9"
              value={this.state.num9}
              onChange={this.handlenum9Change}
            />
           × 2 ={this.state.result9}
            {/* 2 END */}
          </div> <br />

          <div>
            {/* 1 START */}
            <input
              type="number"
              name="num10"
              value={this.state.num10}
              onChange={this.handlenum10Change}
            />
            × 1 ={this.state.result10} 
            {/* 1 END */}

            <br />



            <br />
            <div> <h3> Total Coins {this.state.cresult}</h3> </div>
            <br />

            <div> <h3> Total Amount {this.state.fcresult} </h3> </div>
          </div>
        </div>
      </form>

    );
  }

}







ReactDOM.render(<Notecount />, document.getElementById("root"));

export default Notecount; 