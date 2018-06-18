import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ clickLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expensify</h1>
      <p>It&#39;s time to bring your expenses under control!</p>
      <button className="button button--blue" onClick={clickLogin}>Login with Google</button>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  clickLogin: () => {
    dispatch(startLogin());
  },
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
