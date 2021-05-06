import React from 'react';
import AddTodo from './AddTodo';
import ListTodo from './ListTodo';



function Todo(props) {

    const todos = [
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

    return (
        <div>
            { todos.map(todo => <ListTodo key={todo.id} title={todo.title} />)}
            <AddTodo />
        </div>
    );
};

export default Todo;