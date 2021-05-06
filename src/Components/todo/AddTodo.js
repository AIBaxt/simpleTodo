import React from 'react';
import { TextField, Paper } from '@material-ui/core';

function AddTodo() {
    const textStyle = { width: 400 }
    return (
        <TextField id="title" label="Todo Title" style={textStyle} ></TextField>
    );
};

export default AddTodo;