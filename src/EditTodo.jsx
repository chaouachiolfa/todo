import React ,{useState} from 'react'
import {Button , Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { update } from './redux/action'
import {GrUpdate} from 'react-icons/gr'

const EditTodo = ({todo}) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [up, setUp] =useState({})
  const hdChange =(e) =>{
    setUp(e.target.value)
    
  }
  const dispatch = useDispatch()
 const handleSubmit = ()=>{
   dispatch(update({
   id : todo.id , 
   text: up  
   }))
 }
  return (
    <div>
      <Button variant="primary" onClick={handleShow} id="up">
        <GrUpdate/>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>update</Modal.Title>
        </Modal.Header>
        <input 
        type="text"
        onChange={hdChange}
        defaultValue={todo.text}
        />
       
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}




export default EditTodo