import React, { Component } from "react";
import { connect } from "react-redux";

class Gifs extends Component {
  render() {
    return <div></div>;
  }
}

const mapStateToProps = (state) => ({ gifs: state.gifs });

export default connect(mapStateToProps)(Gifs);
