const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use(express.static('public')); // Serve static files from 'public' directory

// API routes
app.use('/api/products', productRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
