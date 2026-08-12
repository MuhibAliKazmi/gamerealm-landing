import type { Edition } from '../types';

export const EDITIONS: Edition[] = [
  {
    name: 'Standard Edition',
    price: '$59.99',
    features: [
      { label: 'Base Game', included: true },
      { label: 'Exclusive Armor Set', included: false },
      { label: '3-Day Early Access', included: false },
    ],
  },
  {
    name: 'Deluxe Edition',
    price: '$79.99',
    features: [
      { label: 'Base Game', included: true },
      { label: 'Exclusive Armor Set', included: true },
      { label: '3-Day Early Access', included: false },
    ],
    highlighted: true,
  },
  {
    name: 'Ultimate Edition',
    price: '$99.99',
    features: [
      { label: 'Base Game', included: true },
      { label: 'Exclusive Armor Set', included: true },
      { label: '3-Day Early Access', included: true },
    ],
  },
];
