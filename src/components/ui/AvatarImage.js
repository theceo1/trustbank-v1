// src/components/ui/AvatarImage.js
import Image from 'next/image';
import React from 'react';

const AvatarImage = ({ src }) => {
  return <Image src={src} alt="" className="w-full h-full object-cover rounded-full" />;
};

export default AvatarImage;
