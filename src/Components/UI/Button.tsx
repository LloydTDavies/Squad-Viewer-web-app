/* eslint-disable react/button-has-type */
import React from 'react';

import Styles from './Button.module.css';

const Button: React.FC<ButtonProps> = (props) => {
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
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{children}</span>
    </button>
  );
};

export interface ButtonProps {
    className?: string;
    type: 'button' | 'submit';
    onClick: (event:unknown) => void;
    disabled?:boolean;
}

export default Button;
