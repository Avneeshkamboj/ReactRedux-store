import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import Products from "./Products";
import Layout from "./sections/Layout";
import Cart from "./Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="cart" element={<Cart />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
