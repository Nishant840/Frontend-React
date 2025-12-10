import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <CustomButton count={count} setCount={setCount}></CustomButton>
//     </div>
//   )
// }

// // component
// function CustomButton(props){
//   return <button onClick={()=>{
//       props.setCount(props.count+1);
//     }}>Counter {props.count}</button>
  
// }


function App() {
  const [todos, setTodos] = useState([{
    title: "Gym",
    description: "Go to gym from 5-9 p.m"
  },{
    title: "DSA",
    description: "Study DSA from 9-11 p.m"
  }]);

  function addTodo(){
    setTodos([...todos,{
      "title": "new todo",
      description: "new todo description"
    }])
  }

  return (
    <div>
      <button onClick={addTodo}>Add todo</button>
      {todos.map(function(todo){
        return <Todo title={todo.title} description={todo.description}></Todo>
      })}
    </div>
  )
}

function Todo(props){
    return <div>
        <h1>{props.title}</h1>
        <h2>{props.description}</h2>
    </div>
}

export default App