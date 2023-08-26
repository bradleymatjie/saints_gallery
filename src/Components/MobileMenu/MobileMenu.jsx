import { NavLink } from 'react-router-dom'
import './MobileMenu.scss';

export const MobileMenu = ({ removeMenu, menuToggler }) => {


  return (
    <div className={`mobileMenu ${menuToggler ? 'open':''}`}>
      <ul className={`${menuToggler ? 'open':''}`}>
          <li>
            <NavLink onClick={removeMenu} to='/saints_gallery/'>Potraits</NavLink>
          </li>

          <li>
            <NavLink onClick={removeMenu} to='/saints_gallery/LandScapes'>LandScapes</NavLink>
          </li>

          <li>
            <NavLink onClick={removeMenu} to='/saints_gallery/boudior'>Boudior</NavLink>
          </li>

          <li>
            <NavLink onClick={removeMenu} to='/saints_gallery/about'>About</NavLink>
          </li>

          <li>
            <NavLink onClick={removeMenu} to='/saints_gallery/contact'>Contact</NavLink>
          </li>
      </ul>
    </div>
  )
}