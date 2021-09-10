import React from 'react';

import styles from './Input.module.css';

const Input: React.FC<React.HTMLProps<HTMLInputElement>> = ({
  className = '', type, value, onChange, placeholder,
}) => {
  const classes = `${styles.input} ${className}`;
  return (
    <input
      className={classes}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
