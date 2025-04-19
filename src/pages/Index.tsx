import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import FeaturedWeapons from '@/components/FeaturedWeapons';
import { weaponsData } from '@/data/weapons';

const Index = () => {
  // Выбираем оружие с высшими редкостями для показа
  const featuredWeapons = weaponsData
    .filter(weapon => weapon.rarity === 'Godly' || weapon.rarity === 'Ancient')
    .slice(0, 3);
    
  const latestWeapons = [...weaponsData]
    .sort((a, b) => b.id - a.id)
    .slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        <FeaturedWeapons 
          weapons={featuredWeapons} 
          title="Элитное оружие" 
        />
        
        <div className="bg-mm2-secondary py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Почему выбирают нас</h2>
              <p className="text-gray-400 mb-8">
                MM2 Market — это доверие, безопасность и гарантированное качество каждой сделки
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-lg bg-mm2-background">
                  <div className="text-3xl mb-4">💰</div>
                  <h3 className="text-lg font-semibold mb-2">Лучшие цены</h3>
                  <p className="text-gray-400 text-sm">Мы гарантируем конкурентные цены на все предметы.</p>
                </div>
                
                <div className="p-6 rounded-lg bg-mm2-background">
                  <div className="text-3xl mb-4">🔒</div>
                  <h3 className="text-lg font-semibold mb-2">Безопасность</h3>
                  <p className="text-gray-400 text-sm">Каждая транзакция защищена и проверена.</p>
                </div>
                
                <div className="p-6 rounded-lg bg-mm2-background">
                  <div className="text-3xl mb-4">⚡</div>
                  <h3 className="text-lg font-semibold mb-2">Быстрая доставка</h3>
                  <p className="text-gray-400 text-sm">Получите свое оружие в течение нескольких минут.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <FeaturedWeapons 
          weapons={latestWeapons} 
          title="Новые поступления" 
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;