import React from 'react'
import '../../style/register.css'
import anhregister from '../../images/regiter.jpg'

function register() {
  return (
    <div className='register-main'>
      <div className='wrap-register'>

      <div className='register-left'>
          <img src={anhregister} alt="" className='left-img'/>
        </div>

        <div className='register-right'>
          <form>
            <div className='register-title'>
              <a href="register" className='register-link register-link-l'> Register</a>
               <p className='title-p'>|</p>
              <a href="login" className='register-link register-link-r'> Login</a>
            </div>
            <div className='register-form'>
              <div className='form-controll'>
                <label className='form-label'> Name</label> <br/>
                <input type="text" className='form-input'/>
              </div>
              <div className='form-controll'>
                <label className='form-label'> Email</label> <br/>
                <input type="email" className='form-input'/>
              </div>
              <div className='form-controll'>
                <label className='form-label'> Password</label> <br/>
                <input type="password" className='form-input'/>
              </div>
            </div>
          </form>
          
            <div className='account-submit'>
                <button className='submit-types'>Sumbit</button>
                <button className='submit-types'>Reset</button>
            </div>
        </div>

       
      </div>

      

    </div>
  )
}

export default register