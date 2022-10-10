import React from 'react'
import "../styles/Completed.css"

const Completed = ({complitedTodo}) => {
  return (
    <div className='completed'>
        <h3>ToDo completed</h3>
        {
          complitedTodo.map((elem,ind)=>{
            return(
              <section className='completed-card' key={ind}>
                <p className='completed-text'>{elem}</p>
              </section>

            )
          })
        }
        
    </div>
  )
}

export default Completed