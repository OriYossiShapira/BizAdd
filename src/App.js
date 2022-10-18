import { Route, Routes } from "react-router";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import AboutUs from "./pages/home/aboutUs/AboutUs";
import Home from "./pages/home/Home";
import MainServices from "./pages/ServicesF/MainServices";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<MainServices />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;

