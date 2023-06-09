import React from 'react';
import './packs.css';
import pack from '../../assets/image 12.png';

const Packs = () => {
  return (
    <div className='pack'>
      <div className='pack_container'> 
        <img src={pack} alt="" />
      </div>
    </div>
  )
}

export default Packs