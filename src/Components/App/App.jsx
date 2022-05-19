import {BrowserRouter,Routes, Route } from "react-router-dom";

// route
import Home from "../../Pages/Home/Home";
import Cart from "../../Pages/Cart/Cart";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Error from "../Error/Error";


// styles
import "../../Styles/index.scss";
import "./app.scss";

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter >
      <Routes>
        {/* route public */}
        <Route path="/" element={<Home />} />
        <Route path="/pannier" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Routes>
      </BrowserRouter >
      <Footer />
    </div>
  );
}

export default App;
