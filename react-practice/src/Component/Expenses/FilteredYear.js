import "./FilteredYear.css"

const FilteredYear = (props) =>{

const onChangeHandeler = (event) =>{
      props.onFilterChange(event.target.value)
}
    return <>
      <div className="filter_div">
        <label>Filter by year</label>
        <select value={props.selected} onChange={onChangeHandeler}>
          <option value="2001">2001</option>
          <option value="2002">2002</option>
          <option value="2006">2006</option>
          <option value="2000">2000</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </>
}
export default FilteredYear 