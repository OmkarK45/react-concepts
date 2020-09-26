import React, { Component } from "react";
import "./App.css";
import Movie from "./hoc/Movie";
import Counter1 from "./Hooks/Counter";
import Counter2 from "./Hooks/CounterUsingSFC";
import Users from "./Hooks/Users";
import MoviePage from "./context/MoviePage";
import UserContext from "./context/userContext";
class App extends Component {
  state = { currentUser: { name: "Omkar" } };
  render() {
    return (
      <div>
        <UserContext.Provider value={this.state.currentUser}>
          <React.Fragment>
            {/* <Movie />
          <Counter1 />
          <Counter2 />
          <Users /> */}
            <MoviePage />
          </React.Fragment>
        </UserContext.Provider>
      </div>
    );
  }
}

export default App;
