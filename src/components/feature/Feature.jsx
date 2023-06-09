import React from 'react'
import './feature.css';
import verge from '../../assets/image 5 (1).png';
import bilboard from '../../assets/image 4.png';
import wired from '../../assets/image 3 (1).png';
import complex from '../../assets/image 2 (1).png';
import veriety from '../../assets/image 1.png';

const Feature = () => {
  return (
    <div className='featured'>
        <div className='featured_text'>
         <p>FEATURED IN</p>
        </div>

<div className='featured_images'> 
<img className='veriety' src={veriety} alt="" />
<img className='verge' src={verge} alt="" />
<img className='bill' src={bilboard} alt="" />
<img className='wired' src={wired} alt="" />
<img className='complex' src={complex} alt="" />
</div>
</div>
  )
}

export default Feature