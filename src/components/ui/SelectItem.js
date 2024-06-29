// src/components/ui/SelectItem.js
import React from 'react';

const SelectItem = ({ children, value }) => {
  return <div data-value={value}>{children}</div>;
};

export default SelectItem;
