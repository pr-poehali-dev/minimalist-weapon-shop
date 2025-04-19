import { ShoppingCart, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-mm2-secondary p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-mm2-primary">MM2 Market</Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <nav>
            <ul className="flex space-x-6">
              <li><Link to="/" className="hover:text-mm2-primary transition-colors">Главная</Link></li>
              <li><Link to="/shop" className="hover:text-mm2-primary transition-colors">Магазин</Link></li>
              <li><Link to="/rare" className="hover:text-mm2-primary transition-colors">Редкие предметы</Link></li>
            </ul>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-white hover:text-mm2-primary">
              <ShoppingCart className="h-6 w-6" />
            </Button>
            <Button className="mm2-button">Войти</Button>
          </div>
        </div>
        
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6 text-white" />
          </Button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-mm2-secondary border-t border-gray-800 mt-4 py-2">
          <nav className="container mx-auto">
            <ul className="space-y-2">
              <li><Link to="/" className="block py-2 hover:text-mm2-primary transition-colors">Главная</Link></li>
              <li><Link to="/shop" className="block py-2 hover:text-mm2-primary transition-colors">Магазин</Link></li>
              <li><Link to="/rare" className="block py-2 hover:text-mm2-primary transition-colors">Редкие предметы</Link></li>
              <li className="pt-2 border-t border-gray-800">
                <Button className="mm2-button w-full mt-2">Войти</Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;