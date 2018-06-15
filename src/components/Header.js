import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { startLogout } from '../actions/auth';

export const Header = ({ clickLogout }) => (
  <header>
    <h1>Expensify</h1>
    <NavLink activeClassName="is-active" exact to="/">Dashboard</NavLink>
    <NavLink activeClassName="is-active" exact to="/create">Create expense</NavLink>
    <button onClick={clickLogout}>Logout</button>
  </header>
);

const mapDispatchToProps = dispatch => ({
  clickLogout: () => dispatch(startLogout()),
});

export default connect(undefined, mapDispatchToProps)(Header);
