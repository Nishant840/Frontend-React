import { useState } from "react"
import React from "react";

// function App() {
//   const [name,setName] = useState("Nishant");
//   // if name changes then App component will re-render and all it's child will get re-render
//   return (
//     <>
//       <button onClick={()=>{
//         setName(Math.random());
//       }}>click to change the name</button>
//       <Header name={name} />
//       <Header name="Chhotu" />
//     </>
//   )
// }
// function Header({name}){
//   console.log("rendered")
//   return <div>
//     My name is {name}
//   </div>
// }
// export default App

// in this whole App is not re-rendering:
// function App() {
//   return (
//     <>
//       <HeaderWithButton />
//       <Header name="Chhotu" />
//       <Header name="Chhotu" />
//       <Header name="Chhotu" />
//     </>
//   )
// }

// function HeaderWithButton(){
//   const [name,setName] = useState("Nishant");
//   return <>
//       <button onClick={()=>{
//         setName(Math.random());
//       }}>click to change the name</button>
//       <Header name={name} />
//   </>
// }
// function Header({name}){
//   return <div>
//     My name is {name}
//   </div>
// }
// export default App

// 2nd way to do uaing React.memo()

function App() {
  const [name,setName] = useState("Nishant");
  return (
    <div>
      <button onClick={()=>{
        setName(Math.random());
      }}>click to change the name</button>
      <Header name={name} />
      <Header name="Chhotu" />
      <Header name="Chhotu" />
      <Header name="Chhotu" />
      <Header name="Chhotu" />
      <Header name="Chhotu" />
    </div>
  )
}
const Header = React.memo(function Header({name}){
  return <div>
    My name is {name}
  </div>
})

export default App
