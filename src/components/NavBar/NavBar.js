import './styles.css';
import Categories from './Categories';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <div className="container">
        <p className="logo">Coda</p>
        <nav>
            <Categories clickin= "Inicio" />
            <Categories clickin= "Tienda" />
            <Categories clickin= "Nosotros" />
            <CartWidget />
        </nav>
    </div>
  )
}

export default NavBar;