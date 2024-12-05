import React from 'react';
import { Instagram, Clock, Phone, MapPin } from 'lucide-react';
import { TouristSpot } from '../types/tourist-spot';

interface SpotCardProps {
  spot: TouristSpot;
  onClick: (spot: TouristSpot) => void;
}

export function SpotCard({ spot, onClick }: SpotCardProps) {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
      onClick={() => onClick(spot)}
    >
      <img 
        src={spot.image} 
        alt={spot.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{spot.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{spot.description}</p>
        <div className="flex items-center gap-2 text-gray-500">
          <MapPin size={16} />
          <span className="text-sm">{spot.address}</span>
        </div>
      </div>
    </div>
  );
}