import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink activeClassName="is-active" exact to="/">Dashboard</NavLink>
    <NavLink activeClassName="is-active" exact to="/create">Create expense</NavLink>
  </header>
);

export default Header;
