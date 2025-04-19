import { useState } from 'react';
import { Weapon } from '@/types/weapons';
import WeaponCard from './WeaponCard';
import { Button } from './ui/button';
import { toast } from '@/components/ui/use-toast';

interface FeaturedWeaponsProps {
  weapons: Weapon[];
  title: string;
}

const FeaturedWeapons = ({ weapons, title }: FeaturedWeaponsProps) => {
  const [cart, setCart] = useState<Weapon[]>([]);
  
  const handleAddToCart = (weapon: Weapon) => {
    setCart([...cart, weapon]);
    toast({
      title: "Добавлено в корзину",
      description: `${weapon.name} добавлен в вашу корзину`,
    });
  };
  
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">{title}</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {weapons.map((weapon) => (
            <WeaponCard 
              key={weapon.id} 
              weapon={weapon} 
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <Button asChild variant="outline" className="border-mm2-primary text-mm2-primary hover:bg-mm2-primary/10">
            <a href="/shop">Показать все</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWeapons;