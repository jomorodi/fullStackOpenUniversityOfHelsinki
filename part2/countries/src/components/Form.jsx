
const Form = ({handleSubmit, handleOnChange}) => {

    return <form onSubmit={handleSubmit}>
<label htmlFor="country">find countries</label>
<input type="text" id="country" onChange={handleOnChange}></input>

    </form>
}

export default Form