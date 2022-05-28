import {BrowserRouter,Routes, Route } from "react-router-dom";

// route
import Home from "../../Pages/Home/Home";
import ProductList from "../../Pages/ProductList/ProductList";
import Product from "../../Pages/Product/Product";
import Cart from "../../Pages/Cart/Cart";
import Register from "../../Pages/Register/Register";
import Login from "../../Pages/Login/Login";
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
        <Route path="/produits/:categorie" element={<ProductList />} />
        <Route path="/produit/:id" element={<Product />} />
        <Route path="/panier" element={<Cart />} />
        <Route path="/inscription" element={<Register />} />
        <Route path="/connexion" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
      </BrowserRouter >
    </div>
  );
}

export default App;
