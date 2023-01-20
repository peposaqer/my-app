import "./App.scss";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/my-app" exact element={<Home />}/>
        <Route path="/my-app/About" exact element={<About />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
