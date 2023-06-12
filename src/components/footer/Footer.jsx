import React from 'react';
import './footer.css';
import logo from '../../assets/Frame.png'
import fb from '../../assets/Vector (1).png';
import twiter from '../../assets/Vector (2).png';
import insta from '../../assets/Group.png';
import youtube from '../../assets/Vector (3).png' 

const Footer = () => {
  return (
<div className='footer'>
<div className='footer-container'>

<div>
<div className="splice__navbar-links_logo">
          <img src={logo} alt=''/>
        </div>
   <p className='footer-p'>2021 Splice.com All Rights Reserved</p>     
</div>



<div className='footer-sec'>
  <div className='footer-sec_up'>
  <h5 className='footer-h'>STUDIO</h5>
  <p className='footer-p'>Features</p>
  <p className='footer-p'>About Splice Studio</p>
  <p className='footer-p'>Managing Your <br /> Production Library</p>
  <p className='footer-p'>Collaborating with <br /> Baewatch</p>
  </div>

  <div>
  <h5 className='footer-h'>PLUGINS</h5>
  <p className='footer-p'>Top VSTs</p>
  <p className='footer-p'>Serum</p>
  <p className='footer-p'>Rent to Own</p>
  <p className='footer-p'>Free Plugins</p>
  <p className='footer-p'>Top Manufacturers</p>
  </div>
</div>

<div className='footer-sec'>
<div className='footer-sec_up'>
  <h5 className='footer-h'>COMMUNITY</h5>
  <p className='footer-p'>Ableton Live Projects</p>
  <p className='footer-p'>FL Studio Projects</p>
  <p className='footer-p'>Logic Pro X Projects</p>
  <p className='footer-p'>Garageband Projects</p>
  <p className='footer-p'>Garageband Projects</p>
  </div>

  <div>
  <h5 className='footer-h'>PLUGINS</h5>
  <p className='footer-p'>Top VSTs</p>
  <p className='footer-p'>Serum</p>
  <p className='footer-p'>Rent to Own</p>
  <p className='footer-p'>Free Plugins</p>
  <p className='footer-p'>Top Manufacturers</p>
  </div>
</div>

<div className='footer-sec'>
<div className='footer-sec_up'>
  <h5 className='footer-h'>SOUNDS</h5>
  <p className='footer-p'>Features</p>
  <p className='footer-p'>Catalog</p>
  <p className='footer-p'>How Jauz Uses Sounds</p>
  <p className='footer-p'>deadmau5s Chimaera</p>
  <p className='footer-p'>KSHMR Vol. 2</p>
  </div>

  <div>
  <h5 className='footer-h'>BLOG</h5>
  <p className='footer-p'>Latest Posts</p>
  <p className='footer-p'>Using Soundtoys Decapitator</p>
  <p className='footer-p'>Mastering 101</p>
  <p className='footer-p'>Producing Future Beats</p>
  <p className='footer-p'>Belonging at Splice</p>
  </div> 
</div>

<div>
  <h5 className='footer-h'>FIND US ON SOCIAL</h5>
  <div className='socials'>
<img src={fb} alt="" />
<img src={twiter} alt="" />
<img src={insta} alt="" />
<img src={youtube} alt="" />
  </div>

  <div className='social-terms'>
    <p className='footer_p'>Terms of Use</p>
    <p className='footer_p'>Privacy Policy</p>
    <p className='footer_p'>Jobs</p>
  </div>

  <div className='social-terms2'>
<p className='footer_p'>Contact</p>
<p className='footer_p'>Help</p>
  </div>
</div>


</div>
 </div>
  )
}

export default Footer