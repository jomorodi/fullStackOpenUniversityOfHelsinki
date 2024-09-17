

const PersonForm = ({handleFormSubmit , handleNameInputChange , handleNumberInputChange, newName ,newNumber}) => {

    return   <form onSubmit={handleFormSubmit}>
    <div>
      name: <input onChange={handleNameInputChange} value={newName}/>
      
    </div>
    <div>
      number: <input onChange={handleNumberInputChange} value={newNumber} />
      
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
}

export default PersonForm