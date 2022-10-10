import React, { useState } from 'react'
import '../styles/todo.css'
import AddTodo from './AddTodo'
import Completed from './Completed'
import InProgress from './InProgress'
import Titleblock from './Titleblock'
import TodoList from './TodoList'

const Todo = () => {

    const [todos,setTodos] = useState([]) 
    const [inprogress, setInprogress] = useState([])
    const [complitedTodo, setComplitedTodo] = useState([])



    /* new todo add */
     const getData = (data) =>{
        setTodos(
        [...todos,data])
       
    }
    /* todo list after delete */
    const afterDel = (data) =>{
        setTodos(
            data)              

    }
    /* todo list after removing inprogress task */
    const removeProgress = (data) =>{
        setTodos(
            data)              

    }
    /* todo to inprogress */
    const toInProgress = (data) =>{
        setInprogress(
            [...inprogress,data]) 
            

    }
    /* complited todo list */
    const tocomplitedTask = (data) =>{
        setComplitedTodo(
            [data,...complitedTodo]) 


    }

    /* updated inprogress todo list */
    const forremoveComplitedTask = (data) =>{
        setInprogress(
            data)              

    }
     
  return (
    <div className='todo-container'>
        <section className='title-block'>
            <Titleblock />
        </section>
        <section className='add-todo'>
            <AddTodo callBack = {getData}/>
        </section>
        <section className='task-board'>
            <section className='todo-list'>
                <TodoList todos={todos} deleteTask = {afterDel} removeProgress = {removeProgress} toInProgress={toInProgress}/>
            </section>
            <section className='todo-inprogress'>
                <InProgress taskinprogress={inprogress} tocomplitedTask = {tocomplitedTask} forremoveComplitedTask = {forremoveComplitedTask} />
            </section>
            <section className='todo-completed' >
                <Completed complitedTodo = {complitedTodo} />
            </section>
        </section>
        
    </div>
  )
}

export default Todo