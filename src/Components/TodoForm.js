import React,{useState, useContext} from "react";
import {
    FormGroup,
    Input,
    Button,
    Form,
    InputGroup,
    InputGroupAddon
} from "reactstrap"

import {v4} from "uuid";
import {TodoContext} from "../Context/TodoContext";
import {ADD_TODO} from "../Context/action"

function TodoForm(){
    const [todostring , setTodoString] = useState("");
    const {dispatch} = useContext(TodoContext) 
    
    const handleSubmit =(e)=>{
        e.preventDefault();
        if (todostring === "") {
            return alert("Enter todo")
        }

    const todo = {
        todostring,
        id: v4(),
    }    
    dispatch({
        type:ADD_TODO,
        payload:todo.id,
    })
    setTodoString("")
    };
    return(
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                    <Input
                        type="text"
                        name="todo"
                        id="todo"
                        placeholder="Enter todo"
                        value={todostring}
                        onChange={e=>setTodoString(e.target.value)}
                    />
                    <InputGroupAddon addonType="prepend">
                        <Button
                            color="warning"
                            //
                            >Add
                        </Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    )

}
export default TodoForm;