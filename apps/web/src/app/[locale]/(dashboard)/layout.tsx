import React, { PropsWithChildren } from 'react';

import Layout from '@/layout/LayoutDefault/Layout';

const DashboardLayout: React.FC<PropsWithChildren> = async ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default DashboardLayout;
