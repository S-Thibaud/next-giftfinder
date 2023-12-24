import { useEffect, useState } from 'react';
import Product from '../../components/Product';

const Products = () => {
  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    // Check if running on the client side before using localStorage
    if (typeof window !== 'undefined') {
      const storedData = localStorage.getItem('productData');

      if (storedData) {
        try {
          const parsedData = JSON.parse(storedData);
          setResponseData(parsedData);
        } catch (error) {
          console.error('Error parsing localStorage data:', error);
        }
      }
    }
  }, []);

  return (
    <div>
      <h1>Products Component</h1>
      <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {responseData.map((item, index) => (
          <Product key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Products;
