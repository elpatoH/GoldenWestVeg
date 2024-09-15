import { Routes, Route } from "react-router-dom";
import Nav from "./components/Navbar/Nav";
import Home from "./components/HomePage/Home"
import About from "./components/AboutPage/About"
import ErrorComponent from "./constants/ErrorComponent"

export default function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<ErrorComponent/>}/>

        {/* <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </div>
  );
}
