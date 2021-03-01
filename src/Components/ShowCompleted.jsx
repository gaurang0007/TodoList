import React from "react";
import "./ShowCompleted.css";
import Footer from "./Footer";
import DeleteIcon from "@material-ui/icons/Delete";


const ShowCompleted = (props) => {
  // const persentage = Math.round((1 / props.items.length) * 100);
  // console.log(props.newfilter);

  return (
    <>
      <div className="listItem1">
        <label className="container"><li className="listName" key={props.index}>
          {props.text}
        </li>
  <input type="checkbox" checked="checked" />
          <span className="checkmark"></span>
        </label>
        



      </div>

    </>
  );
};

export default ShowCompleted;
