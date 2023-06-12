import React from 'react';
import './creators.css';
// import substract from '../../assets/Subtract.png';
import huang from '../../assets/image 9 (1).png';
import kshmr from '../../assets/image 9 (2).png';
import kesha from '../../assets/image 9 (3).png';
import volume from '../../assets/Volume Up.png';
import lock from '../../assets/Unlock.png';
import download from '../../assets/Download.png';
import play from '../../assets/Play.png';

const Creators = () => {
  return (
    <div className='creators'>
      <div className='creators-container'>
<div className='creators-left'>
<h6 className='creators-left-h'>What <span>creators</span><br /> are saying <br /> about Splice</h6>
<p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Augue tellus urna, mi velit diam. <br /> Turpis diam amet massa id.</p>
<button className='creator-btn'>TRY IT NOW</button>
</div>


<div className='substract'>
  <div className="substract-container">


  <div className='card-1and2'>
 <div className='card1'>
  <p>I can always find what Im looking for on Splice, whether its the exact sound I want or just a bit of inspiration.</p>
<div className='card-artist'>
<div className='card-img'>
<img src={huang} alt="" />
</div>
<div className='card-art'>
  <p className='card_text-name'>Andrew Huang</p>
  <p className='card_text-artist'>Artist</p>
</div>
  </div>
 </div>
 <div className='card2'>
  <p>Its been fun to dive into Splices creator community and explore tools that support my own creative process</p>
  <div className='card-artist'>
  <div className='card-img'>
<img src={kesha} alt="" />
</div>
<div className='card-art'>
  <p className='card_text-name'>Kesha Lee</p>
  <p className='card_text-artist'>Artist</p>
</div>
  </div>
 </div>
 </div>


 <div className='card-3and4'> 
 <div className='card3'>
  <p>Finally a way to buy plugins that works. By paying a little at a time, producers can get legit access to the top VSTs.</p>
  <div className='card-artist'>
  <div className='card-img'>
<img src={kshmr} alt="" />
</div>
<div className='card-art'>
  <p className='card_text-name'>KSHMR</p>
  <p className='card_text-artist'>Artist</p>
</div>
  </div>
  </div>
  <div className='card4'>
  <p>I can always find what Im looking for on Splice, whether its the exact sound I want or just a bit of inspiration.</p>
  <div className='card-artist'>
  <div className='card-img'>
<img src={huang} alt="" />
</div>
<div className='card-art'>
  <p className='card_text-name'>Andrew Huang</p>
  <p className='card_text-artist'>Artist</p>
</div>
</div>
  </div>
  </div>
  </div>
</div>
      </div>



  <div className='good'>
    <h6 className='good-h'>As good as it sounds</h6>


<div className='good_low'>


  <div>
    <img className='low-img' src={volume} alt="" />
    <h5 className='good_low-h'>100 royalty free</h5>
    <p className='good_low-p'>Use sounds for anything. They’re cleared for commercial use.</p>
  </div>

  <div>
    <img className='low-img' src={lock} alt="" />
    <h5 className='good_low-h'>No commitments</h5>
    <p className='good_low-p'>Cancel your subscription at any time, no questions asked.</p>
 </div>

  <div>
    <img className='low-img' src={download} alt="" />
   <h5 className='good_low-h'>Yours forever</h5>
   <p className='good_low-p'>Keep everything you download. Even if you cancel.</p>
  </div>

  <div>
    <img className='low-img' src={play} alt="" />
    <h5 className='good_low-h'>Individual samples</h5>
    <p className='good_low-p'>Preview & download individual samples, not just full packs.</p>
  </div>



</div>
    </div>    
      </div>
  )
}

export default Creators