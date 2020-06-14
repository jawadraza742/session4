import React , { useState } from 'react';
import './App.css';
import {Mode} from './mode';

export default function App() {
  let [count, setCount] = useState(0);
  let [mode, setMode] = useState("true");
  return (
    <div className={` ${mode ? 'night' :'' }`}>
      <h2>Greetings from my side to the awesome person reading this.</h2>
      <h3>This is a tasbhi counter application</h3>
        <br/>
        <hr /> 
      
      <p className="i_style">Instruction</p>
      <ul>
        <li>
         Click on the Count button each time to add value 1 in existing counter
        </li>
        <li>
         Click on the rest button to rest & start from begining.
        </li>
      </ul>
        <br />
        <br />
          
  <p className="v_custom">Your value of tasbhi counter is {count}</p>
        <br/>
        <br/>
            <button className="c_button" onClick ={() => setCount(count+1)}>Count</button>
            <button className="r_button" onClick ={() => setCount(0)}>Reset</button>

           
        <Mode current_mode={mode ? 'Night' : 'Day'}/>
        <button className="m_button" onClick={() => setMode(!mode)}>Click</button>
        

    </div>

  );
}