

    // const number4 = Math.round((number2/number3 )*100)
    // setTotal(num1 - (num1 * (1-(num4)/100)));
    import './Prorata.css'
    import React from "react";
    import ReactDOM from "react-dom";
    
    // function Prorate() {
    //   const num1=0;
    //   const num2=0;
    //   const num3=0;
    //   const num4=0;
    //   const [result, setResult] =0;
  
    
    //   function calculateTotal() {
    //     const num4 = Math.round((num2/num3 )*100)
    //     setResult(num1 - (num1 * (1-(num4)/100)));
     
    //   }
    // // }
    // num4 = Math.round((num2/num3 )*100)
    // num1 - (num1 * (1-(num4)/100))
    class Prorata extends React.Component {
      
        state = {
          result: 0,
          num1: 0,
          num2: 0,
          num3: 0,
          num4 :0
        };
        
        handlenum1Change = evt => {
          const num1 = Number(evt.target.value);
          this.setState(prevState => ({
            num1,
            result: num1 + prevState.num2 + prevState.num3
          }));
        };
      
        handlenum2Change = evt => {
          const num2 = Number(evt.target.value);
          this.setState(prevState => ({
            num2,
            result: prevState.num1 + num2 + prevState.num3
          }));
        };
        handlenum3Change = evt => {
          const num3 = Number(evt.target.value);
          this.setState(prevState => ({
            num3,
            result: prevState.num1 + prevState.num2 + num3
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
                <input
                  type="number"
                  name="num3"
                  value={this.state.num3}
                  onChange={this.handlenum3Change}
                />
                <input type="text" value={this.state.result} readOnly />
              </label>
            </form>
          );
        }
      }
      
      ReactDOM.render(<Prorata />, document.getElementById("root"));
    
    export default Prorata;