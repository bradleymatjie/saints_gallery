import { memo } from 'react';
import { NavLink } from 'react-router-dom'
import './Header.scss';
import logo from '../../assets/logo.png'

export const Header = memo(({ menuTogglerFunction, menuTogglerValue }) => {

 return (
  <header className='header'>
      <div>
      <img src={logo} alt="logo" />
      </div>

    <nav>
      <ul className='header-navItems'>
          <li>
            <NavLink to='/saints_gallery/'>Potraits</NavLink>
          </li>

          <li>
            <NavLink to='/saints_gallery/Landscapes'>LandScapes</NavLink>
          </li>

          <li>
            <NavLink to='/saints_gallery/quotes'>Quotes</NavLink>
          </li>

          <li>
            <NavLink to='/saints_gallery/boudior'>Boudior</NavLink>
          </li>

          <li>
            <NavLink to='/saints_gallery/about'>About</NavLink>
          </li>

          <li>
            <NavLink to='/saints_gallery/contact'>Contact</NavLink>
          </li>
      </ul>
    </nav>

    <div 
      className={`toggle ${menuTogglerValue ? "toggled" : ""}`}
      onClick={() => {
        menuTogglerFunction((state) => (!state))
      }}
    >
      
      <span></span>
      <span></span>
      <span></span>
    </div>
  </header>
 ) 
})