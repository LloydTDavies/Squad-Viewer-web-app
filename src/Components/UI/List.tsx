import React from 'react';
import Styles from './List.module.css';

const List: React.FC<ListProps> = ({ children, className = '' }) => (
  <ul
    className={`${Styles.list} ${className}`}
  >
    {children}
  </ul>
);

export interface ListProps {
  className?: string;
}

export default List;
