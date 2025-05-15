export interface Piercing {
  id: number;
  title: string;
  description: string;
  price: number;
  available: boolean;
  imageUrl: string; 
}

export const PIERCINGS: Piercing[] = [
  {
    id: 1,
    title: 'Piercing Ouro 18k',
    description: 'Delicado, luxuoso e feito à mão com ouro legítimo. Perfeito para ocasiões especiais.',
    price: 350.0,
    available: true,
    imageUrl: 'assets/image.png'
  },
  {
    id: 2,
    title: 'Piercing Prata 925',
    description: 'Elegância clássica com acabamento brilhante em prata pura. Design atemporal.',
    price: 150.0,
    available: true,
    imageUrl: 'assets/image.png'
  },
  {
    id: 3,
    title: 'Piercing com Zircônia',
    description: 'Toque de brilho com pedras finas cravejadas em dourado. Sofisticação acessível.',
    price: 220.0,
    available: false,
    imageUrl: 'assets/image.png'
  },
  {
    id: 4,
    title: 'Piercing Rosé Gold',
    description: 'Tendência atual com um toque rosado, elegante e discreto.',
    price: 280.0,
    available: true,
    imageUrl: 'assets/image.png'
  }
];
