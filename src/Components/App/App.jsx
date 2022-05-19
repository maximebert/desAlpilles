import {BrowserRouter,Routes, Route } from "react-router-dom";

// route
import Home from "../../Pages/Home/Home";
import ProductList from "../../Pages/ProductList/ProductList";
import Product from "../../Pages/Product/Product";
import Cart from "../../Pages/Cart/Cart";
import Error from "../Error/Error";


// styles
import "../../Styles/index.scss";
import "./app.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Routes>
        {/* route public */}
        <Route path="/" element={<Home />} />
        <Route path="/pannier" element={<Cart />} />
        <Route path="/Femme" element={<ProductList />} />
        <Route path="/produit" element={<Product />} />
        <Route path="/panier" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Routes>
      </BrowserRouter >
    </div>
  );
}

export default App;
