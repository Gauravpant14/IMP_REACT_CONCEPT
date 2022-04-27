import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Gaurav",
    };
    console.log("lifecycleA construcotr");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("lifecycleA getDerivedStateFromProps", props, state);
    return null;
  }
  
  componentDidMount() {
    console.log("lifecycleA componentdid Mount");
  }

  shouldComponentUpdate() {
    console.log("LifecycleA shouldComponentUpdate method");
    return true;
  }

  getSnapshotBeforeUpdate(preProps, prevState) {
    console.log("LifecycleA getSnapshotBeforeUpdate method");
    return null;
  }

  componentDidUpdate() {
    console.log("LifecycleA componentDidUpdate ");
  }
 
  changeState() {
    this.setState({ name: "State changed" });
  }
  render() {
    console.log("LifecycleA renderred");
    return (
      <div>
        <h1>LifeCycleA {this.state.name}</h1>
        <button onClick={() => this.changeState()}>change state</button>
        <LifeCycleB data={this.state.name} />
      </div>
    );
  }
}

export default LifeCycleA;
