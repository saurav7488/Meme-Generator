import React, {useState} from "react";
import Text from "./Text";
import { useSearchParams } from "react-router-dom";
export default function Editpage() {
  const [params] = useSearchParams();
  const [count,setCount]=useState(0);
  const addtext=()=>{
       setCount(count+1);
  }
  return (
    <div>
      <div>
        <img src={params.get("url")} width="300px" />
        {
           Array(count).fill(0).map(e=><Text/>)
        }
      </div>
      <button onClick={addtext} className="btn btn-primary my-3">ADD Text</button>
    </div>
  );
}
