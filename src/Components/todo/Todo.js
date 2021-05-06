import React, { useState } from 'react';
import AddTodo from './AddTodo';
import ListTodo from './ListTodo';

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

    const todoAddHandler = (enteredTodoData) => {
        const todoData = {
            id: Math.random().toString(),
            title: enteredTodoData
        }

        setTodos((prevTodos) => {
            return [todoData, ...todos];
        });

        console.log(todos);
    };



    return (
        <div>
            { todos.map(todo => <ListTodo key={todo.id} title={todo.title} />)}
            < AddTodo onTodoAdd={todoAddHandler} />
        </div >
    );
};

export default Todo;