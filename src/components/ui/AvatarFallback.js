// src/components/ui/AvatarFallback.js
import React from 'react';

const AvatarFallback = ({ children }) => {
  return <div className="w-full h-full flex items-center justify-center bg-gray-300 rounded-full">{children}</div>;
};

export default AvatarFallback;
