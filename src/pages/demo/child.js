import React from "react";
export default class Child extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    console.log("componentWillMount");
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentWillReceiveProps(newprops) {

    console.log(newprops);
    console.log("componentWillReceiveProps");
  }
  render() {
  return <div>this is child {this.props.name}</div>;
  }
}
