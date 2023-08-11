import '../../style/taskManager.css'
import Task from './task'
import AddTask from './add'
import {useState, useEffect} from 'react'
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"
import {db, handleSignOut} from '../firebase'

function TaskManager() {
  const [openAddModal, setOpenAddModal] = useState(false)
  const [tasks, setTasks] = useState([])
  const [quee, setQuery] = useState('');
  // console.log(quee);

  /* function to get all tasks from firestore in realtime */ 
  useEffect(() => {
    const q = query(collection(db, 'tasks'), orderBy('created', 'desc'))
    onSnapshot(q, (querySnapshot) => {
      const allTasks = querySnapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      }))

      const tasksByUserId = allTasks.filter(tasks => tasks.data.userId === localStorage.getItem('userId'))
      setTasks(tasksByUserId);
    })
  },[])

  

  return (
    <div className='taskManager'>
       <nav className='nav-app'>
        <div className='nav-list'>
          <div className='nav-item'>
            <a href="/" className='nav-link'>
              <i className="home icon nav-icon"></i>
              To Do
            </a>
          </div>

          <div className='nav-item'>
            
            <input 
              type="text" 
              className='nav-input search' 
              placeholder='Tìm Kiếm'
              onChange={(e) => setQuery(e.target.value)}
              />
            <i className="search icon nav-icon2"></i>
          </div>

          <div className='nav-item nav-user'>
            <a href="/" className='nav-link'>
            {localStorage.getItem('name')} 
            </a>
            <img src={localStorage.getItem('profilePic')}  alt="" className='nav-image' />
          </div>
        </div>
      </nav>



      <div className='taskManager__container'>
        <button 
          onClick={() => setOpenAddModal(true)}>
          Add task +
        </button>
        <div className='taskManager__tasks wrap-content'>
          <aside className='aside-main'>
            <div className='aside-rollup'>
              <i className='bars icon ' style={{fontSize: '24px'}}></i>
            </div>
            <div >
              <ul className='aside-list'>
                <li className='aside-item'>
                  <a href="/" className='main-link'>
                    <i className='home icon icon-main'></i> 
                    Tác Vụ
                  </a>
                  
                </li>
                <li className='aside-item'>
                  <a href="/" className='main-link'>
                  <i className='sun icon icon-main'></i>
                    Đã Hoàn Thành
                  </a>
                  
                </li>
                
                <hr/>
                <li className='aside-item'>
                  <i className='logout icon icon-main'></i> 
                  <button onClick={handleSignOut} className='main-link'> Đăng Xuất</button>
                </li>
              </ul>
            </div>
          </aside>
          <section className='section-main'>
              {tasks.filter((task) => 
              task.data.title.toLowerCase().includes(quee) ||
              task.data.description.toLowerCase().includes(quee)
              ).map((task) => (
                <Task
                  id={task.id}
                  key={task.id}
                  completed={task.data.completed}
                  title={task.data.title} 
                  description={task.data.description}
                />
              ))}
          </section>
        </div>
      </div>
      {openAddModal &&
        <AddTask onClose={() => setOpenAddModal(false)} open={openAddModal}/>
      }
    </div>
  )
}

export default TaskManager