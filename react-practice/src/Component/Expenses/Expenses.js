
import React, { useState } from 'react';
import './Expenses.css';
import FilteredYear from './FilteredYear';
import ExpanseForm from './ExpanseForm';

function Expenses(props) {
    const [selectedFilter, setSelectedFilter] = useState('2022')

  const dropDownHandler = (selectedYear) =>{
     const select = setSelectedFilter(selectedYear)
    }

    const filteredExpenses = props.intro.filter((datas) => {
      return datas.date.getFullYear().toString()===selectedFilter;
    })
    
    let expenseContent = <p>No content found.</p>
    if(filteredExpenses.length > 0){
      expenseContent =  filteredExpenses.map((datas) =>(
        <ExpanseForm
      key = {datas.id}
      name={datas.name}
      age={datas.age}
      date={datas.date}
    />
    ))}

    return <>
    <div className="parentDiv">
    
    <FilteredYear selected={selectedFilter} onFilterChange={dropDownHandler}/>
    {/* Rendering list */}
        {expenseContent}
  
  </div>

    </>
      
}
export default Expenses;