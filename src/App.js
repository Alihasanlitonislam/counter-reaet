import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App" id='AppCont'>
      <Counter></Counter>
    </div>
  );
}

const Counter = () =>{
  const [count, steCount] = useState(0)
  const plusBtn = () => steCount(count + 1)
  const minusBtn = () => {
    if(count>0){
      steCount(count - 1)
    }
    else{
      alert("Pleace enter the getter then valu in 0")
    }
  }
  return (
    <div className='counter'>
      <h1>Counter : {count}</h1>
      <button onClick={plusBtn} className='btn'>Plus</button>
      <button onClick={minusBtn} className='btn'>Minus</button>
    </div>
  )
}
export default App;
