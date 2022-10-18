import PageHolder from "../../components/page_holder/PageHolder";
import Services from "./Services";
import "./ServicesStyle.css";
import 'animate.css';
1
function MainServices() {
  return (
    <>
   
    <PageHolder>
    <div className="header-container animate__animated animate__slideInDown">
        <h1>Services</h1>
        <p>hackerU project tnx to petruzilia </p>
      </div>
      <PageHolder>
      <Services />
      </PageHolder>
    
    </PageHolder>
      
    </>
  );
}

export default MainServices;