import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contactus from './pages/Contactus';
import Home from './pages/Home';
import Footerpage from './pages/Footer';
import Navbar from './components/navbar/Navbar';
import Productdisplay from './components/productDisplay/Productdisplay';
import Login from './pages/LoginSignup';
import Product from './components/product/Product';
import Buy from './pages/Buy';
import Allproduct from './pages/Allproduct';
import Userorder from './pages/Userorder';
import Map from'./components/map/Map'
import Cart from './components/cart/Cart';
function App() {
  return (
    <Router>
      <div className="content-wrapper"> {/* Main wrapper */}
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/allproduct" element={<Allproduct/>} />
          <Route path="/orders"element={<Userorder/>}/>
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/:productId" element={<Product />} /> 
          <Route path="/productdisplay" element={<Productdisplay/>}/>
          <Route path='/loginsignup'element={<Login/>}/>
          <Route path="/buy" element={<Buy/>} />
          <Route path='/map'element={<Map/>}/>
          <Route path='/cart'element={<Cart/>}/>
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </div>
     <Footerpage/> {/* Footer always outside the wrapper */}
    </Router>
  );
}

export default App;
