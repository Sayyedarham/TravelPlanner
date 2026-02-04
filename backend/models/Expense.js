const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    destination: { type: String, required: true },
    days: { type: Number, required: true },
    flightCost: { type: Number, required: true },
    dailyCost: { type: Number, required: true },
    accommodationTier: { type: String, required: true },
    total: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Expense', ExpenseSchema);
