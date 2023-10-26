import { useRouter } from 'next/router';
import Product from '../../components/Product';

const Products = () => {
  // const router = useRouter();
  // const { productData } = router.query; // Retrieve the query parameter

  // if (!productData) {
  //   return <div>Loading...</div>;
  // }

  // // You may want to parse the query parameter if it's a JSON string
  // const responseData = JSON.parse(productData);

  const responseData = JSON.parse(localStorage.getItem('productData'));

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
