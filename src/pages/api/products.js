import db from './db';

const searchProducts = async (req, res) => {
  if (req.method === 'POST') {
    try {
      // Extract data from the request body
      const { age, gender, category, priceRange } = req.body;

      // Voorbereiding
      // const minAge = 0;
      // const maxAge = 0;
      
      let query = 'SELECT * FROM products';
      // let query = 'SELECT products.* FROM products';

      // // If you want to join the 'categories' table to filter by category, you can do it like this:
      // if (categories && categories.length > 0) {
      //   query += ' INNER JOIN categories ON products.category_id = categories.id';
      // }

      // query += ' WHERE';

      // if (age) {
      //   query += ` products.leeftijd = '${age}'`;
      // }

      // if (categories && categories.length > 0) {
      //   // Ensure categories is an array of selected categories
      //   const categoryFilter = categories.map(category => `'${category}'`).join(', ');
      //   query += ` AND categories.productcategory IN (${categoryFilter})`;
      // }

      // if (gender) {
      //   query += ` geslacht = '${gender}'`;
      // }

      //   let query = `
      //   SELECT
      //       CASE
      //           WHEN age >= 0 AND age < 6 THEN '0-5'
      //           WHEN age >= 6 AND age < 12 THEN '6-11'
      //           WHEN age >= 12 AND age < 16 THEN '12-15'
      //           WHEN age >= 16 AND age < 18 THEN '16-17'
      //           WHEN age >= 18 AND age < 45 THEN '18-44'
      //           ELSE '45+'
      //       END AS age_group,
      //       GROUP_CONCAT(product_name) AS products_in_group
      //   FROM products
      //   GROUP BY age_group
      // `;

      // let query = 'SELECT * FROM products WHERE';

      // if (age) {
      //   query += ` leeftijd = '${age}'`;
      // }

      // if (category) {
      //   if (age || gender) {
      //     query += ' AND';
      //   }
      //   query += ` categorie = '${category}'`;
      // }
      // if (priceRange) {
      //   if (age || gender || category) {
      //     query += ' AND';
      //   }
      //   query += ` prijs <= ${priceRange}`;
      // }

      const products = await db.query(query, []);

      // Return the matched products as JSON
      res.status(200).json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

export default searchProducts;
