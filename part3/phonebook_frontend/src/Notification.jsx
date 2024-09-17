
const Notification = ({ message, errorState }) => {
    if (message === null) {
      return null
    }

    if (errorState)
    {
        return (
            <div style= {{color:'red'}} className='error'>
              {message}
            </div>
          )
    }
  
    return (
      <div className='error'>
        {message}
      </div>
    )
  }

  export default Notification