//react component for the navbar
import './NavBar.css'

function NavBar(props) {
    console.log(props.children)
    return (
        <div className="navbar">
            <a  className="nav-brand">
                <h2>Mouse Store</h2>
            </a>
            <a  className="nav-link">
                <h2>Home</h2>
            </a>
            <a  className="nav-link">
                <h2>About</h2>
            </a>
            <a  className="nav-link">
                <h2>Contact</h2>
            </a>

            <div className="nav-cart">
                {props.children}
            </div>    

        </div>
    );
}

export default NavBar;