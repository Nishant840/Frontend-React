
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

import { useRecoilState, useRecoilValue, useSetRecoilState, RecoilRoot } from "recoil"
import { jobAtom, networkAtom, notificationAtom, totalCountSelector } from "../store/atoms/count"


function App(){
    return <RecoilRoot>
        <MainApp />
    </RecoilRoot>
}

function MainApp(){
    const networkCount = useRecoilValue(networkAtom);
    const jobsCount = useRecoilValue(jobAtom);
    const messageCount = useRecoilValue(jobAtom);
    const notificationCount = useRecoilValue(notificationAtom);

    const totalCount = useRecoilValue(totalCountSelector);

    return <div style={{margin: "20px"}} >
        <button>Home</button>

        <button>My Network ({networkCount > 99 ? "99+" : networkCount })</button>
        <button>Jobs ({jobsCount}) </button>
        <button>Messagings ({messageCount}) </button>
        <button>Notifications ({notificationCount}) </button>
        <button>me ({totalCount}) </button>
    </div>
}
export default App