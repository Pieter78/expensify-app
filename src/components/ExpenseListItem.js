import React from 'react';
import { NavLink } from 'react-router-dom';

const ExpenseListItem = ({
  id, description, amount, createdAt,
}) => (
  <div>
    <NavLink to={`/edit/${id}`}>
      <h3>{ description }</h3>
    </NavLink>
    <p>{amount}</p>
    <p>{createdAt}</p>
  </div>
);

export default ExpenseListItem;
