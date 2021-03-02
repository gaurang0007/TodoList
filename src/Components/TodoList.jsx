import React from "react";
import "./TodoList.css";
import DeleteIcon from "@material-ui/icons/Delete";

const TodoList = (props) => {
  return (
    <>
      <div className="listItem">
        <input
          className="listCheck form-check-input"
          type="checkbox"
          onChange={() => {
            props.checked(props.id);
          }}
        />

        <li className="listName" key={props.index}>
          {props.text}
        </li>

        {/* <label className="container">
          <li className="listName" key={props.index}>
            {props.text}
          </li>
          <input
            type="checkbox"
            // checked="checked"
            onChange={() => {
              props.checked(props.id);
            }}
          />
          <span className="checkmark"></span>
        </label> */}

        <div className="deleteBtn">
          <div className="deleteIcon">
            <DeleteIcon
              onClick={() => {
                props.onSelect(props.id);
              }}
              fontSize="small"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;
