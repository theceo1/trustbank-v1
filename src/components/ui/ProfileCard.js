// src/components/ui/ProfileCard.js
import React from 'react';
import PropTypes from 'prop-types';

const ProfileCard = ({ user, onEdit }) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <h2 className="text-2xl font-bold mb-4">Profile</h2>
    <p><strong>Name:</strong> {user.name}</p>
    <p><strong>Email:</strong> {user.email}</p>
    <button onClick={onEdit} className="mt-4 bg-teal-500 text-white p-2 rounded">Edit Profile</button>
  </div>
);

ProfileCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default ProfileCard;
