
// context API let us get rid of prop drilling but it doesn't solve re-rendering problem

import { useRecoilState, useRecoilValue, useSetRecoilState, RecoilRoot } from "recoil"
import { countAtom } from "../store/atoms/count"


function App() {
    return (
        <div>
            <RecoilRoot>
                <Count />
            </RecoilRoot>
        </div>
    )
}

function Count() {
    return <div>
        <CountRender />
        <Buttons />
    </div>
}
function CountRender(){
    const count = useRecoilValue(countAtom);
    return <div>
        {count}
    </div>
}
function Buttons(){
//   const [count,setCount] = useRecoilState(countAtom);
    const setCount = useSetRecoilState(countAtom);
    return <div>
        <button onClick={() => {
            // setCount(count+1);
            setCount(count=>count+1);
        }}>Increase</button>

        <button onClick={() => {
            // setCount(count-1);
            setCount(count=>count+1);
        }}>Decrease</button>
    </div>
}

export default App