import React, { Component } from "react";

import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import Footer from "parts/Footer";

import { axios } from "configs/axios";

export default class DetailPage extends Component {
  state = {
    classDetail: [],
  };

  componentDidMount() {
    document.title = `Otodyduck | Class Detail`;
    window.scrollTo(0, 0);

    axios
      .get(
        `${process.env.REACT_APP_API_HOST}/courses/${this.props.match.params.slug}`
      )
      .then((res) => this.setState({ classDetail: res.data.data }))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <>
        <Header {...this.props} />
        <PageDetailTitle data={this.state?.classDetail} />
        <Footer />
      </>
    );
  }
}
