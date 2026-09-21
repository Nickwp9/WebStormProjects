import { Outlet } from 'react-router-dom';

export const AppLayout: React.FC = () => {
  return (
    <div>
      <header>

      </header>
      <Outlet />
    </div>
  );
};