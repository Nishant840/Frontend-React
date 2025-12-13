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

// function App() {
//   const [name,setName] = useState("Nishant");
//   return (
//     <div>
//       <button onClick={()=>{
//         setName(Math.random());
//       }}>click to change the name</button>
//       <Header name={name} />
//       <Header name="Chhotu" />
//       <Header name="Chhotu" />
//       <Header name="Chhotu" />
//       <Header name="Chhotu" />
//       <Header name="Chhotu" />
//     </div>
//   )
// }
// const Header = React.memo(function Header({name}){
//   return <div>
//     My name is {name}
//   </div>
// })
// export default App


// Keys in react: react need key for lists to keep track of what has been changes and what to re-render
// let counter = 4;
// function App(){
//     const [todos,setTodos] = useState([{
//         id:1,
//         title:"Gym",
//         description: "Gym from 5-7 p.m"
//     },{
//         id:2,
//         title:"Gym",
//         description: "Gym from 5-7 p.m"
//     },{
//         id:3,
//         title:"Gym",
//         description: "Gym from 5-7 p.m"
//     }])
//   return <div>
//     <button onClick={()=>{
//         setTodos([...todos,{
//             id: counter++,
//             title: Math.random(),
//             description: Math.random()
//         }])
//     }}>Add new Todo</button>
//     {todos.map((todo)=>(
//         <Todo key={todo.id} title={todo.title} description={todo.description} />
//     ))}
//   </div>
// }
// function Todo({title, description}){
//     return <div>
//         <h1>{title}</h1>
//         <h4>{description}</h4>
//     </div>
// }
// export default App


// wrapper component in react
function App(){
    return <div>
        <CardWrapper>
            <TextComponent/>
        </CardWrapper> 
        <CardWrapper>
            <TextComponent2/>
        </CardWrapper>
    </div>
}
function TextComponent(){
    return <div>
        Hii there
    </div>
}
function TextComponent2(){
    return <div>
        Hii there2
    </div>
}
function CardWrapper({children}){
    return <div style={{border:"2px solid", marginTop: "2px"}}>
        {children}
    </div>
}
export default App