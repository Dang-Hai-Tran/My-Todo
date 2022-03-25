import React from "react";
import { ListGroupItem, FormCheck } from "react-bootstrap";

const TodoItem = ({ toggleIsComplete, toggleIsDelete, toDo }) => {
  const id = toDo.id;
  const title = toDo.title;
  return (
    <ListGroupItem as="li" className="d-flex justify-content-between">
      <div className="d-flex">
        <FormCheck className="me-3" onClick={toggleIsComplete.bind(this, id)}></FormCheck>
        <span style={{ textDecoration: toDo.isComplete ? "line-through" : "none" }}>{title}</span>
      </div>
      <i className="fa-solid fa-trash-can text-danger pt-1" onClick={toggleIsDelete.bind(this, id)}></i>
    </ListGroupItem>
  );
};

export default TodoItem;
