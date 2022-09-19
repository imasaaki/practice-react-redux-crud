import React, {Component} from "react";

// function App() {
//   return (
//     <React.Fragment>
//       <label htmlFor="bar">bar</label>
//       <input type="text" onClick={()=>{console.log("I am")}} />
//     </React.Fragment>
//   )

// }

const App =() => (<Counter></Counter>)
class Counter extends Component {
  constructor(props){
    super(props)
    this.state = {count : 0}
  }

  handlePlusButton = ()=> {
    this.setState({count: this.state.count + 1})
  }
  handleMinusButton = ()=> {
    this.setState({count: this.state.count - 1})
  }

  render() {
    console.log(this.state)
    return (
      <React.Fragment>
        <div>counter: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}

export default App;
