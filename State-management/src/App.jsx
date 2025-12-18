
// // context API let us get rid of prop drilling but it doesn't solve re-rendering problem

// import { useRecoilState, useRecoilValue, useSetRecoilState, RecoilRoot } from "recoil"
// import { countAtom, evenSelector } from "../store/atoms/count"
// import { useMemo } from "react";


// function App() {
//     return (
//         <div>
//             <RecoilRoot>
//                 <Count />
//             </RecoilRoot>
//         </div>
//     )
// }

// function Count() {
//     return <div>
//         <CountRender />
//         <Buttons />
//     </div>
// }
// function CountRender(){
//     const count = useRecoilValue(countAtom);
//     return <div>
//         {count}
//         <EvenCountRenderer />
//     </div>
// }
// function EvenCountRenderer(){
//     // const count = useRecoilValue(countAtom);
//     // const isEven = useMemo(()=>{
//     //     return (count%2 == 0);
//     // },[count])

//     const isEven = useRecoilValue(evenSelector);
//     return <div>
//         {(isEven)?"It is Even":null}
//     </div>
// }
// function Buttons(){
// //   const [count,setCount] = useRecoilState(countAtom);
//     const setCount = useSetRecoilState(countAtom);
//     return <div>
//         <button onClick={() => {
//             // setCount(count+1);
//             setCount(count=>count+1);
//         }}>Increase</button>

//         <button onClick={() => {
//             // setCount(count-1);
//             setCount(count=>count-1);
//         }}>Decrease</button>
//     </div>
// }

// export default App




// making top bar of linkedIn

// import { useRecoilState, useRecoilValue, useSetRecoilState, RecoilRoot } from "recoil"
// import { jobAtom, networkAtom, notificationAtom, totalCountSelector } from "../store/atoms/count"


// function App(){
//     return <RecoilRoot>
//         <MainApp />
//     </RecoilRoot>
// }

// function MainApp(){
//     const networkCount = useRecoilValue(networkAtom);
//     const jobsCount = useRecoilValue(jobAtom);
//     const messageCount = useRecoilValue(jobAtom);
//     const notificationCount = useRecoilValue(notificationAtom);

//     const totalCount = useRecoilValue(totalCountSelector);

//     return <div style={{margin: "20px"}} >
//         <button>Home</button>

//         <button>My Network ({networkCount > 99 ? "99+" : networkCount })</button>
//         <button>Jobs ({jobsCount}) </button>
//         <button>Messagings ({messageCount}) </button>
//         <button>Notifications ({notificationCount}) </button>
//         <button>me ({totalCount}) </button>
//     </div>
// }
// export default App



// Asynchronus data queries
// import { useRecoilState, useRecoilValue, useSetRecoilState, RecoilRoot } from "recoil"
// import { details, totalDetailsCount } from "../store/atoms/count"
// import { useEffect} from "react";
// import axios from "axios";

// function App(){
//     return <RecoilRoot>
//         <MainApp />
//     </RecoilRoot>
// }

// function MainApp(){
//     const [allDetails,setAllDetails] = useRecoilState(details);
//     const totalCount = useRecoilValue(totalDetailsCount);

//     // useEffect(()=>{
//     //     axios.get("http://localhost:3000/details")
//     //     .then((res)=>{
//     //         setAllDetails(res.data);
//     //     })
//     // },[]);
//     return (
//         <div style={styles.container}>
//         <div style={styles.navbar}>
//             <button style={styles.btn}>Home</button>

//             <button style={styles.btn}>
//                 My Network
//                 <span style={styles.badgeFloat}>
//                     {allDetails.networkCount > 99 ? "99+" : allDetails.networkCount}
//                 </span>
//             </button>

//             <button style={styles.btn}>
//                 Jobs
//                 <span style={styles.badgeFloat}>{allDetails.jobsCount}</span>
//             </button>

