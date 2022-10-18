import { useCallback, useState } from "react";
import BusinessCard from "../../components/cards_folder/BusinessCard";
import BusinessCarousel from "../../components/carousel_folder/carousel";
import Grid from "../../components/grid/Grid";
import PageHolder from "../../components/page_holder/PageHolder";
import "./Home.css";
import { businessesArray } from "../../datasource/businesses";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import 'animate.css';

function Home() {
  const [businesses, setBusinesses] = useState(businessesArray);

  const getBusinessImages = () => {
    return businesses.map((business) => business.image);
  };
  const Search = useCallback(function SearchBusiness() {
    const onChange = (e) => {
      const query = e.target.value;
      if (!query || query.length < 1) {
        return setBusinesses(businessesArray);
      }
      setBusinesses(businessesArray.filter((b) => b.name.includes(query)));
    };

    return (
      <div>
        <input className="b_search animate__animated animate__slideInLeft" placeholder="Search a business" required onChange={onChange} />
      </div>
    );
  }, []);

  return (
    <PageHolder>
      <div className="header-container ">
        <h1 className="h1 animate__animated animate__fadeInUp">BizAd</h1>
        <p className="p1 animate__animated animate__fadeInUp">מקפיצים לך את העסק <RocketLaunchIcon/></p>
        
      </div>
      <h1></h1>
      <p></p>
      <BusinessCarousel images={getBusinessImages()}  />
      <Search />
      <Grid columns={5} rows={Math.floor(businesses.length / 4)}>
        {businesses.map((business) => (
          <BusinessCard business={business} key={business.id} />
        ))}
      </Grid>
    </PageHolder>
  );
}

export default Home;
