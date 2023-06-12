import React from 'react';
import './sync.css';
import syn from '../../assets/image 13.png'


const Sync = () => {
  return (
    <div className='sync'>
    <div className='sync-container'>
<div className='studio'>
  <p className='studio-text-p'>STUDIO</p>
<h6 className='studio-text-h'>Stay in <span>sync</span> </h6>
<p className='studio-text-p2'>Try industry-leading music software for free, pay it off over time and own it forever.</p>
<button className='sync-btn'>TRY STUDIO</button>
</div>

<div className='studio-image'>
  <img src={syn} alt="" />
</div>


      </div>
    </div>
  )
}

export default Sync;