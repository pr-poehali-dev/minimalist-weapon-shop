export type WeaponRarity = 'Common' | 'Uncommon' | 'Rare' | 'Legendary' | 'Godly' | 'Ancient' | 'Vintage' | 'Unique';

export type WeaponType = 'Knife' | 'Gun';

export interface Weapon {
  id: number;
  name: string;
  type: WeaponType;
  rarity: WeaponRarity;
  price: number;
  imageUrl: string;
  description: string;
  year?: number;
}

export const rarityColors: Record<WeaponRarity, string> = {
  Common: 'text-gray-400',
  Uncommon: 'text-green-400',
  Rare: 'text-blue-400',
  Legendary: 'text-purple-400',
  Godly: 'text-yellow-400',
  Ancient: 'text-orange-400',
  Vintage: 'text-pink-400',
  Unique: 'text-red-400'
};