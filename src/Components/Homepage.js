
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Prorata from './Prorata';
import Welcome from './Welcome';
import Taxcalculate from './TaxCalculate';
import Precentage from './Precentage';
function Homepage() {
  return (
    <Router>
      <div className="Homepage">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Welcome />
            </Route>
            <Route path="/prorata">
              <Prorata />
            </Route>

            <Route path="/tax">
              <Taxcalculate />
            </Route>
            <Route path="/precent">
              <Precentage />
            </Route>
          </Switch>
        </div>
        <Navbar />
      </div>
    </Router>


  );
}

export default Homepage;
