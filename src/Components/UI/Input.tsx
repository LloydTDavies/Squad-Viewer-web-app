import React from 'react';

import styles from './Input.module.css';

const Input: React.FC<InputProps> = ({
  className, type, value, onChange, placeholder,
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

export interface InputProps {
  className?: string;
  type?: string;
  value?: any;
  onChange?: (event: any) => void;
  placeholder?: string
}

export default Input;
