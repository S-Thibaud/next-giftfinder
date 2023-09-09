import Product from '../../components/Product';
import db from './db';

const Categories = ({data}) => {
  return (
    <div>
      <h1>Data Display Component</h1>
      {console.log(data)}
      <ul className="grid grid-cols-2 gap-4 p-5">
        {data.map((item, index) => (
          <Product key={index} item={item} />
          // <li key={index}>
          //   {item.productnaam}
          // </li>
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