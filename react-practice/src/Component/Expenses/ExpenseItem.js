import React from "react";
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    
    const month = props.date.toLocaleString('en-US',{month:'short'});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-US',{day:'2-digit'});


    return <>
<div className="returnDate">
    <div>{month}</div>
    <div>{year}</div>
    <div>{day}</div>
</div>

    </>

}

export default ExpenseItem;