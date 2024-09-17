

const Filter = ({handleSearchFilterChange , filterWord}) =>
{

    return (<div>
            filter shown with <input onChange={handleSearchFilterChange} value={filterWord}/>
        </div>)

}


export default Filter