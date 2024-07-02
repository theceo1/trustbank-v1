// src/components/ui/Select.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Select = ({ value, onSelect, children, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (val) => {
    onSelect(val);
    setIsOpen(false);
  };

  return (
    <div className="relative" {...props}>
      <button onClick={() => setIsOpen(!isOpen)} className="select-trigger">
        {value || 'Select'}
      </button>
      {isOpen && (
        <div className="absolute w-full select-content">
          {React.Children.map(children, (child) =>
            React.cloneElement(child, { onClick: () => handleSelect(child.props.value) })
          )}
        </div>
      )}
    </div>
  );
};

Select.propTypes = {
  value: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export const SelectItem = ({ value, children, onClick }) => (
  <div onClick={onClick} className="p-2 cursor-pointer hover:bg-teal-500 hover:text-white">
    {children}
  </div>
);

SelectItem.propTypes = {
  value: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Select;
