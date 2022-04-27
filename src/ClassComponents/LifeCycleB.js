import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "pant",
    };
    console.log("LifeCycleB construcotr");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleB getDerivedStateFromProps", props);
    return null;
  }
  
  componentDidMount() {
    console.log("LifeCycleB componentdid Mount");
  }

  shouldComponentUpdate() {
    console.log("LifecycleB shouldComponentUpdate method");
    return true;
  }

  getSnapshotBeforeUpdate(preProps, prevState) {
    console.log("LifecycleB getSnapshotBeforeUpdate method");
    return null;
  }

  componentDidUpdate() {
    console.log("LifecycleB componentDidUpdate ");
  }
  render() {
    console.log("LifeCycleB renderred");
    return <div>LifeCycleB</div>;
  }
}

export default LifeCycleB;
