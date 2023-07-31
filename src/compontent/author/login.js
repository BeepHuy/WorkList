import React from 'react'
import {sigInWithGoogle} from './firebase'
import './login.css'
import anhlogin from '../../images/login.jpg'
import anhgoogle from '../../images/google.png'
import anhfacebook from '../../images/facebook.png'

function login() {
  return (
    <div className='login-main'>
      <div className='wrap-login'>
        <div className='login-left'>
          <form>
            <div className='login-title'>
              <a href="login" className='login-link login-link-l'> Login</a>
               <p className='title-p'>|</p>
              <a href="register" className='login-link login-link-r'> Register</a>
            </div>
            <div className='login-form'>
              <div className='form-controll'>
                <label className='form-label'> Name</label> <br/>
                <input type="text"  className='form-input' placeholder={localStorage.getItem('name')}/>
              </div>
              <div className='form-controll'>
                <label className='form-label'> Email</label> <br/>
                <input type="email" className='form-input' placeholder={localStorage.getItem('email')} />
              </div>
            </div>
          </form>
          <div>
            <div className='account-login'>
              <button className='login-types' onClick={sigInWithGoogle}>
                <img src={anhgoogle} alt="" className='avata-loging'/>
                Sing In With Google
              </button>
              <button className='login-types'>
              <img src={anhfacebook} alt="" className='avata-loginf'/>
                Sing In With FaceBook
                </button>
            </div>
         </div>
      <div className='account-submit'>
        <button className='submit-types'>Sumbit</button>
        <button className='submit-types'>Reset</button>
      </div>
        </div>

        <div className='login-right'>
          <img src={anhlogin} alt="" className='right-img'/>
        </div>
      </div>

      

    </div>
  )
}

export default login