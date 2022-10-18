import { Link } from 'react-router-dom';
import PageHolder from "../../../components/page_holder/PageHolder";
import "./AboutUs.css"
import SpaIcon from '@mui/icons-material/Spa';
import 'animate.css';
import StorefrontIcon from '@mui/icons-material/Storefront';







function AboutUs() {
  return (  
<>
<PageHolder>
<div className="header-container animate__animated animate__slideInDown">
        <h1>About Us</h1>
        <p>GET START TODAY<SpaIcon/></p>
      </div>
      <PageHolder>
      <div>
<Link to="/" className="home-link text-reset "><h3 className='logo'><StorefrontIcon className="nav_icon" /> BizAd</h3></Link>
</div>
      </PageHolder>
    


</PageHolder>

</>

  );
}

export default AboutUs;