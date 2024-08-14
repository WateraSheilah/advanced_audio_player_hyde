import React, { useState } from 'react';
import styles from'./ResetPassword.module.css'
import { FaArrowLeft, FaUser, FaLock, FaMoneyBill, FaTasks, FaLifeRing} from 'react-icons/fa';
import { faEyeClosed, faEyeOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function ResetPassword() {
  const [index,setIndex]=useState(0);

  const [inputType, setInputType] = useState('password');
  return (
    <div className={`${styles.container}`}>
    <div className={`${styles.settings}`}>
      <div className={`${styles.str}`}>
      <div><FaArrowLeft/></div> 
    <div><p>Settings <FontAwesomeIcon icon={faEyeClosed} /></p></div>
      </div>
    </div>
    <div className={`${styles.container2}`}>
     <div className={`${styles.navbar}`}>
      <div onClick={()=>setIndex(0)} className={`${index===0?styles.navItemSelected:styles.navItem}`}>
        <p>Account</p>
      </div>
      <div onClick={()=>setIndex(1)}  className={`${index===1?styles.navItemSelected:styles.navItem}`}>
        <p>Streaming Setup</p>
      </div>
     </div>
     <hr className={`${styles.line}`}/>
     <div className={`${styles.container3}`}>
      <div>
      <div className={`${styles.sidebar}`}>
      <div className={`${styles.menu}`}>
        <FaUser className={`${styles.icon}`}/>
        <p className={`${styles.word}`}>Profile Settings</p>
      </div>
      <div className={`${styles.menu}`}>
      <FaLock className={`${styles.icon}`}/>
        <p className={`${styles.word}`}>Password</p>
      </div>
      <div className={`${styles.menu}`}>
       <FaMoneyBill className={`${styles.icon}`}/>
       <p className={`${styles.word}`}>Billings</p>
      </div>
      <div className={`${styles.menu}`}>
        <FaTasks className={`${styles.icon}`}/>
        <p className={`${styles.word}`}>Activities</p>
      </div>
      <div className={`${styles.menu}`}>
        <FaLifeRing className={`${styles.icon}`}/>
        <p className={`${styles.word}`}>Support</p>
      </div>
  
        <button className={`${styles.but}`}>Delete Account</button>
      
      </div>
      </div>
      <div className={`${styles.side}`}>
        <h1 className={`${styles.header}`}>Change Password</h1>
        <div className={`${styles.passdetails}`}>
          <div className={`${styles.details}`}>
            <label htmlFor='password'>Current Password</label>
            <input className={`${styles.in}`} type='password' placeholder='  ************'/>
          </div>
          <div className={`${styles.details}`}>
            <label htmlFor='password'>New Password</label>
            <input className={`${styles.in}`} type={inputType} placeholder='  ************'/>
            <button onClick={() => setInputType(inputType === 'password' ? 'text' : 'password')}>
    {inputType === 'password' ? <FontAwesomeIcon icon={faEyeClosed} /> : <FontAwesomeIcon icon={faEyeOpen} />}
  </button>
          </div>
          <div className={`${styles.details}`}>
            <label htmlFor='password'>Confirm Password</label>
            <input className={`${styles.in}`} type='password' placeholder='  ************'/>
          </div>
          <button className={`${styles.save}`}>Save Changes</button>
        </div>
      </div>
     </div>
    </div>
    </div>
  )
}

export default ResetPassword