// src/components/ui/Textarea.js

import React from 'react';

export function Textarea({ id, name, value, onChange, className }) {
  return (
    <textarea
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className={className}
    />
  );
}
