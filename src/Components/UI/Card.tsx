import React from 'react';
import Styles from './Card.module.css';

const Card: React.FC<CardProps> = ({ className, children }) => {
  const classes = `${Styles.card} ${className}`;
  return <div className={classes}>{children}</div>;
};

export interface CardProps {
    className?: string
}

export default Card;
