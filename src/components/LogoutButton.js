// src/components/LogoutButton.js
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = ({ className }) => {
  const { logout } = useAuth0();

  return (
    <button
      onClick={() => logout({ returnTo: window.location.origin })}
      className={className || "bg-red-500 text-white px-2 py-1 rounded"}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
