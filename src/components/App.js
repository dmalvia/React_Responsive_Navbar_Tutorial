import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./pages/Home";
import Demo from "./pages/Demo";
import KeyFeatures from "./pages/KeyFeatures";
import Pricing from "./pages/Pricing";
import Testimonials from "./pages/Testimonials";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/features" exact component={KeyFeatures} />
          <Route path="/pricing" exact component={Pricing} />
          <Route path="/testimonials" exact component={Testimonials} />
          <Route path="/demo" exact component={Demo} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
//https://github.com/briancodex/react-navbar-v1/tree/master/src/components
