import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../actions/auth';

export const Header = ({ clickLogout }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" exact="true" to="/Dashboard">
          <h1>Expensify</h1>
        </Link>
        <button className="button button--link" onClick={clickLogout}>Logout</button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = dispatch => ({
  clickLogout: () => dispatch(startLogout()),
});

export default connect(undefined, mapDispatchToProps)(Header);
