import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ variant, size, children, ...props }) => {
  const classes = classNames({
    'btn': true,
    [`btn-${variant}`]: variant,
    [`btn-${size}`]: size,
  });

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['outline', 'solid']).isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
