import React from 'react';
import PropTypes from 'prop-types';

const Tooltip = ({ children, text }) => (
  <div className="relative flex items-center group">
    {children}
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-full mb-2 w-max bg-gray-700 text-white text-sm py-1 px-2 rounded shadow-lg hidden group-hover:block">
      {text}
    </div>
  </div>
);

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
};

export default Tooltip;
