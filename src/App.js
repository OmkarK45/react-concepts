import React from "react";
import "./App.css";
import Movie from "./hoc/Movie";
import Counter1 from "./Hooks/Counter";
import Counter2 from './Hooks/CounterUsingSFC';

function App() {
  return (
    <React.Fragment>
      <Movie />
      <Counter1 />
      <Counter2/>
    </React.Fragment>
  );
}

export default App;
