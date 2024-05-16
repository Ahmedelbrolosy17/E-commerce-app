import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/cart";
import Contact from "./components/Contact";
import About from "./components/About";
import Shipping from "./components/Shipping";

function App() {
  
  return ( 
  <>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="cart" element={<Cart />} />
        <Route path="shipping" element={<Shipping />} />
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Routes>
    </Router>
  </>
  )
}

export default App;