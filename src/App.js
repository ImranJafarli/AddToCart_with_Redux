import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

import Cart from "./pages/Cart";
import CreateProduct from "./pages/CreateProduct";
import Home from "./pages/Home";
function App() {
  const location = useLocation()
  console.log(location.pathname);
  if (location.pathname == '/create-product') {
    alert('create product')
  }
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/create-product" element={<CreateProduct />} />
        </Routes>
      
    </div>
  );
}

export default App;
