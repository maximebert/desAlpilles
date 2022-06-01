import {BrowserRouter,Routes, Route } from "react-router-dom";

// route
import Home from "../../Pages/Home/Home";
import ProductList from "../../Pages/ProductList/ProductList";
import Product from "../../Pages/Product/Product";
import Cart from "../../Pages/Cart/Cart";
import Register from "../../Pages/Register/Register";
import Login from "../../Pages/Login/Login";
import Error from "../Error/Error";
import Success from "../../Pages/Success/Success";


// styles
import "./app.scss";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector(state=>state.user.currentUser);
  console.log(user)
  return (
    <div className="App">
      <BrowserRouter >
      <Routes>
        {/* route public */}
        <Route path="/" element={<Home />} />
        <Route path="/pannier" element={<Cart />} />
        <Route path="/produits/:categorie" element={<ProductList />} />
        <Route path="/produit/:id" element={<Product />} />
        <Route path="/favoris" element={<Cart />} />
        <Route path="/inscription" element={<Register />} />
        <Route path="/connexion" element={<Login />} />
        <Route path="/succes" element={<Success />} />
        <Route path="*" element={<Error />} />
      </Routes>
      </BrowserRouter >
    </div>
  );
}

export default App;
