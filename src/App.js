import React from "react";
import PropTypes from "prop-types"
import { toBeInTheDOM } from "@testing-library/jest-dom/dist/matchers";

// function App() {
//   return (
//     <React.Fragment>
//       <label htmlFor="bar">bar</label>
//       <input type="text" onClick={()=>{console.log("I am")}} />
//     </React.Fragment>
//   )

// }

const App =() => {
  const profiles = [
    {name: "Taro", age: 100},
    {name: "Hanako", age: 15},
    {name: "NoNmae", age: 300},
  ]
  return (
    <React.Fragment>
      {
        profiles.map((profile, index)=> {
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </React.Fragment>
  )

}

const User = (props)=> {
  return <div>HI, I am {props.name}!, and {props.age} year old</div>
}

User.prototype ={
  name: PropTypes.string,
  age : PropTypes.number,
}

export default App;
