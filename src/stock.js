import React, { useState, useEffect } from "react";
import './Items.css'; 

function Stock() {
  const [products, setProducts] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [showAll, setShowAll] = useState(false); 

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error al cargar los datos:', error));
  }, []);

  function handleAll() {
    setShowAll(true); 
  }

  const productsToDisplay = showAll ? products : products.slice(startIndex, startIndex + 3);

  return (
    <>
      
      <div className="product-grid">
        {productsToDisplay.map((product, index) => (
          <div key={index} className="product-item">
            <img width="150" src={product.image} alt={product.category} />
            <div className="info">
              <h3>
                <i>{product.title} </i>
              </h3>
              
              <h2 className="price"> $ {product.price}</h2>
              <h3 className="category">{product.category}</h3>
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleAll}>Mostrar todo</button>
    </>
  );
}

export default Stock;