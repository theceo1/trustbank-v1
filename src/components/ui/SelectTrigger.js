// src/components/ui/SelectTrigger.js
import React from 'react';

const SelectTrigger = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export default SelectTrigger;
