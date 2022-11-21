import React, { memo} from "react";

const Age = (props) => {
   console.log("helo");
   let url="https://dummyjson.com/users/filter?key=age&value=30";
    return (
    <div>
      <button onClick={()=>props.DataDisplay(url)}>Gender Display</button>
    </div>
  );
};

export default memo(Age);
