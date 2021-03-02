import React, { useState } from "react";
import "./Footer.css";
import ShowCompleted from "./ShowCompleted";

const Footer = (props) => {
  const [isSwitch, setisSwitch] = useState(true);
  let newfilter = props.items1.filter((value) => value.Completed);

  const onShowCompleted = () => {
    if (isSwitch) {
      setisSwitch(false);
      document.getElementById("changeCss").style.display = "block";
    } else {
      setisSwitch(true);
      document.getElementById("changeCss").style.display = "none";
    }
  };

  let num = (newfilter.length / props.items1.length) * 100;
  let percentage = num.toFixed(2);

  return (
    <>
      <div className="middle">
        <ul className="todoList1" id="changeCss">
          {newfilter.length > 0 && (
            <p className="completedTask">Completed Tasks : {percentage}%</p>
          )}
          {props.items1.map((obj, index) => {
            if (obj.Completed === true)
              return (
                <ShowCompleted
                  text={obj.List}
                  key={Math.random()}
                  id={index}
                  arr={newfilter}
                  deleteItem={props.deleteItem}
                  unchecked={props.unchecked}
                />
              );
          })}
        </ul>
      </div>

      <div className="footerClearShow">
        {newfilter.length > 0 && (
          <div onClick={onShowCompleted} id="Show">
            {isSwitch === true ? (
              <p className="showCompleted1">Show Completed</p>
            ) : (
              <p className="showCompleted1">Hide Completed</p>
            )}
          </div>
        )}

        <p className="clearAll" onClick={props.allItem}>
          Clear All
        </p>
      </div>
    </>
  );
};

export default Footer;
