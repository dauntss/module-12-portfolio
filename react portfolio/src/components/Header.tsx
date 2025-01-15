import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <h1>Dante's Portfolio</h1>
            <nav>
                <Link to="/"><button>About Me</button></Link>
                <Link to="/portfolio"><button>Portfolio</button></Link>
                <Link to="/contact"><button>Contact</button></Link>
            </nav>
        </header>
    );
}

export default Header;