import React from 'react';
import { TextField, Paper, Button, Toolbar } from '@material-ui/core';

function AddTodo() {
    const textStyle = { width: "93%", padding: 0 }
    const buttonStyle = { margin: "10px 0 0 0", padding: "10px 40px 10px 40px" };
    return (
        <div>
            <TextField id="title" label="Todo Title" style={textStyle} ></TextField>
            <Button variant="contained" color="primary" style={buttonStyle}>Add Todo</Button>
        </div>
    );
};

export default AddTodo;