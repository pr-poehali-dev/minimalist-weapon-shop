import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WeaponCard from '@/components/WeaponCard';
import { weaponsData } from '@/data/weapons';
import { Weapon, WeaponRarity, WeaponType } from '@/types/weapons';
import { toast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Shop = () => {
  const [weapons, setWeapons] = useState<Weapon[]>(weaponsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedRarity, setSelectedRarity] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('price-asc');
  
  const handleAddToCart = (weapon: Weapon) => {
    toast({
      title: "Добавлено в корзину",
      description: `${weapon.name} добавлен в вашу корзину`,
    });
  };
  
  const applyFilters = () => {
    let filteredWeapons = [...weaponsData];
    
    // Поиск по названию
    if (searchTerm) {
      filteredWeapons = filteredWeapons.filter(weapon => 
        weapon.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Фильтр по типу
    if (selectedType !== 'all') {
      filteredWeapons = filteredWeapons.filter(weapon => 
        weapon.type === selectedType
      );
    }
    
    // Фильтр по редкости
    if (selectedRarity !== 'all') {
      filteredWeapons = filteredWeapons.filter(weapon => 
        weapon.rarity === selectedRarity
      );
    }
    
    // Сортировка
    switch (sortBy) {
      case 'price-asc':
        filteredWeapons.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filteredWeapons.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        filteredWeapons.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        filteredWeapons.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }
    
    return filteredWeapons;
  };
  
  const filteredWeapons = applyFilters();
  
  const rarities: WeaponRarity[] = [
    'Common', 'Uncommon', 'Rare', 'Legendary', 'Godly', 'Ancient', 'Vintage', 'Unique'
  ];
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Магазин</h1>
          
          <div className="bg-mm2-secondary p-6 rounded-md mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm mb-2">Поиск</label>
                <Input
                  type="text"
                  placeholder="Название оружия..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-mm2-background"
                />
              </div>
              
              <div>
                <label className="block text-sm mb-2">Тип</label>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger className="w-full bg-mm2-background">
                    <SelectValue placeholder="Все типы" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все типы</SelectItem>
                    <SelectItem value="Knife">Ножи</SelectItem>
                    <SelectItem value="Gun">Пистолеты</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm mb-2">Редкость</label>
                <Select value={selectedRarity} onValueChange={setSelectedRarity}>
                  <SelectTrigger className="w-full bg-mm2-background">
                    <SelectValue placeholder="Все редкости" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все редкости</SelectItem>
                    {rarities.map(rarity => (
                      <SelectItem key={rarity} value={rarity}>{rarity}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm mb-2">Сортировка</label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full bg-mm2-background">
                    <SelectValue placeholder="Сортировка" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="price-asc">Цена: по возрастанию</SelectItem>
                    <SelectItem value="price-desc">Цена: по убыванию</SelectItem>
                    <SelectItem value="name-asc">Название: А-Я</SelectItem>
                    <SelectItem value="name-desc">Название: Я-А</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          {filteredWeapons.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredWeapons.map(weapon => (
                <WeaponCard 
                  key={weapon.id}
                  weapon={weapon}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-400 mb-4">По вашему запросу ничего не найдено</p>
              <Button onClick={() => {
                setSearchTerm('');
                setSelectedType('all');
                setSelectedRarity('all');
              }} className="mm2-button">
                Сбросить фильтры
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Shop;