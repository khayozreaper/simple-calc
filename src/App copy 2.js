
import Homepage from './Components/Homepage';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Prorata from './Components/Prorata';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/prorata">
              <Prorata /> 
            </Route>
          </Switch>
        </div>
      </div>
    </Router>


  );
}

export default App;
