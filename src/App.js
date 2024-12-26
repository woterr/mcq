import './App.css';
import Mcq from "./mcq";
import React, { useState } from 'react';


function App() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  
  let components = []; 
  for (let i = 0; i < inputValue; i++) { 
      components.push(<Mcq number ={i+1}/>); 
  } 

  return (
    <div className="container">
      <div className="heading_e"> 
        <p>Number of questions: </p>
        <input type="number" value={inputValue} onChange={handleInputChange} className="number_inp"></input>
      </div>
      <div className="components">
        {components}
      </div>
    </div>
  );
}

export default App;
