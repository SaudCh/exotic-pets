import React, { Component } from "react";

export default class MyClass extends Component {
  state = {
    nme: this.props.name,
  };
  render() {
    return (
      <div>
        <h1>Hello {this.nme}</h1>
      </div>
    );
  }
}
