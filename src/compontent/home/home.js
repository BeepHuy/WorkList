import React from 'react'
// import {sigInWithGoogle} from './firebase'
// import  anh1  from '../../images/huyhoang.jpg'
function home() {
  return (
    <div className="App">

      <nav className='nav-app'>
        <div className='nav-list'>
          <div className='nav-item'>
            <a href="huy" className='nav-link'>
              <i className="home icon nav-icon"></i>
              To Do
            </a>
          </div>

          <div className='nav-item'>
            <input type="text" className='nav-input' placeholder='Tìm Kiếm'/>
            <i className="search icon nav-icon2"></i>
          </div>

          <div className='nav-item nav-user'>
            <a href="huy" className='nav-link'>
            {localStorage.getItem('name')} 
            </a>
            <img src={localStorage.getItem('profilePic')}  alt="" className='nav-image' />
          </div>
        </div>
      </nav>

      <div className='wrap-content'>
        <aside className='aside-main'>
          <div className='aside-rollup'>
            <i className='bars icon ' style={{fontSize: '24px',  color:'rgb(4, 48, 246)'}}></i>
          </div>
          <div >
            <ul className='aside-list'>
              <li className='aside-item'>
                <i className='home icon icon-main'></i> 
                Tác Vụ
              </li>
              <li className='aside-item'>
                <i className='sun icon icon-main'></i>
                Ngày Của Tôi
              </li>
              <li className='aside-item'>
                <i className='star icon icon-main'></i>
                Quan Trọng
              </li>
              <hr/>
              <li className='aside-item'>
                <i className='home icon icon-main'></i> 
                <a href="logout"> Đẵng Xuất</a>
              </li>
            </ul>
          </div>
        </aside>
        {/* end aside */}
        
        <section className='section-main'>
          <div className='section-list'>
            <div className='section-item section-item__task'>
              <i className='home icon icon-main'> </i>
              Tác vụ
            </div>
            <div className='section-item'>
              <ul className='section-child__list'>
                <li className='section-child__item'>
                  <i className='bell icon icon-main'></i>
                   Thông Báo
                </li>
                <li className='section-child__item'>
                  <i className='object group icon icon-main'></i>
                  Nhóm
                </li>
              </ul>
            </div>
          </div>
          <div className='section-add'>
            <input type="text" placeholder='Thêm tác vụ' className='section-input'/>
            <button className='add-task'>Thêm</button>
          </div>
          <div className='section-view'>
            <div className='view-list'>
              <span className='view-item view-span'>
               <input type="radio" className='view-check'/>
                Hom nay đi chơi đèo Hải Vân
              </span>
              <span className='view-item view-icon'> 
                <i className='edit icon icon-main'></i>
                <i className='delete icon icon-main'></i>
              </span>
            </div>
            <div className='view-list'>
              <span className='view-item view-span'>
               <input type="radio" className='view-check'/>
                Ngày mai đi biển Mỹ Khê
              </span>
              <span className='view-item view-icon'> 
                <i className='edit icon icon-main'></i>
                <i className='delete icon icon-main'></i>
              </span>
            </div>

            <div className='view-true'>
              <button className='view-true__p btn-button'>
                <i className='angle down icon js-modal-close'></i> 
                Đã hoàn thành : 1
              </button>
              <div className="modal js-modal">
                <div className="modal-container js-modal-container">
                  <div className='view-list'>
                    <span className='view-item view-span '>
                      <input type="radio" className='view-check'/>
                        Tối nay đi Cầu Ròng
                      </span>
                      <span className='view-item view-icon'> 
                        <i className='edit icon icon-main'></i>
                        <i className='delete icon icon-main'></i>
                    </span>
                  </div>
                </div>
              </div>

            </div>  
          </div>

        </section>

      </div>
    </div>
  )
}

export default home