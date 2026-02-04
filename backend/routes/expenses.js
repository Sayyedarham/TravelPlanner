const express = require('express');
const router = express.Router();
const auth = require('../utils/authMiddleware');
const Expense = require('../models/Expense');

router.post('/', auth, async (req,res) => {
  try {
    const { destination, days, flightCost, dailyCost, accommodationTier, total } = req.body;
    const e = new Expense({
      user: req.user.id,
      destination, days, flightCost, dailyCost, accommodationTier, total
    });
    await e.save();
    res.json(e);
  } catch(err){ console.error(err); res.status(500).json({error:'Server error'}); }
});

router.get('/', auth, async (req,res) => {
  try {
    const list = await Expense.find({ user: req.user.id }).sort({ createdAt:-1 });
    res.json(list);
  } catch(err){ console.error(err); res.status(500).json({error:'Server error'}); }
});

module.exports = router;