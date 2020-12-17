import React, { Component } from "react";

import Header from "parts/Header";
import FlowList from "parts/FlowList";
import FAQ from "parts/SmallFAQ";
import Footer from "parts/Footer";

import { axios } from "configs/axios";
export default class FlowPage extends Component {
  state = {
    flowList: [],
  };
  
  componentDidMount() {
    document.title = "Otodyduck | Flow Learning";

    axios
      .get(`${process.env.REACT_APP_API_HOST}/flow`)
      .then((res) => {
        this.setState({ flowList: res.data });
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <>
        <Header {...this.props} />
        <FlowList data={this.state.flowList} />
        <FAQ />
        <Footer />
      </>
    );
  }
}
