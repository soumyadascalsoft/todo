import React from 'react'
import '../styles/todoList.css'
import { FaCheck, FaTrash } from 'react-icons/fa';

const TodoList = ({todos,removeProgress,deleteTask,toInProgress}) => {

  const handleDelete = (id) => {
    const afterDel = todos.filter((elem,index) => {
      return index !== id;
    })
 
   deleteTask(afterDel)
       
  }


  const handleCheck = (id) => {
    const taskstartProgress = todos.filter((elem,index) => {
      return index !== id;
    })
  
    removeProgress(taskstartProgress)
 
  const inProgressTask = todos.filter((elem,index) => {
    return index === id;
  })
 
toInProgress(inProgressTask)

  }
  
  return (
    <div className='todoList'>
        <h3>ToDo List</h3>
        {
            
              todos.map((elem,index) => {
                return(
                  <section className='todo-card'key={index}>
                    <p className='card-text' >{elem}</p>
                    <FaCheck className='icon-check-todo' onClick={()=>handleCheck(index)}/>
                    <FaTrash className='icon-delete-todo' onClick={()=>handleDelete(index)}/>
                  </section>
                )
              })   
        }
            
        
    </div>
  )
}

export default TodoList