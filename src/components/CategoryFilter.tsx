import React from 'react';
import { 
  Building2, 
  Trees, 
  Clapperboard, 
  Trophy, 
  BookOpen, 
  Landmark, 
  GraduationCap 
} from 'lucide-react';

const categories = [
  { id: 'all', label: 'Todos', icon: null },
  { id: 'museum', label: 'Museus', icon: Building2 },
  { id: 'park', label: 'Parques', icon: Trees },
  { id: 'theater', label: 'Teatros', icon: Clapperboard },
  { id: 'sports', label: 'Esportes', icon: Trophy },
  { id: 'culture', label: 'Cultura', icon: BookOpen },
  { id: 'historical', label: 'Histórico', icon: Landmark },
  { id: 'education', label: 'Educação', icon: GraduationCap },
];

interface CategoryFilterProps {
  selected: string;
  onChange: (category: string) => void;
}

export function CategoryFilter({ selected, onChange }: CategoryFilterProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-4">
      {categories.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          onClick={() => onChange(id)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap
            ${selected === id 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
        >
          {Icon && <Icon size={16} />}
          {label}
        </button>
      ))}
    </div>
  );
}