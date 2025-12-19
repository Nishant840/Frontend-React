
// function App() {

import { RevenueCard } from "./components/RevenueCard"

//   return (
//     <>
//       {/* <div style={{display:"flex", justifyContent:"space-between"}} >
//         <div style={{backgroundColor:"red"}} >
//             Hii there1
//         </div>
//         <div style={{backgroundColor:"green"}} >
//             hi therre2
//         </div>
//         <div style={{backgroundColor:"yellow"}} >
//             hi there3
//         </div>
//       </div> */}

//       {/* doing same things via tailwind */}
//       {/* <div className="flex justify-between" >
//         <div className="bg-red-500" >
//             Hii there1
//         </div>
//         <div className="bg-green-500" >
//             hi there2
//         </div>
//         <div className="bg-yellow-500" >
//             hi there3
//         </div>
//       </div> */}



//       {/* grid in tailwind */}
//       {/* <div className="grid grid-flow-row-dense grid-cols-10 gap-4 " >
//         <div className="bg-red-500 col-span-4" >
//             Hii there1
//         </div>
//         <div className="bg-green-500 col-span-4" >
//             hi there2
//         </div>
//         <div className="bg-yellow-500 col-span-2" >
//             hi there3
//         </div>
//       </div> */}


//       {/* making a responsive grid */}
//       <div className="grid grid-cols-1 md:grid-cols-10 md:gap-4 " >
//         <div className="bg-red-500 md:col-span-4 " >
//             Hii there1
//         </div>
//         <div className="bg-green-500 md:col-span-4 " >
//             hi there2
//         </div>
//         <div className="bg-yellow-500 md:col-span-2 " >
//             hi there3
//         </div>
//       </div>
//     </>
//   )
// }
function App(){
    return <div className="grid grid-cols-4" >
        <RevenueCard title={"Amount pending"} amount={"92,312.00"} orderCount={13} />
    </div>
}
export default App
