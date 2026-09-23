import { Outlet, Link } from 'react-router-dom';
import logo from '../assets/Logo without text.jpg';
export const AppLayout: React.FC = () => {
  return (
    <div>
      <header className='header'>
      <Link to = '/'>
        <img src = {logo} alt = "Crossover" style = {{height: '72px', width: 'auto'}}/>
       </Link>
        <nav className='nav'>
          <Link to = '/cart'>Cart</Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};