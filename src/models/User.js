import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    match: [/\S+@\S+\.\S+/, 'Email is invalid'],
  },
  hashedPassword: {
    type: String,
    required: [true, 'Password is required'],
  },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
