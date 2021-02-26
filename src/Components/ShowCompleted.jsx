import React from "react";
import "./ShowCompleted.css";
import Footer from "./Footer";

const ShowCompleted = (props) => {
  // const persentage = Math.round((1 / props.items.length) * 100);
  console.log(props.newfilter);





  return (
    <>
    <p>{props.trueValue}</p>
          <p className="completedTask">Completed Tasks : 10%</p>
    </>
  );
};

export default ShowCompleted;
