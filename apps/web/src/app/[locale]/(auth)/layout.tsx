import React, { PropsWithChildren } from 'react';

const AuthLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <main>{children}</main>;
};

export default AuthLayout;
