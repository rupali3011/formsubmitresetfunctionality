import {useState } from "react";
import "./styles.css";

export default function App() {
  const[name,setname]=useState("");
  const[data,setdata]=useState("");
  return (
    <div className="App">
      name:
     <input type="text" value={name}onChange={(e)=>{
        setname(e.target.value);
     }}/>
     <button onClick={()=>{
       console.log(name);
       setdata(name);
       setname("");
     }}>submit</button>
     <button onClick={()=>{
       setname("");
       setdata("");
     }}>reset</button>
     <h1>{data}</h1>
    </div>
  );
}
