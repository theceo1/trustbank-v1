// src/components/ui/avatar.js
import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

export const Avatar = ({ children, className, ...props }) => {
  return <div className={`avatar ${className}`} {...props}>{children}</div>;
};

Avatar.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export const AvatarImage = ({ src, alt }) => {
  return <Image src={src} alt={alt} className="avatar-image" />;
};

AvatarImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export const AvatarFallback = ({ children }) => {
  return <div className="avatar-fallback">{children}</div>;
};

AvatarFallback.propTypes = {
  children: PropTypes.node.isRequired,
};
