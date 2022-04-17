import React from 'react'
import "./form.css"
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../redux/action'
const MyForm = () => {
     const dispatch = useDispatch()
    const [text,setText]=useState('')
    const hdChange=e=>{
        setText(e.target.value)
    }
    const hdClick=e=>{
        e.preventDefault()
        dispatch (add({ 
            text : text
        }))
        setText(" ")
    }
  return (
    <div className='form'>
         <input type="text" placeholder='enter your todo' onChange={hdChange}  value = {text}/>
         <button type="submit" onClick={hdClick}>add</button>
    </div>
  )
}

export default MyForm