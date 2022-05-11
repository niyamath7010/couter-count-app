
import { useState } from 'react';
import './App.css';
import Counter from './couter';

function App() {

  const [counter,setCounter]=useState([])

  const delElem=(index)=>{
    let resElem=[]
    for(let i=0;i<counter;i++){
      if(i!==index){
        resElem.push(counter[i])
      }
    }
    setCounter(resElem)
  }

  return (
   <div className='container'>
     <button className='opener' onClick={()=>{
       setCounter((counter)=>{
         return [...counter,<Counter index={counter.length} del={delElem}/>]
       })
     }}>Click 😧</button>
     <div className='content'>
       {counter}
     </div>
   </div>
  );
}

export default App;
