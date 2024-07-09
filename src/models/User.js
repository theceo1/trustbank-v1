const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  hashedPassword: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' }  // Added role field
});

module.exports = mongoose.models.User || mongoose.model('User', userSchema);
