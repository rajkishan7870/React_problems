import React from "react";
import { Provider } from "react-redux";
import { store } from "./stores/store";
import Todo from "./components/todo";


function App() {

  return (
    <Provider store={store}>

      <div className='App'>
        <Todo/>
      
      </div>
    </Provider>
  );

}

export default App;
