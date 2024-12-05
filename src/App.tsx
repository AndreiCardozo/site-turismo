import React, { useState, useMemo } from 'react';
import { touristSpots } from './data/tourist-spots';
import { SpotCard } from './components/SpotCard';
import { SpotModal } from './components/SpotModal';
import { CategoryFilter } from './components/CategoryFilter';
import { SearchBar } from './components/SearchBar';
import { Banner } from './components/Banner';
import { TouristSpot } from './types/tourist-spot';

function App() {
  const [selectedSpot, setSelectedSpot] = useState<TouristSpot | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSpots = useMemo(() => {
    return touristSpots.filter(spot => {
      const matchesCategory = selectedCategory === 'all' || spot.category === selectedCategory;
      const matchesSearch = spot.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          spot.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Banner />

      <main className="container mx-auto px-4 py-8 -mt-16 relative z-10">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <SearchBar 
            value={searchQuery} 
            onChange={setSearchQuery} 
          />
          
          <CategoryFilter 
            selected={selectedCategory} 
            onChange={setSelectedCategory} 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSpots.map(spot => (
            <SpotCard 
              key={spot.id} 
              spot={spot} 
              onClick={setSelectedSpot}
            />
          ))}
        </div>

        {filteredSpots.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">
              Nenhum ponto turístico encontrado com os filtros selecionados.
            </p>
          </div>
        )}
      </main>

      {selectedSpot && (
        <SpotModal 
          spot={selectedSpot} 
          onClose={() => setSelectedSpot(null)} 
        />
      )}
    </div>
  );
}

export default App;