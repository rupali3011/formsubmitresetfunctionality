import {useState } from "react";
import "./styles.css";

export default function App() {
  const[name,setname]=useState("");
  const[data,setdata]=useState("");
  const[pass,setpass]=useState("");
  const[course,setcourse]=useState("");
  const[tac,settac]=useState(false);
  return (
    <div className="App">
      <form onSubmit={(e)=>{
        e.preventDefault();
        console.log({name},course,pass,tac);
        setdata(name+pass+course);
        setname("");
        setpass("");
        setcourse("");
      }}>
      name:<input type="text" value={name}onChange={(e)=>{
      setname(e.target.value);
     }}/><br/>
     password:<input type="number" value={pass}onChange={(e)=>{
       setpass(e.target.value);
     }}/><br/>
     courses:<select onChange={(e)=>{
       setcourse(e.target.value);
     }} value={course}>
       <option>java</option>
       <option>html</option>
       <option>css</option>
       <option>react</option>
     </select><br/>
     <input type="checkbox" onChange={(e)=>{
        settac(e.target.checked);
     }}/><span>term and condition</span><br/>
     <button>submit</button>
     <button onClick={()=>{
      setname("");
      setpass("");
      setcourse("");
      settac("");
     }}>reset</button>
     </form>
     <h1>{data}</h1>
    </div>
  );
}
