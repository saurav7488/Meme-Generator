import React ,{useEffect,useState} from "react";
import Card from "./Card";
const meme=async()=>{
    let data=await fetch('https://api.imgflip.com/get_memes')
    return await data.json();
}
export default function Home() {
    const [data,setData]=useState([]);
    useEffect(() => {
        meme().then((meme)=> setData(meme.data.memes))
   },[]);
   
  return (
    <div className="row justify-content-md-center row row-cols-4">
        {
             data.map(ele=>
                  <Card img={ele.url} name={ele.name}/>
             )
        }
    </div>
  )
}
