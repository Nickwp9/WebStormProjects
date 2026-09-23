import { Outlet } from 'react-router-dom';
import logo from '../assets/Logo with text.jpg';
export const AppLayout: React.FC = () => {
  return (
    <div>
      <header>
        <img src = {logo} alt = "Crossover"/>
      </header>
      <Outlet />
    </div>
  );
};