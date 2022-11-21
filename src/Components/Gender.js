import React from "react";

const Gender = (props) => {
    let url="https://dummyjson.com/users/filter?key=gender&value=male";
    return (
    <div>
      <button onClick={()=>props.DataDisplay(url)}>Gender Display</button>
      {/* <button onClick={props.displayData}> Display Data</button> */}
    </div>
  );
};

export default Gender;
