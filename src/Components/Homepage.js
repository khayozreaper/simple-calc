
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Prorata from './Prorata';
import Welcome from './Welcome';
import Taxcalculate from './TaxCalculate';
import Discount from './Discount';

function Homepage() {
  return (
    <Router>
      <div className="Homepage">
      <Navbar />
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
           
            <Route path="/discount">
              <Discount />
            </Route>
         
           
          </Switch>
        </div>
      
      </div>
    </Router>


  );
}

export default Homepage;
