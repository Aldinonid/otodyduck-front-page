import React, { Component } from "react";

import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import Footer from "parts/Footer";

import classDetails from "json/classDetails.json";

export default class DetailPage extends Component {
  render() {
    return (
      <>
        <Header {...this.props} />
        <PageDetailTitle data={classDetails} />
        <Footer />
      </>
    );
  }
}
