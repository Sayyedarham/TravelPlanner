const express = require('express');
const router = express.Router();

// Mock Data
const countries = [
    { id: 1, name: 'Japan', image: 'https://source.unsplash.com/400x300/?japan' },
    { id: 2, name: 'France', image: 'https://source.unsplash.com/400x300/?france' },
    { id: 3, name: 'Italy', image: 'https://source.unsplash.com/400x300/?italy' }
];

router.get('/', (req, res) => {
    res.json(countries);
});

module.exports = router;
