/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import Styles from './ListItem.module.css';

const ListItem:React.FC<ListItemProps> = ({ children, onClick }) => (
  <li
    className={Styles['list-item']}
  >
    <div onClick={onClick} onKeyDown={onClick}>
      {children}
    </div>
  </li>
);

export interface ListItemProps {
  onClick?: () => void;
}

export default ListItem;
