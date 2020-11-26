import React, { Component } from "react";

import Header from "parts/Header";
import FlowList from "parts/FlowList";
import FAQ from "parts/SmallFAQ";
import Footer from "parts/Footer";
export default class FlowPage extends Component {
  componentDidMount() {
    document.title = "Otodyduck | Flow Learning";
  }
  render() {
    return (
      <>
        <Header {...this.props} />
        <FlowList />
        <FAQ />
        <Footer />
      </>
    );
  }
}
