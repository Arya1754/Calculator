import React from 'react';
import Wrapper from './components/Wrapper';
import CalcProvider from './context/CalcContext';

function App() {
  return (
    <CalcProvider>
      <Wrapper />
    </CalcProvider>
  );
}

export default App;
