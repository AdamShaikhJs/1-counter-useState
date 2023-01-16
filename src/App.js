import React,{useState} from 'react';
import './App.css';

function App() {
const [count,setCount]=useState(0)
const complexIncress=()=>{
  setTimeout(()=>{
    setCount((pre)=>pre+1)
  },2000)
}
  return (
    <div className="App">
      <header className="App-header">
        <h1> count : {count}</h1>
         <div>
        <button onClick={()=>setCount(count+1)}>increment </button> 
        <button onClick={()=>setCount(0)}>reset </button> 
        <button onClick={()=>setCount(count-1)}> decrement </button> 
        <button onClick= {()=>setCount((pre)=>pre+count)}>incrementMax </button> 
        <button onClick= {complexIncress}>complexIncress </button> 

        </div>
      </header>
    </div>
  );
}

export default App;
