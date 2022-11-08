import './styles.css';
import Categories from './Categories';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <div className="container">
        <h2 className="logo">Coda</h2>
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