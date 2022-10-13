import './App.css';
import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactsPage';
import ServicesPage from './pages/ServicesPage';
import NavBar from "./components/NavBar";
import CurrentLocationTile from "./components/CurrentLocationTile";

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar/>

          <div className="content">
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/contacts" element={<ContactPage/>}/>
                <Route path="/services" element={<ServicesPage/>}/>
            </Routes>
          </div>

          <hr/>
          <CurrentLocationTile/>
      </Router>
    </div>
  );
}

export default App;
