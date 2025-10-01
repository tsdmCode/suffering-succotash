import { useState, useEffect } from "react";

export function Products({ handleClick }) {
  const [data, setData] = useState(null);
  const [query, setQuery] = useState("https://dummyjson.com/products");

  useEffect(() => {
    fetch(query)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, [query]);

  console.log(data);

  if (!data) {
    return <div>Loading...</div>;
  }

  const searchByTag = (e) => {
    setQuery(`https://dummyjson.com/products/category/${e.target.innerText}`);
  };

  //TODO: Fix så du har kategorien
  const renderedProducts = [];

  data.products.map((product) => {
    const { id, thumbnail, title, description, price, tags } = product;

    renderedProducts.push(
      <div className="product-card" key={id}>
        <img src={thumbnail} alt="" />
        <h2>{title}</h2>
        <p>{description}</p>
        <p>
          Price: <b>${price}</b>
        </p>
        <button onClick={handleClick}>Add to cart</button>
        <div className="tag-container">
          {tags.map((tag) => (
            <div key={tag} onClick={searchByTag} className="tag">
              {tag}
            </div>
          ))}
        </div>
      </div>
    );
  });

  return (
    <section className="product-container">
        {renderedProducts}
    </section>
  )
}
