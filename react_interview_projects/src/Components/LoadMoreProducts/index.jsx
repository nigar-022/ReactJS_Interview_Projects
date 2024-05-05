import { useState, useEffect } from "react";
import "./style.css";

export default function LoadMoreProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://dummyjson.com/products?limit=20&skip=${
            count === 0 ? 0 : count * 20
          }`
        );
        const data = await response.json();
        console.log(data);
        if (data && data.products && data.products.length) {
          setLoading(false);
          setProducts((prevData) => [...prevData, ...data.products]);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) {
      setDisable(true);
    }
  }, [products]);

  if (loading) {
    return <h2>Loading....</h2>;
  }

  return (
    <div>
      <div className="product-container">
        {products &&
          products.length &&
          products.map((product, index) => (
            <div key={index} className="product">
              <img src={product.thumbnail} alt={product.title} />
              <p>{product.title}</p>
              <div>{`${product.price} Rs`}</div>
            </div>
          ))}
      </div>
      <div className="button-container">
        <button
          disabled={disable}
          onClick={() => setCount((prevCount) => prevCount + 1)}
        >
          Load More Button
        </button>
        {disable && <h2> You have reached 100 limit!</h2>}
      </div>
    </div>
  );
}
