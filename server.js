const express = require('express');
const connection = require('./db');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/products', (req, res) => {
    const { name, description, price, category, stock_quantity, manufacturer, release_date, rating } = req.body;
    const query = `
        INSERT INTO products (name, description, price, category, stock_quantity, manufacturer, release_date, rating)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    connection.query(query, [name, description, price, category, stock_quantity, manufacturer, release_date, rating], (err, results) => {
        if (err) return res.status(500).send(err.message);
        res.json({ message: 'Product added successfully!', results });
    });
});

app.get('/api/products', (req, res) => {
    const query = 'SELECT * FROM products';
    connection.query(query, (err, results) => {
        if (err) return res.status(500).send(err.message);
        res.json(results);
    });
});

app.get('/api/products/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM products WHERE id = ?';
    connection.query(query, [id], (err, results) => {
        if (err) return res.status(500).send(err.message);
        if (results.length === 0) return res.status(404).send('Product not found');
        res.json(results[0]);
    });
});

app.put('/api/products/:id', (req, res) => {
    const { id } = req.params;
    const { name, description, price, category, stock_quantity, manufacturer, release_date, rating } = req.body;
    const query = `
        UPDATE products
        SET name = ?, description = ?, price = ?, category = ?, stock_quantity = ?, manufacturer = ?, release_date = ?, rating = ?
        WHERE id = ?
    `;
    connection.query(query, [name, description, price, category, stock_quantity, manufacturer, release_date, rating, id], (err, results) => {
        if (err) return res.status(500).send(err.message);
        res.json({ message: 'Product updated successfully!', results });
    });
});

app.delete('/api/products/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM products WHERE id = ?';
    connection.query(query, [id], (err, results) => {
        if (err) return res.status(500).send(err.message);
        res.json({ message: 'Product deleted successfully!', results });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
