import React, {useState,createRef} from "react";
import Text from "./Text";
import { useSearchParams } from "react-router-dom";
import { exportComponentAsJPEG} from 'react-component-export-image';
export default function Editpage() {
  const [params] = useSearchParams();
  const [count,setCount]=useState(0);
  const memeref=createRef();
  const addtext=()=>{
       setCount(count+1);
  }
  return (
    <div>
      <div ref={memeref}>
        <img src={params.get("url")} width="300px" />
        {
           Array(count).fill(0).map(e=><Text/>)
        }
      </div>
      <button onClick={addtext} className="btn btn-primary my-3">ADD Text</button>
      <button onClick={(e)=>exportComponentAsJPEG(memeref)} className="btn btn-primary my-3 mx-3">Save</button>

    </div>
  );
}
