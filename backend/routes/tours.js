const express = require('express');
const router = express.Router();

// Mock Data
const tours = [
    { id: 1, name: 'Tokyo Adventure', country: 'Japan', price: 1200 },
    { id: 2, name: 'Paris Romantic Getaway', country: 'France', price: 1500 }
];

router.get('/', (req, res) => {
    res.json(tours);
});

module.exports = router;
