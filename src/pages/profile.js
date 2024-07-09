// src/pages/profile.js
import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Image from 'next/image';

const UserProfile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [profile, setProfile] = useState({
    username: '',
    email: '',
    profilePicture: '',
    twoFactorAuth: false,
    accountCreationDate: '',
    balance: 0
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (user) {
      // Fetch additional user data from your backend if necessary
      setProfile({
        username: user.nickname || 'Anonymous',
        email: user.email || 'john.doe@example.com',
        profilePicture: user.picture || '',
        twoFactorAuth: false, // This would come from your backend
        accountCreationDate: new Date(user.updated_at).toLocaleDateString() || 'N/A',
        balance: 0 // This would come from your backend
      });
    }
  }, [user]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <div>Please log in to view your profile.</div>;
  }

  const handleUpdateProfile = () => {
    // Update profile logic here (e.g., send updated data to your backend)
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white">
      <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">User Profile</h2>
        {profile.profilePicture && (
          <Image
            src={profile.profilePicture}
            alt="Profile"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
        )}
        <div className="mb-4">
          <label className="block text-sm font-medium">Username</label>
          <input
            type="text"
            value={profile.username}
            onChange={(e) => setProfile({ ...profile, username: e.target.value })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            disabled={!isEditing}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            disabled={!isEditing}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Two-Factor Authentication</label>
          <input
            type="checkbox"
            checked={profile.twoFactorAuth}
            onChange={(e) => setProfile({ ...profile, twoFactorAuth: e.target.checked })}
            className="mt-1 block"
            disabled={!isEditing}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Account Creation Date</label>
          <input
            type="text"
            value={profile.accountCreationDate}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            disabled
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Balance</label>
          <input
            type="text"
            value={`$${profile.balance}`}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            disabled
          />
        </div>
        <button
          type="button"
          className={`w-full py-2 px-4 ${isEditing ? 'bg-blue-600' : 'bg-green-600'} text-white font-medium rounded-md hover:${isEditing ? 'bg-blue-700' : 'bg-green-700'} transition duration-300`}
          onClick={isEditing ? handleUpdateProfile : () => setIsEditing(true)}
        >
          {isEditing ? 'Update Profile' : 'Edit Profile'}
        </button>
        {!isEditing && (
          <button
            type="button"
            className="w-full mt-4 py-2 px-4 bg-gray-600 text-white font-medium rounded-md hover:bg-gray-700 transition duration-300"
            onClick={() => window.location.href = '/transaction-history'}
          >
            View Transaction History
          </button>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
