export interface Game {
  id: string;
  title: string;
  genre: string;
  status: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  overlay: string;
  image: string;
  features: string[];
}

export interface CatalogGame {
  name: string;
  status: string;
  desc: string;
}

export interface Edition {
  name: string;
  price: string;
  features: EditionFeature[];
  highlighted?: boolean;
}

export interface EditionFeature {
  label: string;
  included: boolean;
}

export interface Stat {
  label: string;
  value: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface ContactInfo {
  label: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
}
