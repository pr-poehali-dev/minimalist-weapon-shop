import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-mm2-secondary pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-mm2-primary text-xl font-bold mb-4">MM2 Market</h3>
            <p className="text-gray-400 mb-4">
              Лучшая площадка для покупки и продажи оружия из игры Murder Mystery 2.
            </p>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-mm2-primary transition-colors">Главная</Link></li>
              <li><Link to="/shop" className="hover:text-mm2-primary transition-colors">Магазин</Link></li>
              <li><Link to="/rare" className="hover:text-mm2-primary transition-colors">Редкие предметы</Link></li>
              <li><Link to="/about" className="hover:text-mm2-primary transition-colors">О нас</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: contact@mm2market.com</li>
              <li>Discord: MM2Market</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} MM2 Market. Все права защищены.</p>
          <p className="mt-1">Этот сайт не связан с Roblox Corporation и является неофициальным.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;