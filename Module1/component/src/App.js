import React, { Component } from 'react';
import './App.css';
import Chip from "./Chip"
import "./item.css"

const data = [
  {
    name: 'Cao Ghi Danh',
    status: 'untested',
  },
  {
    name:'Van Do Dat',
    status:'passed',
  },
  {
    name:"Nguyen Van Toach",
    status:'failed'
  }
]

const simpleData = [
  'Cao Ghi Danh',
  'Van Do Dat',
  'Nguyen Van Toach',
]

const Item = (props) =>{
  return(
    <div>
      <div className = "item-name">{props.name}</div>
      <Chip text = {props.statusText} color = {props.statusColor}/>
    </div>
  );
}

// simpleData.map(
//   (n, index) => (<div key={index.toString()}>{n}</div>)
// )

class App extends Component {
  render() {
    return (
      <div>
        {
          data.map(
            (n, index) => (
            <div key = {index.toString()}>
              <Item name = {n.name} statusText = {n.status} statusColor = {n.status}/>
            </div>
            )
          )
        }
      </div>
    );
  }
}

export default App;
