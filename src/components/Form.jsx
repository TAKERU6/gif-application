import React, { Component } from "react";
import { connect } from "react-redux";

class Form extends Component {
  render() {
    return (
      <form action="">
        <input type="text" />
        <input type="submit" value="search" />
      </form>
    );
  }
}

const mapStateToProps = (state) => ({ gifs: state.gifs });
const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: () => dispatch(),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);
