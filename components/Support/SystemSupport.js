import React, { useState } from 'react';
import styles from'./SystemSupport.module.css'
import { FaBarsProgress, FaArrowLeft, FaUser, FaLock, FaMoneyBill, FaTasks, FaLifeRing, FaAlgolia, } from 'react-icons/fa';
import {faSolidFaBarsProgress, faEyeClosed, faEyeOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loading from 'react-spinner';
function SystemSupport() {
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
        <h1 className={`${styles.header}`}>Support Screen</h1>
        <div className={`${styles.contain}`}>
          <div className={`${styles.card}`}>
            <p className={`${styles.head}`}>Technical support request</p> 
            <div className={`${styles.card1}`}>
            <FaBarsProgress />
            </div>
       </div>

       <div className={`${styles.card}`}>
            <p className={`${styles.head}`}>Billing Support</p>
            <div className={`${styles.card1}`}>
              <FontAwesomeIcon icon={FaAlgolia} className={`${styles.icons}`}/>
            </div>
       </div>
       <div className={`${styles.card}`}>
            <p className={`${styles.head}`}>Others</p>
            <div className={`${styles.card1}`}>
              <Loading className={`${styles.icon}`}/>
            </div>
       </div>  
        </div>
        <div className={`${styles.supportType}`}>
  <p>Support Type</p>
  <select className={`${styles.sel}`}>
    <option value="technical"></option>
    <option value="billing"></option>
    <option value="other"></option>
  </select>
</div>
<div className={`${styles.contain}`}>
<div className={`${styles.card}`}>
            <p className={`${styles.head}`}>Message</p>
            <div className={`${styles.card2}`}>
             <div>

             </div>
            <hr className={`${styles.line2}`}/>
            </div>
       </div>
    </div>  

    <div className={`${styles.contain1}`}>
<div className={`${styles.card}`}>
            
            <div className={`${styles.card3}`}>
            <button className={`${styles.btn}`}>insert image</button>
            </div>
       </div>
    </div>  

        <button className={`${styles.save}`}>Submit</button>
        <p className={`${styles.head}`}>Technical support request</p>
        <div className={`${styles.hotline}`}>Hotline: 0705488333, 0705488333</div>
      </div>
     </div>
    </div>
    </div>
  )
}

export default SystemSupport