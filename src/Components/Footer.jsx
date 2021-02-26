import React from "react";
import "./Footer.css";
import ShowCompleted from "./ShowCompleted";

let trueValue;
const Footer = (props) => {
  // console.log(props.items1  );

  let newfilter = props.items1.filter((value) => value.Completed);

  console.log("child render");

  // console.log('render');
  
  const onShowCompleted = () => {
    // console.log(items.filter((todo) => todo.Completed));
    trueValue = props.items.filter((todo) => todo.Completed);
    console.log(trueValue);
  };

  return (
    <>
      {/* <ShowCompleted newfilter={newfilter} /> */}

      <div className="footerClearShow">
        {newfilter.length > 0 ? (
          <p className="showCompleted1" onClick={onShowCompleted}>
            Show Completed
          </p>
        ) : (
            ""
          )}
        {/* <p className="showCompleted1 hide">Hide Completed</p>  */}
        &nbsp;&nbsp;&nbsp;
        <div onClick={props.allItem}>
          <p className="clearAll">Clear All</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
