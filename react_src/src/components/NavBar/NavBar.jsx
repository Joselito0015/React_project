//react component for the navbar
import './NavBar.css'
import { Link } from 'react-router-dom';

function NavBar(props) {
    console.log(props.children)
    return (
        <div className="navbar">
            <Link to={'/'} className="nav-brand">
                <h2>Mouse Store</h2>
            </Link>
            <Link to={'/'} className="nav-link">
                <h2>Home</h2>
            </Link>
            <Link to={'/category/Futbol'}  className="nav-link">
                <h2>Futbol</h2>
            </Link>
            <Link to={'/category/Basquet'} className="nav-link">
                <h2>Basquet</h2>
            </Link>

            <div className="nav-cart">
                {props.children}
            </div>    

        </div>
    );
}

export default NavBar;