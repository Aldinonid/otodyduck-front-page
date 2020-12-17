import React, { Component } from "react";

import Header from "parts/Header";
import Hero from "parts/Hero";
import ClassList from "parts/ClassList";
import Flow from "parts/Flow";
import Footer from "parts/Footer";

import { axios } from "configs/axios";

export default class LandingPage extends Component {
  state = {
    landingPage: [],
  };

  componentDidMount() {
    document.title = "Otodyduck | Home";
    window.scrollTo(0, 0);

    axios
      .get(`${process.env.REACT_APP_API_HOST}/landing-page`)
      .then((res) => this.setState({ landingPage: res.data }))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <>
        <Header {...this.props} />
        <Hero data={this.state.landingPage?.hero} />
        <ClassList data={this.state.landingPage?.class} />
        <Flow />
        <Footer />
      </>
    );
  }
}
