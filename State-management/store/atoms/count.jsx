
// import {atom, selector} from "recoil"


// export const countAtom = atom({
//     key: "countAtom",
//     default: 0
// });
// // key is used to indetify atom uniquely

// // selectors
// export const evenSelector = selector({
//     key: "evenSelector",
//     get: (props)=>{
//         const count = props.get(countAtom);
//         return count%2==0;
//     }
// })

// atoms of topbar of LinkedIn

import {atom, selector} from "recoil"
export const networkAtom= atom({
    key: "networkAtom",
    default:102
})

export const jobAtom = atom({
    key: "jobAtom",
    default: 0
})
export const notificationAtom = atom({
    key: "notificationAtom",
    default: 2
})
export const messageAtom = atom({
    key: "messageAtom",
    default: 0
})

export const totalCountSelector = selector({
    key: "totalCount",
    get: ({get})=>{
        const networkCount = get(networkAtom);
        const jobsCount = get(jobAtom);
        const messageCount = get(jobAtom);
        const notificationCount = get(notificationAtom);
        return networkCount+jobsCount+messageCount+notificationCount;
    }
})