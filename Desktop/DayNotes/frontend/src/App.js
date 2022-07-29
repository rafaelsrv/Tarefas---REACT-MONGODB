import React, {useState} from 'react'
import Header from './Header'




function App() {

  
  const [counter, setCounter] = useState(0);

  function hadleSoma(){
    setCounter(counter + 1)
  }

  function hadleMenos(){
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={hadleMenos}>Subtração</button>
      <button onClick={hadleSoma}>Soma</button>
    </>  
  );
}

export default App;
