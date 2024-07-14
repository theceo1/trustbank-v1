// src/components/ui/Label.js

import React from 'react';
import PropTypes from 'prop-types';

const Label = ({ htmlFor, children }) => (
  <label htmlFor={htmlFor} className="block text-sm font-semibold mb-2">
    {children}
  </label>
);

Label.propTypes = {
  htmlFor: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Label;
