// src/components/ui/AvatarImage.js
import React from 'react';

const AvatarImage = ({ src }) => {
  return <img src={src} alt="" className="w-full h-full object-cover rounded-full" />;
};

export default AvatarImage;
