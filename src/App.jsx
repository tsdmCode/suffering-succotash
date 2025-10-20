import './App.css'
import { useState } from 'react';
import { Header } from './components/header';
import { Cart } from './components/cart';
import { ProductsContainer } from './components/productsContainer';

function App() {
  const [cartCount, setCartCount] = useState(0);
  
  return (
    <div className="app">
      <Header />
      <Cart cartCount={cartCount} />
      <ProductsContainer cartCount={cartCount} setCartCount={setCartCount} />
    </div>
  )
}

export default App
