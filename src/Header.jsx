import './Header.css';

function Header() {
    return(
        <div className='header'>
            <h1>Page Trader</h1>
            <div className='header__nav'>
                <div className='header__option'>Sign Up</div>
                <div className='header__option'>Log In</div>
            </div>
        </div>
    );
};
export default Header;
