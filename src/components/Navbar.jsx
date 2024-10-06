import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to='/new-phone-form/'><h1>New Phone Form</h1></Link>
            <p>by LieOnLion</p>
        </nav>
    );
};

export default Navbar;