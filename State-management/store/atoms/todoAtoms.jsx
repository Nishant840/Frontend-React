import { atomFamily } from "recoil";
import { TODOS } from "../../src/todos";


export const todoAtomFamily = atomFamily({
    key: "todoAtomFamily",
    default: id => {
        return TODOS.find(x => x.id == id);
    }
})