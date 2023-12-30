import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let state = {
  count:0
}

function App() {
  const [count, setCount]=useState(0)
  function onClickHandler() {
    state.count=state.count+1;
    console.log(state.count)
  }

  return (
    <div> 
        <button onClick={onClickHandler}>Counter {state.count}</button>
    </div>
  )
}

// function Button(props) {
//   function onButtonClick() {
//     props.setCount(props.count+1);
//   }
//   return <button onClick={onButtonClick}>Counter {props.count}</button>
// }
export default App
