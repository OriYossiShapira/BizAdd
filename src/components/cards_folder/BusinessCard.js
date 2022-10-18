import './BusinessCard.css'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import 'animate.css';



const IconStyle = {color:'black',fontSize:'14px'}
function BusinessCard({business}) {

  const openWebsite = () =>  window.open(business.link,"_blank")


 return <div className='b_card animate__animated animate__zoomIn'>
          <img src={business.image}/>
          <span>{business.id}</span>
          <div className='b_head'>
           <h2>{business.name}</h2>
           <p>{business.about}</p>
          </div>

          <div className='b_info'>
            <div><LocalPhoneIcon style={IconStyle}/>{business.phone}</div>
            <hr/>
            <div><LocationOnIcon style={IconStyle}/>{business.address}</div>
          </div>
          <button className='btn_hover' onClick={openWebsite}> קישור לאתר הרשמי </button>
  </div>
}

export default BusinessCard;
