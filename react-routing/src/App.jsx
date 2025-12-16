
import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom"
import { Dashboard } from "./components/Dashboard"
import { Landing } from "./components/Landing"


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
function App() {
  return (
    <div>
        <BrowserRouter>
            <TopBar/>
            <Routes>
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/" element={<Landing/>} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

function TopBar(){
    const navigate = useNavigate();
    return <div>
        <button onClick={()=>{
            navigate("/")
        }} >Landing Page</button>
        <button onClick={()=>{
            navigate("/dashboard")
        }} >Dashboard Page</button>
    </div>
}
export default App
