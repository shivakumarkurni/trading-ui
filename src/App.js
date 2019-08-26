import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import Login from '../src/components/login/login'
import ListStocks from '../src/components/listStocks/listStocks'
import PlaceOrder from '../src/components/placeOrder/placeOrder'
import Capture from '../src/images/Capture.PNG';






function App() {
  return (
    <HashRouter>

      <div>
        {/* <nav className="navbar navbar-default trade-nav">
          <div className="container-fluid">
            <div className="navbar-header">
              <div>ABC Trading</div>
            </div>
          </div>
        </nav> */}

        <nav className="navbar navbar-default">
                    <div className="container-fluid home-header">
                        <div className="navbar-header">
                        <img className="Capture" src={Capture} alt="Capture" /> 
                        {/* <div>ABC Trading</div> */}
                            <Link className="navbar-brand ing-title" to='/'>ING Trading</Link>
                            <span className="nav-subtitle">
                            {/* <Link className="navbar-brand nav-header-link" to='/'>Security Info</Link>
                            <Link className="navbar-brand nav-header-link" to='/'>Help & Support</Link>

                            <Link className="navbar-brand nav-header-link" to='/'>Contact Us</Link>

                            <Link className="navbar-brand nav-header-link" to='/'>About Us</Link> */}

                            </span>
                        </div>  
                    </div>
                </nav>




        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/listOfStocks" component={ListStocks} />
          <Route exact path="/placeOrder" component={PlaceOrder} />

        </Switch>
      </div>


    </HashRouter>
  );
}

export default App;
