import React from "react";
import "./Header.css";

const Header = () => {
  let currDate = new Date();

  let cday = currDate.getDay().toString();
  let cmonth = parseInt(currDate.getMonth() + 1).toString();
  let cyear = currDate.getFullYear().toString();

  let zero = "0";

  if (cday.length === 1) {
    cday = zero + cday;
  }
  if (cmonth.length === 1) {
    cmonth = zero + cmonth;
  }

  let currentDate = cday + "-" + cmonth + "-" + cyear;

  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className="headerContant">
      <p>{days[currDate.getDay()]}</p>
      <p>{currentDate}</p>
    </div>
  );
};

export default Header;
