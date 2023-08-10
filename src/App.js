
import './style/App.css';
import {Routes, Route} from 'react-router-dom'
import LoginPage from './compontent/author/login'
import RegisterPage from './compontent/author/register'
import AddTask from './compontent/task/add'
import TaskManager from './compontent/task/TaskManager'


function App() {
  return (
    <div>
      <Routes>
          <Route path='/' element={<TaskManager />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<RegisterPage />} />
          <Route path='add' element={<AddTask />} />
          
      </Routes>
    </div>

  );
}

export default App;
