// Higher Order Component (HOC) - a component (HOC) that renders another component(s) (regular)
// Reuse code
// Render hijacking
// Prop manipulation

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
  <h1>Info</h1> 
  <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => (props) => (
  <div>
    { props.isAdmin && <p>This is private info. Please don't share!</p>}
    <WrappedComponent { ...props } />
  </div>
);

const requireAuthentication = (WrappedComponent) => (props) => (
  <div>
    { props.isAuthenticated ? ( 
      <WrappedComponent { ...props } /> 
    ) : (
      <p>You must be authenticated to see this</p> 
    )}
  </div>
);
// requireAuthentication


const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="These are the details" />, document.getElementById('app'));