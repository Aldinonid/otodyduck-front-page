import React, { Component } from "react";

import Header from "parts/Header";

export default class FlowPage extends Component {
  componentDidMount() {
    document.title = "Otodyduck | Flow Learning";
  }
  render() {
    return (
      <>
        <Header {...this.props} />
      </>
    );
  }
}
