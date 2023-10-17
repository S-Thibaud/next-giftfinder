// pages/api/products.js

const searchProducts = async (req, res) => {
  if (req.method === 'POST') {
    try {
      // Extract data from the request body
      const { age, gender, category, priceRange } = req.body;

      // Perform a database query to retrieve products
      // Example: const products = await fetchProductsFromDatabase(age, gender, priceRange, category);

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
