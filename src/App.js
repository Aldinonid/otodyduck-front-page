import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ClassPage, DetailPage, LandingPage, NotFound, FlowPage } from "pages";
import { FlowDetailPage } from "pages";
import "assets/scss/style.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/class" component={ClassPage} />
          <Route path="/class/:slug" component={DetailPage} />
          <Route exact path="/journey" component={FlowPage} />
          <Route path="/journey/:slug" component={FlowDetailPage} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
