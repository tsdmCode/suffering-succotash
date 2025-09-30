import './App.css'
import { useState, useEffect } from 'react';
function App() {
  const [cartCount, setcartCount] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
      
  }, []);

  console.log(data)

    if (!data) {
    return <div>Loading...</div>;
  }
  const handleClick = () => {
    setcartCount(cartCount+1);
  }
  const renderedProducts = data.products.map((product) => {
    return (
      <div className='product-card' key={product.id}>
        <img src={product.thumbnail} alt="" />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <button onClick={handleClick}>Add to cart</button>
      </div>
    )
  })
  return (
    <div className="app">
      <h1>Your App</h1>
      <p>Start building your app here!</p>
      <section className="product-container">
        {renderedProducts}
      </section>
    </div>
  )
}

export default App
