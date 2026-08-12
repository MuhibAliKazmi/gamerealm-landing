import { Hexagon, Ghost, Crosshair } from 'lucide-react';
import type { Game, CatalogGame } from '../types';

export const FEATURED_GAMES: Game[] = [
  {
    id: 'neon-drift',
    title: 'Neon Drift',
    genre: 'Cyberpunk Racing',
    status: 'Available Now',
    icon: Hexagon,
    gradient: 'from-pink-500 to-rose-600',
    overlay: 'bg-rose-950/40',
    image: '/characters/neon-drift.png',
    features: ['High-speed cyber vehicles', 'Neon-lit futuristic tracks', 'Intense multiplayer racing', 'Customizable neon aesthetics'],
  },
  {
    id: 'void-runner',
    title: 'Void Runner',
    genre: 'Sci-Fi Rogue-lite',
    status: 'Early Access',
    icon: Ghost,
    gradient: 'from-violet-500 to-purple-600',
    overlay: 'bg-violet-950/40',
    image: '/characters/void-runner.png',
    features: ['Procedurally generated galaxies', 'Deep upgrade systems', 'Challenging boss encounters', 'Mystical void abilities'],
  },
  {
    id: 'strike-protocol',
    title: 'Strike Protocol',
    genre: 'Tactical Shooter',
    status: 'In Development',
    icon: Crosshair,
    gradient: 'from-cyan-500 to-blue-600',
    overlay: 'bg-cyan-950/40',
    image: '/characters/strike-protocol.png',
    features: ['Realistic tactical gunplay', 'Team-based objective modes', 'Destructible environments', 'Extensive weapon customization'],
  },
];

export const CATALOG_GAMES: CatalogGame[] = [
  { name: 'Neon Drift', status: 'Available Now', desc: 'High-speed cyberpunk racing' },
  { name: 'Void Runner', status: 'Early Access', desc: 'Sci-Fi Rogue-lite action' },
  { name: 'Strike Protocol', status: 'In Development', desc: 'Tactical team-based shooter' },
  { name: 'Aethelgard', status: 'Coming 2027', desc: 'Open-world fantasy RPG' },
  { name: 'Mecha Core', status: 'Alpha', desc: 'Arena mech combat simulator' },
  { name: 'Project: Horizon', status: 'Unannounced', desc: 'Next-gen survival sandbox' },
];
