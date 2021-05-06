import logo from './logo.svg';
import './App.css';
import '@fontsource/roboto';
import { Container, Grid, Paper, Typography } from '@material-ui/core';
import Header from './Components/UI/Header';
import Todo from './Components/todo/Todo';


function App() {
  const paperStyle = { padding: 15, width: 500, margin: "20px auto" };

  return (
    <Grid container justify="center">
      <Paper style={paperStyle} elevation={4}>
        <Typography variant="h4" >Simple Todo List</Typography>
        <Todo />
      </Paper>
    </Grid>
  );
}

export default App;

