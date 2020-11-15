import React, { Component } from "react";
import { connect } from "react-redux";

class Gifs extends Component {
  render() {
    const { gifs } = this.props;
    return (
      <div>
        {Object.values(gifs).map((url) => (
          <img src={url}></img>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ gifs: state.gifs });

export default connect(mapStateToProps)(Gifs);
