import React from 'react';
import { Paper, Typography, Box } from '@material-ui/core';

function ListTodo() {

    const typoStyle = { margin: "0 0 0 20px" };
    const paperStyle = { padding: 10 };


    return (
        <Box m={2} >
            <Paper elevation={2} style={paperStyle} square>
                <Typography align="left" style={typoStyle}>This is a sample todo.</Typography>
            </Paper>
        </Box >
    );

};

export default ListTodo;