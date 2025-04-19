import { Weapon } from '../types/weapons';

export const weaponsData: Weapon[] = [
  {
    id: 1,
    name: 'Луночтец',
    type: 'Knife',
    rarity: 'Godly',
    price: 5000,
    imageUrl: '/placeholder.svg',
    description: 'Изысканное оружие с острым лезвием, обладающее мистическими свойствами.'
  },
  {
    id: 2,
    name: 'Хроматический бластер',
    type: 'Gun',
    rarity: 'Legendary',
    price: 3500,
    imageUrl: '/placeholder.svg',
    description: 'Фантастический пистолет с уникальным дизайном и мощным выстрелом.'
  },
  {
    id: 3,
    name: 'Призрачный клинок',
    type: 'Knife',
    rarity: 'Godly',
    price: 4800,
    imageUrl: '/placeholder.svg',
    description: 'Нож с полупрозрачным лезвием, созданным из редкого материала.'
  },
  {
    id: 4,
    name: 'Ледяная душа',
    type: 'Gun',
    rarity: 'Ancient',
    price: 6200,
    imageUrl: '/placeholder.svg',
    description: 'Древнее оружие, созданное мастерами ледяной магии.',
    year: 2017
  },
  {
    id: 5,
    name: 'Огненный страж',
    type: 'Knife',
    rarity: 'Ancient',
    price: 6500,
    imageUrl: '/placeholder.svg',
    description: 'Нож, зачарованный древним пламенем, которое никогда не гаснет.',
    year: 2016
  },
  {
    id: 6,
    name: 'Тихий ветер',
    type: 'Gun',
    rarity: 'Vintage',
    price: 4200,
    imageUrl: '/placeholder.svg',
    description: 'Коллекционный пистолет из первой серии игры.',
    year: 2014
  }
];