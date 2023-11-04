import airbnbLogo from '../assets/airbnb-logo.png'
function Navbar() {
    return(
        <nav className='navbar'>
            <img className='navbar-logo' src={airbnbLogo} />
        </nav>
    ) 
}

export default Navbar;