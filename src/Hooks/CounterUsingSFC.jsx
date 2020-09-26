import React, { useState, useEffect } from "react";

const Counter2 = (props) => {
  // Initial counter value is set to 0 it will return an array
  const array = useState(0);
  const count = array[0]; // this.state.count

  // second item returned from useState is a function which will update the first value , count here
  // this.setState()
  const setCount = array[1];
  //   Short way of doing above 3 lines is by using array destructuring
  // const [count, setCount] = useState(0)
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `${name} has clicked ${count} times !`;
    return () => {
      //   write cleanup code.. anything present in component will unmount
      console.log("cleanup");
    };
  });

  //   component will unmount

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
