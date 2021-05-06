import React, { useState } from 'react';
import AddTodo from './AddTodo';
import ListTodo from './ListTodo';

//A dummy list of TODOs 
const DUMMY_TODOS = [
    {
        id: 't1',
        title: 'Clean room'
    },
    {
        id: 't2',
        title: 'Learn react'
    },
    {
        id: 't3',
        title: 'Finish todo website'
    },
];



const Todo = (props) => {

    const [todos, setTodos] = useState([]);
    //todoAddHandler is triggered in AddTodo whenever the user enters a title and hits the "Add Todo" button. todoAddHandler then adds the new title to the todos array using state
    const todoAddHandler = (enteredTodoData) => {
        const todoData = {
            id: Math.random().toString(),
            title: enteredTodoData
        }

        setTodos((prevTodos) => {
            return [todoData, ...todos];
        });
    };
    //todoDeleteHandler creates a new array by filtering out the object with the specified id and then calls setTodo to update the todos array.
    //Deleting is triggered in ListTodo whenever a user clicks on a todo.
    const todoDeleteHandler = (data) => {
        var newArray = todos.filter(x => { return x.id !== data; })
        setTodos(newArray);
    };

    return (
        <div>
            { todos.map(todo => <ListTodo key={todo.id} id={todo.id} title={todo.title} onTodoDelete={todoDeleteHandler} />)}
            < AddTodo onTodoAdd={todoAddHandler} />
        </div >
    );
};

export default Todo;