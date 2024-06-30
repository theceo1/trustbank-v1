// src/pages/userProfile.js
import React, { useState, useEffect } from 'react';
import ProfileCard from '@/components/ui/ProfileCard';
import EditProfileForm from '@/components/ui/EditProfileForm';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch('/api/user');
      const data = await response.json();
      setUser(data);
    };

    fetchUserData();
  }, []);

  const handleEdit = () => setIsEditing(true);
  const handleCancel = () => setIsEditing(false);
  const handleSave = async (updatedUser) => {
    const response = await fetch('/api/user', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUser),
    });

    if (response.ok) {
      const data = await response.json();
      setUser(data);
      setIsEditing(false);
    }
  };

  return (
    <div className="container mx-auto py-8">
      {user ? (
        isEditing ? (
          <EditProfileForm user={user} onSave={handleSave} onCancel={handleCancel} />
        ) : (
          <ProfileCard user={user} onEdit={handleEdit} />
        )
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserProfile;
