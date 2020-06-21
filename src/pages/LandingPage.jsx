import React, { Component } from "react";

import Header from "parts/Header";
import Hero from "parts/Hero";
import ClassList from "parts/ClassList";
import Flow from "parts/Flow";
import Footer from "parts/Footer";

import landingPage from "json/landingPage.json";

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <Header {...this.props} />
        <Hero data={landingPage.hero} />
        <ClassList data={landingPage.class} />
        <Flow />
        <Footer />
      </>
    );
  }
}
