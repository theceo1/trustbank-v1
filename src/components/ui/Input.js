// src/components/ui/Input.js

import React from 'react';

export function Input({ type, id, name, value, onChange, className }) {
  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className={className}
    />
  );
}
