import React from 'react';
import './Header.css';

const Header = () => {
    let currDate = new Date();
    let currentDate = currDate.getDay() + "-" + parseInt(currDate.getMonth()+1)  + "-" + currDate.getFullYear();

    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    return (
        <div className="headerContant">
            <p>{days[currDate.getDay()]}</p>
            <p>{currentDate}</p>
        </div>
    )
}

export default Header;



