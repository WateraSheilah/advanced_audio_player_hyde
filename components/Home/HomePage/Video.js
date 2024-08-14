import React, { useState } from 'react';
import styles from'./video.module.css'
import { FaArrowLeft, FaUser, FaLock, FaMoneyBill, FaTasks, FaLifeRing, } from 'react-icons/fa';
import { faEyeClosed, faEyeOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



import Loading from 'react-spinner';
import Image from 'react-dom';
function Video() {
  const [index,setIndex]=useState(0);

  const [inputType, setInputType] = useState('password');
  
  return (
    <div className={`${styles.container}`}>
    <div className={`${styles.settings}`}>
      <div> 
    <p class="text-white">H-<span class="text-[#ffe5b2]">STREAMER</span></p>
      </div>
      
    </div>
    
    <div className={`${styles.str}`}>
      <div><FaArrowLeft class="text-white"/></div> 
    <div><p class="text-white">Stream</p></div>
      </div> 
     <div className={`${styles.container3}`}> 
      <div className={`${styles.sidebar}`}>
      <div className={`${styles.menu}`}>
        <div className={`${styles.circle}`}>
        <img className={`${styles.image}`} src="/images/vid.png"  />
        </div>
        <div class="mr-10 mt-5">
          <h3 class="text-white">videoFile</h3>
          <p class="text-white">Schedule your video stream</p>
        </div>
      </div>
      <div className={`${styles.menu}`}>
      <div className={`${styles.circle}`}></div>
      <div class="mr-10 mt-5">
          <h3 class="text-white">videoFile</h3>
          <p class="text-white">Schedule your video stream</p>
        </div>
      </div>
     </div>
     <div className={`${styles.side}`}>
     <div className={`${styles.menu1}`}>
      <h3 className={`${styles.preview}`}>No preview</h3>
      <div className={`${styles.image1}`}> 
      <img className='bg-orange' src="/images/vid.png" />
      </div>
      <div className={`${styles.image1}`}>
      <p>Copy and paste streaming setting into your streaming software to start</p>
      </div>
     
     </div>
     </div>
      </div>
    
       </div>  
       
        

       
        
    
     
  )
}

export default Video