import React, { Component } from "react";

import Header from "parts/Header";
import FlowDetail from "parts/FlowDetail";
import Footer from "parts/Footer";

import { axios } from "configs/axios";

export default class FlowDetailPage extends Component {
  state = {
    flowDetail: [],
  };

  componentDidMount() {
    document.title = `Otodyduck | Flow Learning`;
    window.scrollTo(0, 0);

    axios
      .get(
        `${process.env.REACT_APP_API_HOST}/flow/${this.props.match.params.slug}`
      )
      .then((res) => this.setState({ flowDetail: res.data.data }))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <>
        <Header {...this.props} />
        <FlowDetail data={this.state?.flowDetail} />
        <Footer />
      </>
    );
  }
}
