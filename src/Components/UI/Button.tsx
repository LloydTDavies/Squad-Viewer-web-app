import React from 'react';

import Styles from './Button.module.css';

const Button: React.FC<React.ComponentProps<'button'>> = (props) => {
  const {
    className = '',
    onClick,
    type,
    children,
    disabled = false,
  } = props;
  const classes = `${Styles.btn} ${className}`;

  return (
    <button
      className={classes}
      type={type === 'button' ? 'button' : 'submit'}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{children}</span>
    </button>
  );
};

export default Button;
