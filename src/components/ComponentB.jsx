import React from 'react';
import { useDispatch } from 'react-redux';

function ComponentB() {
  const dispatch = useDispatch();
  //console.log("ABCD");
  function handleInputChange(event) {
    const inputValue = event.target.value;
    dispatch({ type: 'UPDATE_INPUT_VALUE', payload: inputValue });
  }

  return (
    <div>
      <center >
        <label><h2 style = {{ color: "red" }}>React with Redux</h2></label>
      <label><h2>Input value:</h2></label>
      <input type="textarea" onChange={handleInputChange} />
      </center>
    </div>
  );
}

export default ComponentB;
