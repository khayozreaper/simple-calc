
import Navbar from './Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Prorata from '../Mod1/Prorata'
import Welcome from './Welcome';
import Taxcalculate from '../Mod1/TaxCalculate';
import Discount from '../Mod1/Discount';
import Notecount from '../Mod1/Notecount';
import UpiPayment from '../Mod1/UPI Payment';


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
            <Route path="/cashcount">
              <Notecount />
            </Route>

            <Route path="/upipay">
              <UpiPayment />
            </Route>



          </Switch>
        </div>

      </div>
    </Router>


  );
}

export default Homepage;
