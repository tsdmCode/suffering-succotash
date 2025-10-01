import "./App.css";
import { useState, useEffect } from "react";
import { Header } from "./components/header";
import { Cart } from "./components/cart";
import { Products } from "./components/products";

function App() {
  const [cartCount, setcartCount] = useState(0);
  const handleClick = () => {
    setcartCount(cartCount + 1);
  };
  return (
    <div className="app">
      <Header />
      <Cart props={cartCount} />
      <Products handleClick={handleClick} />
    </div>
  );
}

export default App;
