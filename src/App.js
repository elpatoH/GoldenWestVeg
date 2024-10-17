import { Routes, Route } from "react-router-dom";
import Nav from "./components/Navbar/Nav";
import Home from "./pages/HomePage/Home"
import About from "./pages/AboutPage/About"
import Contact from "./pages/ContactPage/Contact";
import Footer from "./components/Footer/Footer"
import ErrorComponent from "./constants/ErrorComponent"
import Services from "./pages/ServicesPage/Services";
import ScrollToTop from "./constants/scrollToTop";
import Team from "./pages/TeamPage/TeamPage";

export default function App() {
  return (
    <div>
      <Nav/>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Services" element={<Services/>}/>
        <Route path="/Team" element={<Team/>}/>
        <Route path="/*" element={<ErrorComponent/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}
