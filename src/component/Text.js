import React,{useState} from "react";
import Draggable from "react-draggable";
export default function Text() {
    const [edit,setEdit]=useState(false);
    const [val,setVal]=useState("Double Click TO Edit");
  return (
    <div>
      <Draggable>
         {
              edit?(
                 <input onDoubleClick={(e)=>setEdit(false)}
                    value={val} onChange={e=>setVal(e.target.value)}
                 />
              ):(
                 <h3 onDoubleClick={e=>setEdit(true)}>{val}</h3>
              )
         }
      </Draggable>
    </div>
  );
}
