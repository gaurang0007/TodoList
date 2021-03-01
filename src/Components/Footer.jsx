import React from "react";
import "./Footer.css";
import ShowCompleted from "./ShowCompleted";

const Footer = (props) => {
  // console.log(props.items1  );
console.log(props.items);

  let newfilter = props.items1.filter((value) => value.Completed);
  console.log(newfilter);

  // console.log("child render");

  const onShowCompleted = () => {
    document.getElementById("changeCss").style.display = "block";
    document.getElementById("Hide").style.display = "block";
    document.getElementById("Show").style.display = "none";
  };

  const onHideCompleted = () => {
    document.getElementById("Show").style.display = "block";
    document.getElementById("Hide").style.display = "none";
    document.getElementById("changeCss").style.display = "none";
  }

  let num = (newfilter.length / props.items1.length)*100
  let percentage = num.toFixed(2);

  
  return (
    <>
   
    <div className="middle">
      <ul className="todoList1" id="changeCss">
      { newfilter.length > 0   && <p className="completedTask">Completed Tasks : {percentage}%</p> }
        {newfilter.map((obj, index) => {
          return (
            <ShowCompleted
              text={obj.List}
              key={Math.random()}
              id={index}
              arr = {newfilter}
           
            />
          );
        })}
      </ul>
    </div>

      <div className="footerClearShow">
        {newfilter.length > 0 ? (
          <p className="showCompleted1" onClick={onShowCompleted} id="Show">
            Show Completed
          </p>
        ) : (
            ""
          )}
          {newfilter.length > 0 ? (
          <p className="ShowCompleted1" onClick={onHideCompleted} id="Hide" style={{display:'none'}}>
            Hide Completed
          </p>
        ) : (
            ""
          )} 

        <div onClick={props.allItem}>
          <p className="clearAll">Clear All</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
