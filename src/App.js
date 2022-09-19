import React from "react";

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
    {name: "Hanako"},
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

User.defaultProps ={
  age: 1
}


export default App;
