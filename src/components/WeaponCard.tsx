import { Weapon, rarityColors } from '@/types/weapons';
import { Button } from './ui/button';

interface WeaponCardProps {
  weapon: Weapon;
  onAddToCart?: (weapon: Weapon) => void;
}

const WeaponCard = ({ weapon, onAddToCart }: WeaponCardProps) => {
  return (
    <div className="weapon-card">
      <div className="aspect-square overflow-hidden rounded-md mb-4">
        <img 
          src={weapon.imageUrl} 
          alt={weapon.name}
          className="w-full h-full object-cover" 
        />
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-lg">{weapon.name}</h3>
          <span className="text-mm2-primary font-semibold">${weapon.price}</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <span className={`${rarityColors[weapon.rarity]} text-sm font-medium`}>{weapon.rarity}</span>
          <span className="text-gray-500 text-sm">• {weapon.type}</span>
          {weapon.year && <span className="text-gray-500 text-sm">• {weapon.year}</span>}
        </div>
        
        <p className="text-gray-400 text-sm line-clamp-2">{weapon.description}</p>
        
        <Button 
          className="mm2-button w-full" 
          onClick={() => onAddToCart && onAddToCart(weapon)}
        >
          В корзину
        </Button>
      </div>
    </div>
  );
};

export default WeaponCard;