import './styles.css';
import logo from "./logo.jpg";
import Categories from './Categories';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <img src={logo} alt="logo" />
      <ul>
        <li>
          <NavLink to="/"><Categories clickin="Inicio"/></NavLink>
        </li>
        <li>
          <NavLink to="/marca/Nike"><Categories clickin="Nike"/></NavLink>
        </li>
        <li>
        <NavLink to="/marca/Adidas"><Categories clickin="Adidas"/></NavLink>
        </li>
        <li>
          <NavLink to="/marca/Jordan"><Categories clickin="Jordan"/></NavLink>
        </li>
      </ul>
      <Link to="/cart" className="number_cart">
        <CartWidget />
        <p>1</p>
      </Link>
    </nav>
  )
}

export default NavBar;