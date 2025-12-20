import { useState,Component, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"

// function App() {
//   return (
//     <>
//       <Mycomponent />
//     </>
//   )
// }

// function Mycomponent(){
//     const [count,setCount] = useState(0);
//     return <div>
//         <p>{count}</p>
//         <button onClick={()=>{
//             setCount(count => count+1);
//         }} >Increment</button>
//     </div>
// }

// class Mycomponent extends Component{
//     constructor(props){
//         super(props);
//         this.state= {count:0};
//     }
//     IncrementCount = ()=>{
//         this.setState({count: this.state.count+1});
//     }
//     render(){
//         return <div>
//             <p>{this.state.count}</p>
//             <button onClick={this.IncrementCount} >Increment</button>
//         </div>
//     }
// }


// function App() {
//     const [render,setRender] = useState(true);
//     useEffect(()=>{
//         setInterval(() => {
//         setRender(r => !r);
//         }, 5000)
//     },[])
//     return (
//         <>
//         {(render)? <MyComponent />: <div>2nd div</div>}
//         </>
//     )
// }
// function MyComponent(){
//     useEffect(()=>{
//         console.log("component mounted");
//         return ()=>{
//             console.log("component unmounted");
//             // when dependencies changes after first time than first this fxn run then inside fxn of useEffect runs
//             // it is for cleaning
//         };
//     },[]);

//     return <div>
//         hii from inside component
//     </div>
// }
// class MyComponent extends Component {
//   componentDidMount() {
//     // Perform setup or data fetching here
//     console.log("component mounted");
//   }

//   componentWillUnmount() {
//     // Clean up (e.g., remove event listeners or cancel subscriptions)
//     console.log("component unmounted");
//   }

//   render() {
//     // Render UI
//     return <div>
//         hii there
//     </div>
//   }
// }
// export default App


// function App(){
//     const [sum,setSum] = useState(0);

//     useEffect(()=>{
//         axios.get("http://localhost:3000/sum?a=1&b=40")
//         .then((res)=>{
//             setSum(res.data)
//         })
//     },[])

//     return <div>
//         <b>{sum}</b>
//     </div>
// }
// export default App;


// data fetching customHook
function useSum(n){
    const [sum,setSum] = useState(0);
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        const intervalValue = setInterval(()=>{
            const a = Math.floor(Math.random()*100);
            const b = Math.floor(Math.random()*100);
            axios.get("http://localhost:3000/sum?a=" + a + "&b=" + b)
            .then((res)=>{
                setSum(res.data)
                setLoading(false);
            })
        },n*1000)

        const a = Math.floor(Math.random()*100);
        const b = Math.floor(Math.random()*100);
        axios.get("http://localhost:3000/sum?a=" + a + "&b=" + b)
        .then((res)=>{
            setSum(res.data)
            setLoading(false);
        })

        return ()=>{
            clearInterval(intervalValue);
        }
    },[n])
    return {sum,loading};
}
function App(){
    const {sum,loading} = useSum(1);
    if(loading){
        return <div>
            loading..
        </div>
    }
    return <div>
        <b>{sum}</b>
    </div>
}
export default App;