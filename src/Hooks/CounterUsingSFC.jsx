import React, { useState } from "react";
import useDocumentTitle from "./useDocumentTitle";

const Counter2 = (props) => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
//   Custom Hook
  useDocumentTitle(`${name} has clicked ${count} times`);

  return (
    <div>
      <React.Fragment>
        <h3>Count using SFC</h3>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <div>
          {name} has clicked : {count} times
        </div>
        <button onClick={() => setCount(count + 1)}>Increase Count</button>
      </React.Fragment>
    </div>
  );
};

export default Counter2;
