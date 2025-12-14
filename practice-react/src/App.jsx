import { useEffect, useState } from "react"
import React from "react";
import axios from "axios";

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
// function App(){
//     return <div>
//         <CardWrapper>
//             <TextComponent/>
//         </CardWrapper> 
//         <CardWrapper>
//             <TextComponent2/>
//         </CardWrapper>
//     </div>
// }
// function TextComponent(){
//     return <div>
//         Hii there
//     </div>
// }
// function TextComponent2(){
//     return <div>
//         Hii there2
//     </div>
// }
// function CardWrapper({children}){
//     return <div style={{border:"2px solid", marginTop: "2px"}}>
//         {children}
//     </div>
// }
// export default App

// useEffect
// function App(){
//     useEffect(()=>{
//         // control will reach here when first time it gets render
//         alert("hi");
//     },[])
//     return <div>
//         Hii There!
//     </div>
// }

// function App(){
//     const [sum,setSum] = useState(0);
//     useEffect(()=>{
//         // control will reach here when first time it gets render if array is empty or if array
//         // contains something then control reaches here when any element of array changes usually array contains state variable as it's element
//         const intervalId = setInterval(async ()=>{
//             const a = Math.floor(Math.random()*100);
//             const b = Math.floor(Math.random()*100);
//             const res = await fetch("http://localhost:3000/sum?a="+a+"&b="+b);
//             const data = await res.json();
//             setSum(data.sum);
//         },10000)
//         return ()=> clearInterval(intervalId);
//     },[])
//     return <div>
//         Sum is {sum}
//     </div>
// }

// export default App

// function App(){
//     const [sum,setSum] = useState(0);
//     useEffect(()=>{
//         const a = Math.floor(Math.random()*100);
//         const b = Math.floor(Math.random()*100);
//         axios.get("http://localhost:3000/sum?a="+a+"&b="+b)
//         .then(function (res){
//             setSum(res.data.sum)
//         })
//     },[])
//     return <>
//         sum is {sum}
//     </>
// }
// export default App

// dependencies in useEffect 
function App(){
    const [a,setA] = useState();
    const [b,setB] = useState();
    return <>
        <b>Choose A: </b>
        <button onClick={()=>{
            setA(1);
        }} >1</button>
        <button onClick={()=>{
            setA(2);
        }} >2</button>
        <button onClick={()=>{
            setA(3);
        }} >3</button>
        <button onClick={()=>{
            setA(4);
        }} >4</button>
        <button onClick={()=>{
            setA(5);
        }} >5</button>
        <br /><br />

        <b>Choose B: </b>
        <button onClick={()=>{
            setB(1);
        }} >1</button>
        <button onClick={()=>{
            setB(2);
        }} >2</button>
        <button onClick={()=>{
            setB(3);
        }} >3</button>
        <button onClick={()=>{
            setB(4);
        }} >4</button>
        <button onClick={()=>{
            setB(5);
        }} >5</button>
        <br /><br />

        <Sum a={a} b={b} />
    </>
}
function Sum({a,b}){
    const [sum,setSum] = useState();
    useEffect(()=>{
        axios.get("http://localhost:3000/sum?a="+a+"&b="+b)
        .then(function (res){
            setSum(res.data.sum);
        })
    },[a,b])
    return <div>
        sum is {sum}
    </div>
}

export default App