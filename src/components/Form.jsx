import React, { Component } from "react";

class Form extends Component {
  state = { word: "" };

  render() {
    return (
      <form
        onSubmit={(e) => {
          this.onSubmit(e);
        }}
      >
        <input
          type="text"
          value={this.state.word}
          onChange={this.handleChange}
        />
        <input type="submit" value="search" />
      </form>
    );
  }

  handleChange = (event) => this.setState({ word: event.target.value });

  onSubmit = (e) => {
    const { getUrls } = this.props;
    e.preventDefault();
    getUrls(this.state.word);
    this.setState({ text: "" });
  };
}

export default Form;
