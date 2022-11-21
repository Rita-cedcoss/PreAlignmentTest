import React from "react";

const Color = (props) => {
     let url="https://dummyjson.com/users/filter?key=hair.color&value=Black"
    return (
    <div> 
      <button onClick={()=>{props.DataDisplay(url)}}>Color Display</button>
    </div>
  );
};

export default Color;
