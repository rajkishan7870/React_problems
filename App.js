import React from "react";
import { Provider } from "react-redux";
import { store } from "./stores";
import Blog from "./components/Blog";


function App() {

  return (
    <Provider store={store}>

      <div className='App'>
        <Blog/>
      
      </div>
    </Provider>
  );

}

export default App;
