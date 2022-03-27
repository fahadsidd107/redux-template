import React from 'react'
import './App.css'
import { useSelector, useDispatch } from "react-redux";
import {incNumber} from "./actions";
import {decNumber} from "./actions";
function App() {

  // it alternative to the useContext hooks in react / consumer from context API
  const MyState = useSelector(state => state.changeTheNumber);
  const dispatch = useDispatch();


  return (
    <>
    <h1>Redux Template</h1>

    <div className="main-div">
      

      <div className="container">
  
      <h1>Increment/Decrement counter</h1>
      <h4>using React and Redux</h4>
      
      <div className="quantity">
        <a className="quantity__minus" title="Decrement" onClick={() => dispatch(decNumber(5))} ><span>-</span></a>
        <input name="quantity" type="text" className="quantity__input" value={MyState}/>
        <a className="quantity__plus" title="Increment"  onClick={() => dispatch(incNumber(5))}><span>+</span></a>
      </div>
  
          </div>
        </div>
    </>
  )
}

export default App
