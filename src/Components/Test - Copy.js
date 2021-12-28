import React from "react";
import ReactDOM from "react-dom";

class Test extends React.Component {
    state = {
      result: 0,
      num1: 0,
      num2: 0
    };
  
    handlenum1Change = evt => {
      const num1 = Number(evt.target.value);
      this.setState(prevState => ({
        num1,
        result: num1 + prevState.num2
      }));
    };
  
    handlenum2Change = evt => {
      const num2 = Number(evt.target.value);
      this.setState(prevState => ({
        num2,
        result: prevState.num1 + num2
      }));
    };
    
  
    render() {
      return (
        <form>
          <label>
            <input
              type="number"
              name="num1"
              value={this.state.num1}
              onChange={this.handlenum1Change}
            />
            <input
              type="number"
              name="num2"
              value={this.state.num2}
              onChange={this.handlenum2Change}
            />
            <input type="text" value={this.state.result} readOnly />
          </label>
        </form>
      );
    }
  }
  
  ReactDOM.render(<Test />, document.getElementById("root"));

export default Test;