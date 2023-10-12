import './NavBar.css';

function NavBar() {
    return(
        <div className="Navbar__container">
            <div className='navbar'>
                <div className='nav__option'>For You</div>
                <div className='nav__option'>Trade</div>
                <div className='nav__option'>Shop</div>
                <div className='nav__option'>Book Clubs</div>
                <div className='nav__option'>Friends</div>
            </div>
        </div>
    )
}
export default NavBar;


