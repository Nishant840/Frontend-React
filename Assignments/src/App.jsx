import { useCallback } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { memo } from 'react';
import { useMemo } from 'react'
import { useState } from 'react'


// 1) find factorial from user input
// function App() {
//   const [inputVal, setInputVal] = useState(0)
//   let fact = useMemo(()=>{
//     let ans = 1;
//     for(let i=1;i<=inputVal;i++) ans *= i;
//     return ans;
//   },[inputVal]);
//   return <div>
//     <input type="number" value={inputVal} onChange={(e)=>{
//         setInputVal(parseInt(e.target.value))
//     }} />
//     <p>Calculated factorial: {fact} </p>
//   </div>
// }

// export default App

// 2) filter sentence based on a sepcific word
// const words = ["hi", "my","name","is","for", "to", "random", "word"];
// const TOTAL_LINES = 1000;
// const ALL_WORDS = [];
// for (let i= 0; i < TOTAL_LINES; i++) {
//     let sentence = "";
//     for (let j=0;j<words.length;j++) {
//         sentence += (words[Math.floor(words.length * Math.random())]);
//         sentence += " ";
//     }
//     ALL_WORDS.push(sentence);
// }
// function App() {
//     const [sentence, setSentence] = useState(ALL_WORDS);
//     const [filter,setFilter] = useState("");

//     const filteredSentence = useMemo(()=>{
//         return sentence.filter(x=>x.includes(filter))
//     },[filter,sentence])

//     return <div>
//         <input type="text" placeholder='enter filtering word' onChange={(e)=>{
//             setFilter(e.target.value)
//         }} />
//         {filteredSentence.map((word, index)=>
//             <div key={index} >
//                 {word}
//             </div>
//         )}
//     </div>
// }

// export default App

// 3) create a counter with increment and decrement button button shouldn't re-render as count changes
// function App(){
//     const [count,setCount] = useState(0);

//     const handleIncrement = useCallback(()=>{
//         setCount(count => count+1);
//     },[]);

//     const handleDecrement = useCallback(()=>{
//         // setCount(count => count-1);
//         setCount((currCount)=>{
//             return currCount-1;
//         })
//     },[]);
//     return <div>
//         <p>Count is {count}</p>
//         <CounterButton onIncrement={handleIncrement} onDecrement={handleDecrement} />
//     </div>
// }
// const CounterButton = memo(({onIncrement,onDecrement})=>{
//     return <div>
//         <button onClick={onIncrement} >Increment</button>
//         <button onClick={onDecrement} >Decrement</button>
//     </div>
// })
// export default App

// 4) showing alert with text field

// function App(){
//     const [text,setText] = useState("");
//     const alertHandler = useCallback(()=>{
//         alert(text);
//     },[text])
//     return <div>
//         <input type="text" placeholder='Enter text' onChange={(e)=>{
//             setText(e.target.value);
//         }} />
//         <br /><br />
//         <button onClick={alertHandler} >Show alert</button>
//     </div>
// }

// export default App

// 5) create a text input field and button when component mounts or button clicked
//  automatically focus on text input field using useRef

// function App(){
//     const inputref = useRef();

//     useEffect(()=>{
//         inputref.current.focus();
//     },[inputref])
//     function focusButtonHandler(){
//         // document.getElementById("inputBox").focus();
//         inputref.current.focus();
//     }
//     return <div>
//         <input id='inputBox' type="text" placeholder='Enter text' ref={inputref} />
//         <br /><br />
//         <button onClick={focusButtonHandler} >Focus Button</button>
//     </div>
// }

// export default App

// 6) create component that track and display number of times it has rendered
function App(){
    const [count,setCount] = useState(0);
    const numberOfRendered = useRef(0);
    numberOfRendered.current = numberOfRendered.current+1;
    return <div>
        <p>This component has rendered {numberOfRendered.current} times</p>
        <button onClick={()=>{
            setCount(count+1);
        }} >Re-Render</button>
    </div>
}
export default App

