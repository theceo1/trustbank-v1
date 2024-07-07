import dbConnect from './mongodb';
import User from '@/models/User';

export async function saveUser(user) {
  await dbConnect();
  const newUser = new User(user);
  await newUser.save();
  console.log('User saved:', newUser);
}

export async function findUserByEmail(email) {
  await dbConnect();
  const user = await User.findOne({ email }).lean();
  console.log('User lookup result:', user);
  return user;
}
