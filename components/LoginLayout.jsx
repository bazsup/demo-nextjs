import React from 'react';
import AppNavigationBar from './AppNavigationBar';

// eslint-disable-next-line react/prop-types
const LoginLayout = ({ children }) => (
  <div>
    <AppNavigationBar />
    <div>
      <main>{children}</main>
    </div>
  </div>
);

export default LoginLayout;
