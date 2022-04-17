import React  from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import components 
import Navbar from './components/Navbar/Navbar';

// import pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import Services from './components/pages/Services';
import Work from './components/pages/Work';


function App() {

    return (
      <div className="container">
        {/** Using react router library to implement the navigation functionality */}
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} exact/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/work" element={<Work/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </Router>
      </div>
    );
}

export default App;
