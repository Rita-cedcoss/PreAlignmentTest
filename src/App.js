import logo from './logo.svg';
import './App.css';
import AppComponent from './Components/AppComponent';
import './Components/component.css'
import {useEffect, useState } from 'react';
function App() {
   const [count,setCount]=useState(0);
   const [ageArr,setAgearr]=useState([]);
   const incrementCounter=()=>{
       setCount(count+5)
   }
   
   const DataDisplay=(url)=>{
    fetch(url)
    .then((res)=>res.json())
    .then((result)=>{
      console.log(result.users);
      setAgearr([...result.users]);
      document.getElementById("display").setAttribute("class","block");
    }) 
   }

  return (
    <>
    <AppComponent DataDisplay={DataDisplay}  ageArr={ageArr} count={count} incrementCounter={incrementCounter}/>
    </>
  );
}

export default App;
