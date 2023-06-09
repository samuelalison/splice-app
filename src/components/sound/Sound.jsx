import React from 'react';
import './sound.css';

const Sound = () => {
  return (
    <div className='sound'>
      <div className='sounds'>
        <p>SOUNDS</p>
      </div>
      <div className='find'>
        <h4>Find your <span className='blue-sound'>sound</span> </h4>
      </div>
      <div className='sound-text'>
        <p>Preview and download millions of royalty-free samples from<br /><span className='top'>top producers, artists, and sound designers. Available on</span><span className='web'>desktop, web, and mobile.</span></p>
      </div>

      <div className='try_btn'>
      <button>TRY SOUNDS</button>
      </div>
    </div>
  )
}

export default Sound