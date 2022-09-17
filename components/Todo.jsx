import React, { useState } from "react";
import {
  IconCheck,
  IconTrash,
  IconArrowUp,
  IconArrowDown,
} from "@tabler/icons";

export default function Todo(prop) {
  const [isMouseOver, setMouseOver] = useState(false);
  return (
    <div>
      <div
        className="border-bottom p-1 py-2 fs-2 d-flex gap-2"
        onMouseOver={() => {
          setMouseOver(true);
        }}
        onMouseOut={() => {
          setMouseOver(false);
        }}
      >
        <span
          className="me-auto"
          style={
            prop.bool
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
          {" "}
          {prop.text}{" "}
        </span>

        {isMouseOver && (
          <>
            <button className="btn btn-success" onClick={() => prop.markTodo()}>
              <IconCheck />
            </button>
            <button className="btn btn-secondary" onClick={() => prop.moveUp()}>
              <IconArrowUp />
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => prop.moveDown()}
            >
              <IconArrowDown />
            </button>
            <button
              className="btn btn-danger"
              onClick={() => prop.deleteTodo()}
            >
              <IconTrash />
            </button>{" "}
          </>
        )}
      </div>
    </div>
  );
}
