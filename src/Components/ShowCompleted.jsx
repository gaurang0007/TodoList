import React from "react";
import "./ShowCompleted.css";
import DeleteIcon from "@material-ui/icons/Delete";

const ShowCompleted = (props) => {
  return (
    <>
      <div className="listItem1">
        {/* <input
          className="listCheck form-check-input"
          type="checkbox"
          onClick={() => {
            props.unchecked(props.id);
          }}
        />

        <li className="listName" key={props.index}> 
          {props.text}
        </li> */}

        <label className="container">
          <li className="listName" key={props.index}>
            {props.text}
          </li>
          <input
            type="checkbox"
            checked="checked"
            onChange={() => {
              props.unchecked(props.id);
            }}
          />
          <span className="checkmark"></span>
        </label>

        <div className="deleteBtn">
          <div className="deleteIcon">
            <DeleteIcon
              onClick={() => {
                props.deleteItem(props.id);
              }}
              fontSize="small"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowCompleted;
