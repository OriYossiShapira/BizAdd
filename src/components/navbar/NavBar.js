import 'animate.css';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { Link } from 'react-router-dom';
import './Navbar.css'
const IconStyle = {color:'white',fontSize:'38px'}
1



function NavBar() {
 

  return ( 

<div className="b_navbar-container ">

  <div className="homepage-link-container">
  <Link to="/" className="home-link text-reset "><h3 className='logo'><StorefrontIcon className="nav_icon" style={IconStyle}/> BizAd</h3></Link>
  </div>
  <div className="b_navbar_right-container">
       <Link to="/services" className="services-link text-white text-decoration-none animate__animated animate__fadeInUp"> Services </Link>
        <Link to= "/aboutus" className="about-us-link text-white text-decoration-none animate__animated animate__fadeInUp"> about us </Link>
</div>
</div>


   );
}

export default NavBar;