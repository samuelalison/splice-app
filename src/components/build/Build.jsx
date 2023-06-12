import React from 'react';
import './build.css';
// import eclipse1 from '../../assets/Ellipse 1.png';
// import eclipse2 from '../../assets/Ellipse 2.png';
// import logo1 from '../../assets/Logo 1.png';
// import logo2 from '../../assets/Logo 2.png';
// import logo3 from '../../assets/Logo 3.png';
// import logo4 from '../../assets/Logo 4.png';
// import logo5 from '../../assets/Logo 5.png';
// import logo6 from '../../assets/Logo 6.png';
// import logo7 from '../../assets/Logo 7.png';
// import logo8 from '../../assets/Logo 8.png';
// import logo9 from '../../assets/Logo 9.png';
import logos from '../../assets/Logos.png';

const Build = () => {
  return (
<div className='build'>
<div className='build-container'>
{/* <div className='circle1'>

<div className='logo1 top' >
<img src={logo1} alt=""/>
</div>

<div className='logo1 top-left' >
<img src={logo2} alt="" />
</div>

<div  className='logo1 top-right'>
<img src={logo3} alt="" />
</div>

<div  className='logo1 bottom'>
<img src={logo4} alt="" />
</div>

<div  className='logo1 bottom-left'>
<img src={logo5} alt="" />
</div>

<div  className='logo1 bottom-right'>
<img src={logo6} alt="" />
</div>


<div className='circle2'>

<div className='circle3'>
<div className='logo2 small-top' >
<img src={logo7} alt=""/>
</div>

<div className='logo2 small-left' >
<img src={logo8} alt="" />
</div>

<div  className='logo2 small-right'>
<img src={logo9} alt="" />
</div>


</div>
</div>
</div> */}

<div className='earth'>
  <img src={logos} alt="" />
</div>

<div className='plugins'>
<p className='plugin-head'>PLUGINS</p>
<div className='plugins-build'>
  <h4>Build your <br /> <span>digital studio</span></h4>
  <p>Try industry-leading music software for <br /> free, pay it off over time and own it forever.</p>
  <button>TRY GEAR</button>
</div>
</div>


</div>
    </div>
  )
}

export default Build