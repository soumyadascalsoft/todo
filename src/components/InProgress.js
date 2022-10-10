import React from 'react'
import { FaCheck } from 'react-icons/fa'
import "../styles/Inprogress.css"

const InProgress = ({taskinprogress,tocomplitedTask,forremoveComplitedTask}) => {

  const handleProgress = (id) => {
    const complitedTask = taskinprogress.filter((elem,ind) => {
      return ind === id;
    })
    tocomplitedTask(complitedTask)

    const removeComplitedTask = taskinprogress.filter((elem,ind) => {
      return ind !== id;
    })
    forremoveComplitedTask(removeComplitedTask)

  }

  return (
    <div className='Inprogress'>
        <h3>Todo In-progress</h3>
        {
          taskinprogress.map((elem,ind) => {
            return(
              <section className='progress-card' key={ind}>
                <p className='card-text'>{elem}</p>
                <FaCheck className='icon-progress-todo' onClick={()=> handleProgress(ind)}/>
            </section>
            )
          })
        }
       
    </div>
  )
}

export default InProgress