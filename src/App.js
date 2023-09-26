import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/home/Home';
import Nav from './components/Nav_Footer/Nav';
import PartnerWith from './pages/partner/PartnerWith';
import Footer from './components/Nav_Footer/Footer';
import Scholarship from './pages/scholarship/Scholarship';
import AboutUs from './pages/about/AboutUs';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path='/'>
            <Route index element={ <Home /> }></Route>
            <Route path="PartnerWith" element={ <PartnerWith /> }></Route>
            <Route path="About" element={ <AboutUs /> }></Route>
            <Route path="Scholarship" element={ <Scholarship /> }></Route>
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
