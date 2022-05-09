import React, { Component } from "react";
import withCounter from './withCounter'
export class HoverCounter extends Component {
  
  render() {
    const {count, incrementCount, name} = this.props 
    return <div>
        {name}
        <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
    </div>;
  }
}

export default withCounter(HoverCounter, 10);
