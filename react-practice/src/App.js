
import { useState } from "react";
import Expenses from "./Component/Expenses/Expenses";
import NewExpense from "./Component/NewExpense/NewExpense";

const DUMMY_DATA = [
  {
   id: '22',
   name: "Anoj Budathoki",
   age: 22,
   date: new Date(2002, 8, 23),
  },
  {
   id: '23',
   name: "Sandip Sharma",
   age: 20,
   date: new Date(2020, 0, 2),
  },
  {
   id: "3",
   name: "Suman Sharma",
   age: 26,
   date: new Date(2006, 11, 13),
  },
];

const App =(props)=>{

 
  const [propsUse, setExpenses] = useState(DUMMY_DATA)

  const changeParent = (expanse) =>{
      setExpenses((prevExpenses)=>{
        return [expanse, ...prevExpenses];                                                                                                                                                                                                                                                                                
      })
  }
 
  return <>
  <NewExpense onAddChild={changeParent}/>   
  <Expenses intro={propsUse}/>      

 </>

}
export default App;
