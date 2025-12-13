import { useState } from "react"

function App() {
  const [name,setName] = useState("Nishant");

  return (
    <>
      <button onClick={()=>{
        setName(Math.random());
      }}>click to change the name</button>
      <Header name={name} />
      <Header name="Chhotu" />
    </>
  )
}
function Header({name}){
  return <div>
    My name is {name}
  </div>
}
export default App
