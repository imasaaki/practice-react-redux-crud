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
  return (
    <React.Fragment>
      <Cat/>
      <Cat/>
      <Cat/>
      <Cat/>
    </React.Fragment>
  )

}

const Cat = ()=> {
  return <div>Meow!!</div>
}


export default App;
