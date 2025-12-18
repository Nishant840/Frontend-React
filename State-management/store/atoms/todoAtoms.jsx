import { atomFamily, selectorFamily } from "recoil";
import { TODOS } from "../../src/todos";
import axios from "axios"


// export const todoAtomFamily = atomFamily({
//     key: "todoAtomFamily",
//     default: id => {
//         return TODOS.find(x => x.id == id);
//     }
// })

// selectors family
// export const todoAtomFamily = atomFamily({
//     key: "todoAtomfamily",
//     default: selectorFamily({
//         key: "todoAtomSelectorFamily",
//         get: function(id){
//             return async function ({get}){
//                 const res = await axios.get("http://localhost:3000/todos?id=" + id);
//                 return res.data.todo;
//             }
//         }
//     })
// })


export const todoAtomFamily = atomFamily({
    key: "todoAtomfamily",
    default: selectorFamily({
        key: "todoAtomSelectorFamily",
        get: function(id){
            return async function ({get}){
                await new Promise(r=>setTimeout(r,5000));
                const res = await axios.get("http://localhost:3000/todos?id=" + id);
                return res.data.todo;
            }
        }
    })
})