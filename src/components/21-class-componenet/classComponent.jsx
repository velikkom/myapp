import React, { Component } from "react";
import { Button } from "react-bootstrap";

export class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      message: "Hello class component",
    };
  }

  componentDidMount(){
    console.log("Mounting burası her render da calışır")
  }
  componentDidUpdate(){
    console.log("Updating: burası sadece re render da calışır ilk calışmaz")
  }
  componentWillUnmount(){
    console.log("Unmounting burası component Dooomdan sonra calışır")
  }



    
 
  render() {
    return (
      <div>
        <h1>Class Component</h1>
        <p>Message : {this.state.message}</p>
        <p>Counter : {this.state.message}</p>

        <Button onClick={() => this.setState({ counter: this.state.counter + 1 })}>Click Me</Button>
      </div>
    );
  }
}