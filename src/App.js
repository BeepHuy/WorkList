
import './App.css';
import {Routes, Route} from 'react-router-dom'
import HomePage from './compontent/home/home'
import LoginPage from './compontent/author/login'
import RegisterPage from './compontent/author/register'


function App() {
  return (
    <div>
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<RegisterPage />} />
      </Routes>
    </div>

  );
}

export default App;
