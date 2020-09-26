import React, { useState } from "react";

const Counter2=(props)=>{
  const [count, setCount] = useState(0);
  return (
    <div>
      <React.Fragment>
        <h3>Count using SFC</h3>
        <div>Count : {count}</div>
        <button onClick={()=>setCount(count+1)}>Increase Count</button>
      </React.Fragment>
    </div>
  );
};

export default Counter2;
