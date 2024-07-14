const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
  // Define your schema here
});

module.exports = mongoose.models.Portfolio || mongoose.model('Portfolio', portfolioSchema);
