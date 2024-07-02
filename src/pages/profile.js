// src/pages/profile.js
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { useAuth } from '@/context/AuthContext';
import { toast } from 'react-toastify';

const UserProfile = () => {
  const { user, updateUserProfile, changePassword } = useAuth();
  const [profile, setProfile] = useState({
    name: user?.name || 'John Doe',
    email: user?.email || 'john.doe@example.com',
    phone: user?.phone || '123-456-7890',
    address: user?.address || '123 Main St, City, Country',
  });
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUserProfile(profile);
      toast.success('Profile updated successfully!');
    } catch (error) {
      toast.error('Failed to update profile.');
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }
    try {
      await changePassword(password);
      toast.success('Password changed successfully!');
    } catch (error) {
      toast.error('Failed to change password.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <Card>
        <CardHeader>
          <CardTitle>User Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleProfileSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={profile.name}
                onChange={handleChange}
                className="w-full"
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                className="w-full"
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input
                type="text"
                id="phone"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                className="w-full"
              />
            </div>
            <div>
              <Label htmlFor="address">Address</Label>
              <Input
                type="text"
                id="address"
                name="address"
                value={profile.address}
                onChange={handleChange}
                className="w-full"
              />
            </div>
            <Button type="submit" variant="solid" className="bg-black text-white">
              Save Changes
            </Button>
          </form>
        </CardContent>
      </Card>
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Change Password</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <div>
              <Label htmlFor="password">New Password</Label>
              <Input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full"
                required
              />
            </div>
            <div>
              <Label htmlFor="confirmPassword">Confirm New Password</Label>
              <Input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full"
                required
              />
            </div>
            <Button type="submit" variant="solid" className="bg-black text-white">
              Change Password
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserProfile;
