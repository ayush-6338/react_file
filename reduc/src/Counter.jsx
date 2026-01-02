import {useSelector,useDispatch} from "react-redux";
import { increment,decrement,reset } from "./counterSlice";
export default function Counter(){
    const value = useSelector((state)=>state.counter.value);
    const dispatch = useDispatch();
    return(
        <div className="space-x-4">
            <h1>Counter : {value}</h1>
            <button onClick={()=>dispatch(decrement())} className="border bg-slate-400 pl-4 pr-4">-</button>
            <button onClick={()=>dispatch(increment())} className="border bg-slate-400 pl-4 pr-4">+</button>
            <button onClick={()=>dispatch(reset())} className="border bg-orange-400 pl-4 pr-4">reset</button>   
        </div>
    )
}