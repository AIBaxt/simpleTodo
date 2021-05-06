import React, { useState } from 'react';
import { TextField, Paper, Button, Toolbar } from '@material-ui/core';

function AddTodo(props) {

    const [titleText, setTitleText] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        resetText();
    };

    const onChangeHandler = (event) => {
        setTitleText(event.target.value);
    }

    function resetText() {
        setTitleText('');
    }

    const textStyle = { width: "93%", padding: 0 }
    const buttonStyle = { margin: "10px 0 0 0", padding: "10px 40px 10px 40px" };
    return (
        <div>
            <form onSubmit={submitHandler}>
                <TextField id="title" label="Todo Title" style={textStyle} onChange={onChangeHandler} value={titleText} ></TextField>
                <Button type="submit" variant="contained" color="primary" style={buttonStyle}>Add Todo</Button>
            </form>
        </div>
    );
};

export default AddTodo;