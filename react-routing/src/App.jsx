
import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom"
// import { Dashboard } from "./components/Dashboard"
// import { Landing } from "./components/Landing"
import React, { useContext } from "react";
import { lazy, Suspense} from "react";


// function App() {
//   return (
//     <div>
//         <div>
//             <button onClick={()=>{
//                 // window.location.href = "/";  this will do hard reloading means page will get from backend again
//             }} >Landing Page</button>
//             <button onClick={()=>{
//                 window.location.href = "/dashboard"
//             }} >Dashboard Page</button>
//         </div>
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/dashboard" element={<Dashboard/>} />
//                 <Route path="/" element={<Landing/>} />
//             </Routes>
//         </BrowserRouter>
//     </div>
//   )
// }

// export default App

// useNavigate() hook always use it in inside BrowserRouter tag
// function App() {
//   return (
//     <div>
//         <BrowserRouter>
//             <TopBar/>
//             <Routes>
//                 <Route path="/dashboard" element={<Dashboard/>} />
//                 <Route path="/" element={<Landing/>} />
//             </Routes>
//         </BrowserRouter>
//     </div>
//   )
// }

// function TopBar(){
//     const navigate = useNavigate();
//     return <div>
//         <button onClick={()=>{
//             navigate("/")
//         }} >Landing Page</button>
//         <button onClick={()=>{
//             navigate("/dashboard")
//         }} >Dashboard Page</button>
//     </div>
// }
// export default App



// lazy loading

// const Dashboard = lazy(() => import("./components/Dashboard"));
// const Landing = lazy(() => import("./components/Landing"));

// function App(){
//     return <div>
//         <BrowserRouter>
//             <TopBar />
//             <Suspense fallback={<div>Loading...</div>}>
//             {/* React.lazy requires Suspense because lazy components are asynchronous, and React needs a 
//                 boundary to pause rendering while waiting for them. */}
//                 <Routes>
//                     <Route path="/dashboard" element={<Dashboard/>} />
//                     <Route path="/" element={<Landing/>} />
//                 </Routes>
//             </Suspense>
//         </BrowserRouter>
//     </div>
// }
// function TopBar(){
//     const navigate = useNavigate();
//     return <div>
//         <button onClick={()=>{
//             navigate("/")
//         }} >Landing Page</button>
//         <button onClick={()=>{
//             navigate("/dashboard")
//         }} >Dashboard Page</button>
//     </div>
// }

// export default App


// understanding prop drilling: when a component needed prop but many of it's parent doesn/t need it
// we still pass it this is prop drilling it makes codes unmanagable, and ugly/less_ readable

// import { useState } from "react"

// function App() {
//   const [count, setCount] = useState(0);
  
//   return (
//     <div>
//       <Count count={count} setCount={setCount}/>
//     </div>
//   )
// }

// function Count({count, setCount}) {
//     // setcount not needed here but button component needed so we have to take it as props this is prop drilling
//   return <div>
//     {count}
//     <Buttons count={count} setCount={setCount}  />
//   </div>
// }

// function Buttons({count,setCount}) {
//   return <div>
//     <button onClick={() => {
//         setCount(count => count+1)
//     }}>Increase</button>

//     <button onClick={() => {
//         setCount(count => count-1)
//     }}>Decrease</button>
//   </div>
// }

// export default App


// context API

//  it let us teleport prop from one component to another without explicitally passing through each component.
// it helps in gets rid of prop drilling 
// it also let us keep all state logic outside of main react component

import { useState } from "react"
import { CounterContext } from "./context";

function App() {
  const [count, setCount] = useState(0);
  
    //   wrap anyone that wants to use the teleported value inside the provider
    return (
        <div>
            <CounterContext.Provider value={count} >
            <Count setCount={setCount}/>
            </CounterContext.Provider>
        </div>
    )
}

function Count({setCount}) {
    return <div>
        <CountRender />
        <Buttons setCount={setCount}  />
    </div>
}
function CountRender(){
    const count = useContext(CounterContext)
    return <div>
        {count}
    </div>
}
function Buttons({setCount}){
    return <div>
        <button onClick={() => {
            setCount(count => count+1)
        }}>Increase</button>

        <button onClick={() => {
            setCount(count => count-1)
        }}>Decrease</button>
    </div>
}

export default App

