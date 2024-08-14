import React from 'react';
import Link from "next/link";
import { FaFacebook, FaYoutube, FaInstagram, FaCirclePlus, FaTv } from 'react-icons/fa';

const LeftSide= () =>{
    const faceBook = {
        color: '#1877F2',
        fontSize: '30px', 
        position: 'absolute', 
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      };
      const youTube={
        fontSize: '30px', 
        color: 'red' ,
        display: 'block',
        marginTop: 'auto' ,
        marginBottom: 'auto',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      };
      const instaGram={
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '30px',
        color: 'white'
      };
     
  return (
    <div className="left-side">
      <p className="p1">
        Stream smarter,<br />
        welcome to "<span>H-</span><span style={{ color: '#FFE5B2' }}>STREAMER</span>"
      </p>
      <p className="p2"> where your content reaches every corner of the <br />digital world</p>

      <div className="facebook">
        <svg xmlns="http://www.w3.org/2000/svg" width="93" height="74" viewBox="0 0 93 74" fill="none">
          <line x1="8.11433" y1="23.9285" x2="84.0715" y2="21.3789" stroke="white" />
          <line x1="3.94545" y1="36.2438" x2="79.9027" y2="33.6942" stroke="white" />
          <line x1="8.555" y1="51.3684" x2="84.5122" y2="48.8188" stroke="white" />
        </svg>
        <FaFacebook style={faceBook} />
      </div>

      <div className="youtube">
        <svg xmlns="http://www.w3.org/2000/svg" width="82" height="54" viewBox="0 0 82 54" fill="none">
          <line x1="0.689726" y1="25.1021" x2="72.8543" y2="1.26377" stroke="white" />
          <line x1="0.157988" y1="38.0931" x2="72.3226" y2="14.2547" stroke="white" />
          <line x1="8.84054" y1="51.3072" x2="81.0052" y2="27.4689" stroke="white" />
        </svg>
        <FaYoutube style={youTube}  />
      </div>

      <div className="insta">
        <svg xmlns="http://www.w3.org/2000/svg" width="82" height="53" viewBox="0 0 82 53" fill="none">
          <line x1="1.04864" y1="26.1083" x2="72.6147" y2="0.529175" stroke="white" />
          <line x1="0.831716" y1="39.1083" x2="72.3978" y2="13.5292" stroke="white" />
          <line x1="9.83172" y1="52.1083" x2="81.3978" y2="26.5292" stroke="white" />
        </svg>
        <FaInstagram  style={instaGram}  />
      </div>

      {/* <div className="v2"></div>
      <div className="v3"></div> */}
      <div className="srt">
        <svg xmlns="http://www.w3.org/2000/svg" width="82" height="53" viewBox="0 0 82 53" fill="none">
          <line x1="1.04864" y1="26.1083" x2="72.6147" y2="0.529175" stroke="white" />
          <line x1="0.831716" y1="39.1083" x2="72.3978" y2="13.5292" stroke="white" />
          <line x1="9.83172" y1="52.1083" x2="81.3978" y2="26.5292" stroke="white" />
        </svg>
        <p>RTMP<br /> &<br /> SRT</p>
      </div>

      {/* <div className="v4"></div> */}
    </div>
  );
}

export default LeftSide;