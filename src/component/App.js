//import logoJWBlanc from "./image/LogoJWBlanc.png";
import { useState } from "react";
import Banner from "./Banner";
import Cart from "./Cart";
import Footer from "./Footer";
import ShoppingList from "./ShoppingList";
import "../css/Layout.css";

function App() {
  const [cart, updateCart] = useState([]);
  return (
    <>
      <Banner />
      <div className="layout-inner">
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      <Footer />
    </>
  );
}

export default App;
