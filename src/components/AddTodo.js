import React, { useState } from 'react'
import "../styles/addTodo.css"

const AddTodo = ({callBack}) => {

  const [formData,setFormData] = useState("")

  const handleChange = (e) => {
    return setFormData(e.target.value)
}
const handleSubmit = (e) =>{
  e.preventDefault();
  callBack(formData)
  setFormData("")

}


  return (
    <div className='addTodo'>
      <form className='todoForm' onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter new ToDo' onChange={handleChange} value={formData}/>
        <button className='button-1' type='submit'>Add</button>

      </form>
    </div>
  )
}

export default AddTodo