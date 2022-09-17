import React from "react";
import MainLayout from "../layout/MainLayout";
import { useEffect, useState } from "react";
import Todo from "../components/Todo";
import {
  IconCheck,
  IconTrash,
  IconArrowUp,
  IconArrowDown,
} from "@tabler/icons";

export default function Lab07() {
  const [todoInput, setTodoInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const onKeyUpHandler = (event) => {
    if (event.key !== "Enter") return;
    else {
      if (todoInput === "") {
        alert("Input cannot be empty");
      } else {
        const newTodos = [{ text: todoInput, bool: false }, ...todoList];
        setTodoList(newTodos);
        setTodoInput("");
      }
    }
  };
  useEffect(() => {
    const todoStr = localStorage.getItem("react-todos");
    if (!todoStr) {
      setTodoList([]);
    } else {
      setTodoList(JSON.parse(todoStr));
    }
  }, []);
  const [isFirstRender, setIsfirstRender] = useState(true);

  useEffect(() => {
    if (isFirstRender) {
      setIsfirstRender(false);
      return;
    } else {
      saveTodos();
    }
  }, [todoList]);

  const saveTodos = () => {
    const todoStr = JSON.stringify(todoList);
    localStorage.setItem("react-todos", todoStr);
  };

  const deleteTodo = (idx) => {
    todoList.splice(idx, 1);
    const newTodo = [...todoList];
    setTodoList(newTodo);
  };

  const markTodo = (idx) => {
    todoList[idx].bool = !todoList[idx].bool;
    setTodoList([...todoList]);
  };

  const moveUp = (idx) => {
    if (idx > 0) {
      const newTodo = [...todoList];
      const temp = newTodo[idx];
      newTodo[idx] = newTodo[idx - 1];
      newTodo[idx - 1] = temp;
      setTodoList(newTodo);
    }
  };

  const moveDown = (idx) => {
    if (idx < todoList.length - 1) {
      const newTodo = [...todoList];
      const temp = newTodo[idx];
      newTodo[idx] = newTodo[idx + 1];
      newTodo[idx + 1] = temp;
      setTodoList(newTodo);
    }
  };
  return (
    <MainLayout>
      <div style={{ maxWidth: "700px" }} className="mx-auto">
        {/* App header */}
        <p
          className="display-4 text-center fst-italic m-4"
          style={{ color: "black" }}
        >
          Minimal Todo List <span className="fst-normal">☑️</span>
        </p>
        {/* Input */}
        <input
          className="form-control mb-1 fs-4"
          placeholder="insert todo here..."
          onChange={(event) => setTodoInput(event.target.value)}
          value={todoInput}
          onKeyUp={(event) => {
            onKeyUpHandler(event);
          }}
        />

        {todoList.map((todo, i) => (
          <Todo
            text={todo.text}
            bool={todo.bool}
            key={i}
            markTodo={() => markTodo(i)}
            deleteTodo={() => deleteTodo(i)}
            moveUp={() => moveUp(i)}
            moveDown={() => moveDown(i)}
          />
        ))}
        {/* <Summary />  */}
        <p className="text-center fs-4">
          <span className="text-primary">All ({todoList.length}) </span>
          <span className="text-warning">
            Pending ({todoList.filter((todo) => !todo.bool).length}){" "}
          </span>
          <span className="text-success">
            Completed ({todoList.filter((todo) => todo.bool).length})
          </span>
        </p>
        {/* Made by section */}
        <p className="text-center mt-3 text-muted fst-italic">
          made by Napatsiri Phetsri 640612181
        </p>
      </div>
    </MainLayout>
  );
}
