import React from 'react';
import { Paper, Typography, Box } from '@material-ui/core';

function ListTodo(props) {

    const typoStyle = { margin: "0 0 0 20px" };
    const paperStyle = { padding: 10, background: "linear-gradient(90deg, rgba(235,235,235,1) 54%, rgba(223,223,223,1) 100%)" };


    return (
        <Box m={2} >
            <Paper elevation={3} style={paperStyle} square>
                <Typography align="left" style={typoStyle}>{props.title}</Typography>
            </Paper>
        </Box >
    );

};

export default ListTodo;