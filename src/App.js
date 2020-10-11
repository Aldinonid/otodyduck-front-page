import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import RegsiterPage from "pages/RegisterPage";
import LoginPage from "pages/LoginPage";
import LandingPage from "pages/LandingPage";
import ClassPage from "pages/ClassPage";
import FlowPage from "pages/FlowPage";
import DetailPage from "pages/DetailPage";

import "assets/scss/style.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/class" component={ClassPage} />
        <Route exact path="/class/:slug" component={DetailPage} />
        <Route exact path="/flow" component={FlowPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegsiterPage} />
      </Router>
    </div>
  );
}

export default App;
