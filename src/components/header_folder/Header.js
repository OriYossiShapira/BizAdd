import './Header.css'









function Header(props) {




  return ( 

    <>
    <div className="header-container text-white">
    {
props.headerss.map(head =>
  <>
  <h1></h1>
  <p>
 </p>
  </>)

    }
    </div>
   
    </>
   );
}

export default Header;