import React from 'react';
import './navbar.css';
import logo from '../../assets/Frame.png'
// import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';


const Navbar = () => {
  // const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='splice__navbar'>
      <div className='splice__navbar-container'>
  <div className="splice__navbar-links-container">
        <div className="splice__navbar-links_logo">
          <img src={logo} alt=''/>
        </div>
        <div className="splice__navbar-links">
          <p><a href="#studio">STUDIO</a></p>
          <p><a href="#community">COMMUNITY</a></p>
          <p><a href="#sounds">SOUNDS</a></p>
          <p><a href="#plugins">PLUGINS</a></p>
          <p><a href="#blog">BLOG</a></p>
        </div>
      </div>
      <div className="splice__navbar-sign">
        <p><a href="#login">LOGIN</a></p>
        <button type="button">SIGN UP</button>
    </div> 
{/* 
        <div className="splice__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
 {toggleMenu && (
        <div className="splice__navbar-menu_container scale-up-center">
          <div className="splice__navbar-menu_container-links">
          <p><a href="#studio">STUDIO</a></p>
          <p><a href="#community">COMMUNITY</a></p>
          <p><a href="#sounds">SOUNDS</a></p>
          <p><a href="#plugins">PLUGINS</a></p>
          <p><a href="#blog">BLOG</a></p>
          </div>
          <div className="splice__navbar-menu_container-links-sign">
          <p><a href="#login">LOGIN</a></p>
          <button type="button">SIGN UP</button>
          </div>
        </div>
        )}

      </div> */}
      </div>
    </div>
  )
}

export default Navbar