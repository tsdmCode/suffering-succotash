import { useState, useEffect } from "react";

export function ProductsContainer({cartCount, setCartCount}) {

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
    setCartCount(cartCount+1);
  }
  const renderedProducts = data.products.map((product) => {
    return (
      <div className='product-card' key={product.id}>
        <img src={product.thumbnail} alt="" />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Price: <b>${product.price}</b></p>
        <button onClick={handleClick}>Add to cart</button>
        <div className='tag-container'>{product.tags.map(tag => <div key={tag} className='tag'>{tag}</div>)}</div>
      </div>
    )
  })

  return (
    <section className="product-container">
        {renderedProducts}
    </section>
  )
}