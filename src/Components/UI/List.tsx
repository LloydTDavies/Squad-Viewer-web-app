import React from 'react';
import Styles from './List.module.css';

const List: React.FC = ({ children }) => (
  <ul
    className={Styles.list}
  >
    {children}
  </ul>
);

export default List;
