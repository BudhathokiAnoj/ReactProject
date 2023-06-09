import NewForm from "./NewForm";

const NewExpense = (props) =>{

  const parentToChild = (dataItems) => {
      const inputValues = {
        ...dataItems,
        id : Math.random().toString()
      }
      props.onAddChild(inputValues)
  }
    return<>
      <div className="form">
        <NewForm onChangeExpanse={parentToChild}/>
      </div>
    
    </>
}
export default NewExpense;