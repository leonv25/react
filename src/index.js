
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Greet(props) {
  return(
    <h1>
      Hello {props.phrase}! My name is {props.name}
    </h1>
  )
}

function GreetAll() {
  return(
    <div>
      <Greet phrase="World" name="Ivan"/>
      <Greet phrase="World" name="Anna"/>
      <Greet phrase="World" name="Alex"/>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode><GreetAll /></React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
