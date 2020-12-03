import React,{useState, useContext} from "react";
import {
    FormGroup,
    Input,
    Button,
    Form,
    InputGroup,
    InputGroupAddon
} from "reactstrap"

import {TodoContext} from "../Context/TodoContext";
import {ADD_TODO} from "../Context/action"

function TodoForm(){
    return(
        <Form>
            <FormGroup>
                <InputGroup>
                <Input
                  type="text"
                  name="todo"
                  id="todo"
                  placeholder="Enter todo"
                  //Todo
                />
                <InputGroupAddon addonType="prepend">
                    <Button
                    color="warning"
                    //Todo:onclick
                    >Add</Button>
                </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    )

}
export default TodoForm;