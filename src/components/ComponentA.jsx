import React from 'react';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';

function ComponentA() {
  return (
    <div style={{ backgroundColor: "lightblue" }} >
      <ComponentB />
      <ComponentC />
    </div>
  );
}

export default ComponentA;
