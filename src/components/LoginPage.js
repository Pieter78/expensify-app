import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ clickLogin }) => (
  <div>
    <button onClick={clickLogin}>Login</button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  clickLogin: () => {
    dispatch(startLogin());
  },
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
