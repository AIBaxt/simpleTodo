import React from 'react';
import AddTodo from './AddTodo';
import ListTodo from './ListTodo';

function Todo() {
    return (
        <div>
            <ListTodo />
            <ListTodo />
            <ListTodo />
            <AddTodo />
        </div>
    );
};

export default Todo;