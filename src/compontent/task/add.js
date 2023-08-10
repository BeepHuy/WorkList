import Modal from "./modal"
import {useState} from 'react'
import '../../style/add.css'
import {db} from '../firebase'
import {collection, addDoc, Timestamp} from 'firebase/firestore'

function Add({onClose, open}) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'tasks'), {
        userId : localStorage.getItem('userId'),
        title: title,
        description: description,
        completed: false,
        created: Timestamp.now()
      })
      onClose()
    } catch (err) {
      alert(err)
    }
  }

  return (
    <Modal modalLable='Add Task' onClose={onClose} open={open}>
      <form onSubmit={handleSubmit} className='addTask' name='addTask'>
        <input 
          type='text' 
          name='title' 
          onChange={(e) => setTitle(e.target.value.toUpperCase())} 
          value={title}
          placeholder='Enter title'/>
        <textarea 
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Enter task decription'
          value={description}>
        </textarea>
        <button type='submit'>Done</button>
      </form> 
    </Modal>
  )
}

export default Add