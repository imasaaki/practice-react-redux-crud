import React from "react";

function App() {
  return (
    <React.Fragment>
      <label htmlFor="bar">bar</label>
      <input type="text" onClick={()=>{console.log("I am")}} />
    </React.Fragment>
  )

}

export default App;
