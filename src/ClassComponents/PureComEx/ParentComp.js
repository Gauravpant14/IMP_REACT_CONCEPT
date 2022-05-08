import React, { Component } from "react";
import MemoComponent from "./MemoComponent";
import PureComp from "./PureComp";
import RegularComp from "./RegularComp";

export class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Gaurav",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Gaurav",
      });
    }, 2000);
  }
  render() {
    console.log("Parent component");
    return (
      <div>
        ParentComp
        <MemoComponent name={this.state.name} />
        {/* Commenting Regular componenet and Pure component for watching Memo component Effetcs */}
        {/* <RegularComp name={this.state.name}/>
          <PureComp name={this.state.name}/> */}
      </div>
    );
  }
}

export default ParentComp;
