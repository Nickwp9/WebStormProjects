import { Outlet, Link } from 'react-router-dom';
import logo from '../assets/Logo without text.jpg';

export const AppLayout: React.FC = () => {
  return (
    <div>
      <header className="flex items-center justify-start gap-12 px-8 py-4 w-full">
        <Link to="/">
          <img src={logo} alt="Crossover" style={{height: '72px', width: 'auto'}}/>
        </Link>
        <nav className="flex gap-6">
          <Link to="/cart" className="text-[#f5f5f5] no-underline font-semibold hover:text-[#b6ff00]">Cart</Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};