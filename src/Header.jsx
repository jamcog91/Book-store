import './Header.css';

function Header() {
    return(
        <div className='header'>
            <h1 className='header__logo'>Page Trader</h1>
            <div className='header__nav'>
                <div className='header__option'>
                    <span>Sign Up</span>
                </div>
                <div className='header__option'>
                    <span>Log In</span>
                </div>
            </div>
        </div>
    );
};
export default Header;
