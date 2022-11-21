import React from 'react'
import Age from './Age'
import Color from './Color'
import Counter from './Counter'
import Gender from './Gender'

const AppComponent = (props) => {
  return (
    <>
    <div id="outer">
    <h1>Counter Component</h1>
    <Counter  count={props.count} incrementCounter={props.incrementCounter}/><br/>
    <h1>Age Component</h1>
    <Age  DataDisplay={props.DataDisplay} /><br/>
    <h1>Color Component</h1>
    <Color DataDisplay={props.DataDisplay}/><br/>
    <h1>Gender Component</h1>
    <Gender DataDisplay={props.DataDisplay}/>
    <div id="display" className='hidden'>
    <table id="tblDisplay" >
        <tr><th>Id</th><th>Name</th><th>Age</th><th>Hair Color</th><th>Gender</th></tr>
        {props.ageArr.map((item)=>{
            return(
                <>
                <tr><td>{item.id}</td><td>{item.firstName}</td><td>{item.age}</td><td>{item.hair.color}</td><td>{item.gender}</td></tr>
                </>
            )
        })}
    </table>
    </div>
    </div>
    
    </>
  )
}

export default AppComponent