import React, { Component } from "react";
import Header from "parts/Header";
import Hero from "parts/Hero";

import landingPage from "json/landingPage.json";
import ClassList from "parts/ClassList";

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <Header {...this.props} />
        <Hero data={landingPage.hero} />
        <hr />
        <ClassList data={landingPage.class} />
        <hr />
      </>
    );
  }
}
