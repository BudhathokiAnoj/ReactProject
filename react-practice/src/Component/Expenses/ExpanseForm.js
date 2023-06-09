import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpanseForm.css'

const ExpanseForm = (props) =>{

    const [name,changeName] = useState(props.name);

    const nameChange = () =>{
        changeName("**Anjeel Chaudhary**");
    }
    return <>
        <div className="parent">
           
           <div className="date"> <ExpenseItem date={props.date}/></div>
           <div className="age">Age: {props.age}</div>
           <div className="name">Name: {props.name}</div>
           <button onClick={nameChange} className='btn'>click here</button>
       </div>
    </>
}
export default ExpanseForm