import React,{useReducer} from "react";
import {Container} from "reactstrap";
//import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import {TodoContext} from "./Context/TodoContext";
import reducer from "./Context/reducer";
import TodoForm from "./Components/TodoForm";

function App(){
  const [todos,dispatch] = useReducer(reducer,[])
  return(
    <TodoContext.Provider value={{todos,dispatch}}>
      <Container fluid>
          <h1>Todo app with context api</h1>
          <TodoForm/>
      </Container>  

    </TodoContext.Provider>  
  )

}
export default App;
