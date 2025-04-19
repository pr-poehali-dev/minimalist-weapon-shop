import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-mm2-background py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-mm2-primary/10 to-mm2-secondary/30 opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Лучшее оружие для 
            <span className="text-mm2-primary block mt-1">Murder Mystery 2</span>
          </h1>
          
          <p className="text-gray-300 text-lg mb-8">
            Приобретайте редкие и коллекционные предметы для вашей игры. 
            Мгновенная доставка, гарантированная безопасность сделок.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="mm2-button">
              <Link to="/shop">Перейти в магазин</Link>
            </Button>
            <Button asChild variant="outline" className="border-mm2-primary text-mm2-primary hover:bg-mm2-primary/10">
              <Link to="/rare">Редкие предметы</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;