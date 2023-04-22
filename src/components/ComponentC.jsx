import React from 'react';
import { useSelector } from 'react-redux';

function ComponentC() {
  const inputValue = useSelector(state => state.inputValue);

  return (
    <div>
      <div>
      <center>
      <label><h2>Input value:</h2></label>
      <br />
      <span><h2>{inputValue}</h2></span>
        </center>
        </div>
    </div>
  );
}

export default ComponentC;
