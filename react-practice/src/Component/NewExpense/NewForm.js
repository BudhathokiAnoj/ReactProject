import { useState } from 'react';
import './NewForm.css';

const NewForm = (props) =>{

    const [enterName,setEnteredName] = useState('');
    const [enterAge,setEnteredAge] = useState('');
    const [enterDate,setEnteredDate] = useState('');

    // const [enteredValue, setEnteredValue] = useState({
    //     nameEntered :'',
    //     dateEntered :'',
    //     ageEntered :''
    // });

    const nameInput = (event) =>{
    //     setEnteredValue({
    //         ...enteredValue,
    //         nameEntered :event.target.value,
    // })

    //***Alternative way***/
    // setEnteredValue((prevState)=>{
    //     return {...prevState, nameEntered :event.target.value};
    // })

    setEnteredName(event.target.value);
    }

    const dateInput = (event) =>{
    //     setEnteredValue({
    //         ...enteredValue,
    //         dateEntered :event.target.value,
    // })

    setEnteredDate(event.target.value);
    }

    const ageInput = (event) =>{
    //     setEnteredValue({
    //         ...enteredValue,
    //         ageEntered :event.target.value,
    // })

    setEnteredAge(event.target.value)
    }

    const formUpdate = (event) =>{
        event.preventDefault();

        const inputValues = {
            name : enterName,
            age : enterAge,
            date : new Date(enterDate)
        }
        props.onChangeExpanse(inputValues)
        setEnteredName('');
        setEnteredAge('');
        setEnteredDate('');
    }

    return<>
    <form onSubmit={formUpdate}>
    <div className="form">
        <div className="inputs">
            <label>Name: </label>
            <input type="text" value={enterName} onChange={nameInput}/>
        </div>
        <div className="inputs">
            <label>Date: </label>
            <input type="date" value={enterDate} onChange={dateInput}/>
        </div>
        <div className="inputs">
            <label>Age: </label>
            <input type="number" value={enterAge} onChange={ageInput}/>
        </div>
        <div className="btn">
            <button>Submit</button>
        </div>

    </div>
    </form>
    </>
}
export default NewForm;