import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Element from './components/element';

function App() {

 const [data, setData] = useState();
 const [arr, setArr] = useState([]);
 const [popInp, setPopInp] = useState('');
 const [topInp, setTopInp] = useState('');

 const handleInput = (e) => {
  setData(e.target.value)
 }

 const pushFn = () => {
  setArr([data, ...arr]);
 }

 const popFn = () => {
  if(arr.length == 0)
  {
    window.alert('Stack is empty');
  }
  else{
    setPopInp(arr.shift())
  }
 }

 const topFn = () => {
  if(arr.length == 0){
    window.alert('Stack is empty');
  }
  else{
    setTopInp(arr[0]);
  }
 }

  return (
    <div className="container">
      <h1 className="header">Stack</h1>
      <div className="row">
        <div className="col md-6 stack">
          {arr.map((item, index) => <Element key={index} item={item} /> )}
        </div>
        <div className="col md-3 operation">
          <h2>Operations</h2>
          <div className="input-group push">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={pushFn}>
              PUSH
            </button>
            <input type="text" className="form-control" onChange={handleInput} />
          </div>
          <div className="input-group pop">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={popFn}>
              POP
            </button>
            <input type="text" disabled className="form-control" value={popInp} />
          </div>
          <div className="input-group top">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={topFn}>
              TOP
            </button>
            <input type="text" disabled className="form-control" value={topInp} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
