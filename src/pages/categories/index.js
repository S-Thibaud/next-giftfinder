import Product from '../../components/Product';
import db from '../api/db';

const Categories = ({ data }) => {
  return (
    <div>
      <h1>Data Display Component</h1>
      <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((item, index) => (
          <Product key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Categories;

export async function getStaticProps() {
  // Fetch data from MySQL database
  const query = 'SELECT * FROM products';
  const data = await db.query(query);

  return {
    props: {
      data,
    },
  };
}
