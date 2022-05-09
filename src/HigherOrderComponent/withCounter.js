import React from "react";

const withCounter = (WrappedComponent, incrementUsingParameter) => {
  //WithCounter refers to NewComponent

  class WithCounter extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((preState) => {
        return { count: preState.count + incrementUsingParameter };
      });
    };
    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      );
    }
  }
  return WithCounter;
};

export default withCounter;

//Function that accept a original component and return a new component
