import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { ClassPage, DetailPage, LandingPage, NotFound } from "pages";
import "assets/scss/style.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/class" component={ClassPage} />
        <Route path="/class/:slug" component={DetailPage} />
        {/* <Route exact path="/flow" component={FlowPage} /> */}
        <Route path="*" component={NotFound} />
      </Router>
    </div>
  );
}

export default App;
