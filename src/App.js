import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "assets/scss/style.scss";
import LandingPage from "pages/LandingPage";
import ClassPage from "pages/ClassPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/class" component={ClassPage} />
      </Router>
    </div>
  );
}

export default App;
