
import React from 'react'
import {AiFillDelete} from 'react-icons/ai'
import {MdDoneOutline} from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { done , delate } from '../redux/action'
import EditTodo from '../EditTodo'
import './todo.css'

const Todo = ({todo , index }) => {

const dispatch = useDispatch()
 const handleDone = ()=>{
     dispatch(done({
         id : todo.id
     }))
 } 
 const handleDelete = ()=>{
     dispatch(delate({
         id : todo.id
     }))
 }    
  return (
    <div key= {todo.id}  className = "todo">
        <h1
        style={{color : todo.isDone ?  'green' : 'black'}}
        >{index+1}/{todo.text} {" "}</h1>
        <div className='btn'>
        <button id='del' onClick={handleDelete} > < AiFillDelete/></button>
        <button id ="chek" onClick={handleDone}> < MdDoneOutline/></button>
        </div>
        <EditTodo todo={todo}/>
    </div>
  )
}

export default Todo