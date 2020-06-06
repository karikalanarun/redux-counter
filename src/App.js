import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import { createStore } from "redux";
import countReducer from "./reducers/count-reducer";
import { Provider } from "react-redux";

const store = createStore(countReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
