import { Suspense } from 'react';
import { AppBar } from './AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import Loader from './Loader/Loader';

export const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <AppBar />
      <Suspense fallback={Loader}>
        <Outlet />
      </Suspense>
    </div>
  );
};
