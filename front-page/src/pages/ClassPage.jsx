import React, { Component } from "react";

import Header from "parts/Header";
import ClassList from "parts/AllClassList";
import Flow from "parts/Flow";
import Footer from "parts/Footer";

import classPage from "json/classPage.json";

export default class ClassPage extends Component {
  componentDidMount() {
    document.title = "Otodyduck | Class List";
  }
  render() {
    return (
      <>
        <Header {...this.props} />
        <ClassList data={classPage.classList} />
        <Flow />
        <Footer />
      </>
    );
  }
}
