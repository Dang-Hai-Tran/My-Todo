import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import { Button, FormGroup, ListGroup, Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { FormControl } from "react-bootstrap";

import TodoItem from "./TodoItem";

function App() {
  const [todoList, setToDoList] = useState(JSON.parse(localStorage.getItem("todoList")) || []);
  const [title, setTitle] = useState("");
  const toggleIsComplete = (id) => {
    setToDoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      })
    );
  };
  const toggleIsDelete = (id) => {
    setToDoList(todoList.filter((todo) => todo.id !== id));
  };
  const addNewTodo = (title) => {
    setToDoList([
      ...todoList,
      {
        id: uuidv4(),
        title: title,
        isComplete: false,
        isDelete: false,
      },
    ]);
  };
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);
  return (
    <div className="App">
      <Navbar className="bg-dark text-white">
        <h2 className="mx-auto">My Todo</h2>
      </Navbar>
      <Container className="w-75 mt-3">
        <FormGroup className="d-flex">
          <FormControl placeholder="Enter your todo here..." onChange={(e) => setTitle(e.target.value)}></FormControl>
          <Button className="ms-3" onClick={addNewTodo.bind(this, title)}>
            Add
          </Button>
        </FormGroup>
        <ListGroup as="ul" className="mt-3">
          {todoList.map((todo) => (
            <TodoItem
              key={todo.id}
              toggleIsComplete={toggleIsComplete}
              toggleIsDelete={toggleIsDelete}
              toDo={todo}></TodoItem>
          ))}
        </ListGroup>
      </Container>
    </div>
  );
}

export default App;
