import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ComponentA from './components/ComponentA';

const initialState = {
  inputValue: ''
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_INPUT_VALUE':
      return { ...state, inputValue: action.payload };
    default:
      return state;
  }
}

const store = createStore(reducer);
function App() {
  return (
    <Provider store={store}>
      <ComponentA />
    </Provider>
  );
}

export default App;