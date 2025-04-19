import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WeaponCard from '@/components/WeaponCard';
import { weaponsData } from '@/data/weapons';
import { Weapon } from '@/types/weapons';
import { toast } from '@/components/ui/use-toast';

const RareItems = () => {
  const rareWeapons = weaponsData.filter(
    weapon => weapon.rarity === 'Godly' || weapon.rarity === 'Ancient' || weapon.rarity === 'Vintage'
  );
  
  const handleAddToCart = (weapon: Weapon) => {
    toast({
      title: "Добавлено в корзину",
      description: `${weapon.name} добавлен в вашу корзину`,
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h1 className="text-3xl font-bold mb-4">Редкие предметы</h1>
            <p className="text-gray-400 max-w-3xl">
              Эксклюзивная коллекция самых редких и ценных предметов из Murder Mystery 2. 
              Здесь представлены оружия категорий Godly, Ancient и Vintage, которые трудно найти.
            </p>
          </div>
          
          <div className="bg-mm2-primary/10 p-6 rounded-md mb-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-4 md:mb-0 md:mr-6 text-3xl">🔥</div>
              <div>
                <h3 className="text-mm2-primary font-bold text-lg mb-1">Особые предложения</h3>
                <p className="text-gray-300">
                  Наша коллекция редких предметов постоянно обновляется. Возвращайтесь, чтобы не пропустить новые поступления!
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rareWeapons.map(weapon => (
              <WeaponCard 
                key={weapon.id}
                weapon={weapon}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
          
          {rareWeapons.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-400">
                В данный момент редкие предметы отсутствуют. Загляните позже!
              </p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RareItems;