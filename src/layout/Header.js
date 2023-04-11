import classes from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={classes.header}>
            <h1>SearchBook</h1>
            <div>
                <Link to="/search" >Search Page</Link>
            </div>
            <div>
                <Link to="/wishlist">Wishlist Page</Link>
            </div>
        </header>
    );
};

export default Header;