//             <button style={styles.btn}>
//                 Messaging
//                 <span style={styles.badgeFloat}>{allDetails.jobsCount}</span>
//             </button>

//             <button style={styles.btn}>
//                 Notifications
//                 <span style={styles.badgeFloat}>{allDetails.jobsCount}</span>
//             </button>

//             <button style={{ ...styles.btn, ...styles.meBtn }}>
//                 Me ({totalCount})
//             </button>
//         </div>
//         </div>
//     );
// }
// const styles = {
//   container: {
//     backgroundColor: "#f3f2ef",
//     padding: "20px",
//     minHeight: "100vh"
//   },

//   navbar: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     backgroundColor: "#ffffff",
//     padding: "12px 20px",
//     borderRadius: "10px",
//     boxShadow: "0 2px 10px rgba(0,0,0,0.08)"
//   },

//   btn: {
//     position: "relative",        // ⭐ important
//     padding: "8px 18px",
//     border: "none",
//     borderRadius: "20px",
//     backgroundColor: "#eef3f8",
//     cursor: "pointer",
//     fontSize: "14px",
//     fontWeight: "500"
//   },

//   badgeFloat: {
//     position: "absolute",
//     top: "-6px",
//     right: "-6px",
//     backgroundColor: "#cc1016",  // LinkedIn red
//     color: "white",
//     borderRadius: "50%",
//     minWidth: "18px",
//     height: "18px",
//     padding: "0 5px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     fontSize: "11px",
//     fontWeight: "700",
//     lineHeight: "1"
//   },

//   meBtn: {
//     backgroundColor: "#0a66c2",
//     color: "white"
//   }
// };
// export default App


// learning about atom family

// import { useRecoilState, useRecoilValue, useSetRecoilState, RecoilRoot } from "recoil"
// import { todoAtomFamily } from "../store/atoms/todoAtoms";

// function App(){
//     return <RecoilRoot>
//         <Todo id={1} />
//         <Todo id={2} />
//         <Todo id={1} />
//     </RecoilRoot>
// }

// function Todo({id}){
//     const currentTodo = useRecoilValue(todoAtomFamily(id));

//     return <div>
//         {currentTodo.title}
//         <br />
//         {currentTodo.description}
//         <br />
//     </div>
// }
// export default App


// learning about selectorfamily

// import { useRecoilState, useRecoilValue, useSetRecoilState, RecoilRoot } from "recoil"
// import { todoAtomFamily } from "../store/atoms/todoAtoms";

// function App(){
//     return <RecoilRoot>
//         <Todo id={1} />
//         <Todo id={2} />
//         <Todo id={1} />
//     </RecoilRoot>
// }

// function Todo({id}){
//     const [currentTodo,setCurrentTodo] = useRecoilState(todoAtomFamily(id));

//     return <div>
//         {currentTodo.title}
//         <br />
//         {currentTodo.description}
//         <br />
//     </div>
// }
// export default App


// learning about useRecoilStateLoadable, useRecoilValueLoadable
import { useRecoilState, useRecoilValue, useSetRecoilState, RecoilRoot, useRecoilStateLoadable, useRecoilValueLoadable } from "recoil"
import { todoAtomFamily } from "../store/atoms/todoAtoms";

function App(){
    return <RecoilRoot>
        <Todo id={1} />
        <Todo id={2} />
        <Todo id={1} />
    </RecoilRoot>
}

function Todo({id}){
    // const [currentTodo,setCurrentTodo] = useRecoilStateLoadable(todoAtomFamily(id));
    const currentTodo = useRecoilValueLoadable(todoAtomFamily(id));
    // {
        // contents
        // state
    // }
    if(currentTodo.state == "loading"){
        return <div>
            Loading...
        </div>
    }
    else{
        return <div>
            {currentTodo.contents.title}
            <br />
            {currentTodo.contents.description}
            <br />
        </div>   
    }
}
export default App
