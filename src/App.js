import "./App.scss";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router basename={window.location.pathname || ''}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/About" exact element={<About />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
