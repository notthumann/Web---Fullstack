import React, { Component } from 'react';
import "./Rec.css"



class App extends Component {
    constructor() {
      super();
      this.state = {
        point : 0
      };
      this.plus = this.plus.bind(this);
      this.minus = this.minus.bind(this);
    }
  
    plus() {
      this.setState({
        point : this.state.point +1
      });
      console.log(this.state.point)
    }
    minus() {
      this.setState({
        point : this.state.point -1
      });
      console.log(this.state.point)
    }
  
  render() {
    const { point } = this.state;
    return (
      <div className = "container">
        <button  className = "rectangle green sign" onClick = {this.plus}>+</button>
        <div className= "point">{point}</div>
        <button className = "rectangle red sign"  onClick = {this.minus}>-</button>
      </div>
    );
  };
};

export default App;
