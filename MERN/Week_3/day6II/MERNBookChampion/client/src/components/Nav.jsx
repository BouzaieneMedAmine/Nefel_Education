// Nav.jsx - Navigation component for the app
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', background: '#333', color: 'white' }}>
            <h2>MERN Book Champion</h2>
            <div>
                <Link to="/" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Home</Link>
                <Link to="/create" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Add Book</Link>
            </div>
        </nav>
    );
};

export default Nav;
