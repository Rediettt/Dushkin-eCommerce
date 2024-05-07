const express = require('express');
const app = express();
const port = 5000;

// Replace this with your database connection code
const productsDatabase = {
  1: { name: 'Product 1', description: 'Description for Product 1' },
  2: { name: 'Product 2', description: 'Description for Product 2' },
  // Add more products as needed
};

app.get('/api/products/:id', (req, res) => {
  const productId = req.params.id;
  const product = productsDatabase[productId];

  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }

  res.json(product);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
