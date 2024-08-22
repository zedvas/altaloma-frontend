import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Journal from "./pages/Journal";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
