import React, { Component } from "react";

import Header from "parts/Header";
import AllClassList from "parts/AllClassList";
import Flow from "parts/Flow";
import Footer from "parts/Footer";

import { axios } from "configs/axios";
// import classPage from "json/classPage.json";

export default class ClassPage extends Component {
  state = {
    classList: [],
  };

  componentDidMount() {
    document.title = "Otodyduck | Class List";

    axios
      .get(`${process.env.REACT_APP_API_HOST}/courses`)
      .then((res) => {
        this.setState({ classList: res.data });
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <>
        <Header {...this.props} />
        <AllClassList data={this.state.classList?.data} />
        <Flow />
        <Footer />
      </>
    );
  }
}
