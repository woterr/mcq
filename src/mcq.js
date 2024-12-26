
import React, { useState } from 'react';

function Mcq(props) {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };


  return (
    <div className="mcq">
        <p>{props.number} - {inputValue}</p>
        <div className="options">
          <input type="radio" id="A" name={props.number} value="A" onChange={handleInputChange}></input>
          <input type="radio" id="B" name={props.number} value="B" onChange={handleInputChange}></input>
          <input type="radio" id="C" name={props.number} value="C" onChange={handleInputChange}></input>
          <input type="radio" id="D" name={props.number} value="D" onChange={handleInputChange}></input>
        </div>
    </div>
  );
}

export default Mcq;