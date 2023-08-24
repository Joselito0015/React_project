//react component for the navbar
import './NavBar.css'
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

function NavBar(props) {
    return (
            <div className="navbar">
            <div className="navbar-logo">
                <h2>Sport Store</h2>
            </div>
            <nav className="navbar-links">
                <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/category/Futbol">Futbol</Link></li>
                <li><Link to="/category/Basquet">Basquet</Link></li>
                </ul>
            </nav>
            <div className="navbar-cart">
                <CartWidget/>
            </div>
            </div>

    );
}

export default NavBar;