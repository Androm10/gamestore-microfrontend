import { FC } from 'react';
import './index.scss';
import { Outlet } from 'react-router-dom';
import { LayoutHeader } from '@/widgets/LayoutHeader';

export const App: FC = () => {
  return (
    <div>
      <LayoutHeader />
      <div>
        <Outlet />
      </div>
    </div>
  );
};
