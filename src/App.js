import { Routes, Route } from "react-router-dom";
import Nav from "./components/Navbar/Nav";
import Home from "./pages/HomePage/Home"
import About from "./pages/AboutPage/About"
import Footer from "./components/Footer/Footer"
import ErrorComponent from "./constants/ErrorComponent"

export default function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<ErrorComponent/>}/>

        {/* <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer/>
    </div>
  );
}
