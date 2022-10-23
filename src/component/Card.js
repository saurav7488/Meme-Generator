  import React from "react";
  import {useNavigate} from "react-router-dom";
  export default function Card(props) {
    const navigate=useNavigate();
    const nav=()=>{
       navigate(`/edit?url=${props.img}`);
    };
    return (
      <div>
        <div className="card" style={{width:'18rem',margin:'20px 20px'}}>
          <img src={props.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <button onClick={()=>nav()} className="btn btn-danger">Edit</button>
          </div>
        </div>
      </div>
    
    );
  }
