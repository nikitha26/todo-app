import React,{useReducer} from "react";
import {Container,Row} from "reactstrap";
import "./App.css";

import {TodoContext} from "./Context/TodoContext";
import reducer from "./Context/reducer";
import TodoForm from "./Components/TodoForm";
import Todos from "./Components/Todos";

function App(){
  const [todos,dispatch] = useReducer(reducer,[])
  return(
    <TodoContext.Provider value={{todos,dispatch}}>
      <Container>
          <h1>Todo app with context api</h1>
          <Todos/>
          <TodoForm/>
      </Container>  

    </TodoContext.Provider>  
  )

}
export default App;
